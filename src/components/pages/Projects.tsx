import { useEffect, useState } from 'react';

import axios from 'axios';

import styled from 'styled-components';
import Container from '../UI/Container';
import ProjectCard from '../ProjectCard';

import { Pagination } from 'antd';


const ContentMain = styled.div<StyledProps>`
display: flex;
flex-direction: column;
align-items: center;
  h1{
    margin:0 auto;
    font-size: 3rem;
    ${props => {
    const { textShadow } = props.theme.main;
    return `text-shadow:3px 6px 0px ${textShadow};`;
  }
  }
  }

  .card-container{
    margin-top:5vmin;
    padding:3vmin;
    max-width:70vw;
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(300px, 1fr) );
    gap:3vmin 4vmin;
  }
  .pagination-custom{
    display: flex;
    list-style-type: none;
    gap:30px;
    align-items:center;
    min-width:20vw;
    padding:3vmin 0;
    margin-top: 3vmin;
    li a,button{
      outline: none;
      border:1px solid #585757;
      padding:2px 8px;
      border-radius:2px;
      ${props => {
    const { main, contrastText } = props.theme.main;
    return `
        background-color:${main};
        color: ${contrastText};
        `;
  }
  }
    }
  }
`

interface ProjectProps {

}

interface StyledProps {

}

interface Repo {
  id: number,
  name: string,
  html_url: string,
  owner: { avatar_url: string }
}
interface PaginationData {
  perPage: number,
  page: number,
  total?: number,
}

const USER = 'darkmift'/**alonzo245 */;


const getRepos = async (pagination: PaginationData): Promise<Repo[]> => {
  try {
    const { page, perPage } = pagination;
    const repoUrl = `https://api.github.com/users/${USER}/repos?page=${page}&per_page=${perPage}`
    const respose = await axios.get(repoUrl)
    const repos = respose.data
    return await repos
  } catch (error) {
    console.log("🚀 ~ file: Projects.tsx ~ line 45 ~ getRepos ~ error", error)
    return [];
  }
}

const getRepoTotal = async (): Promise<number> => {
  try {
    const totalRepoCount = `https://api.github.com/users/${USER}`;
    const totalData: { data: { public_repos: number } } = await axios.get(totalRepoCount)
    const { public_repos } = totalData.data;
    return public_repos;
  } catch (error) {
    console.log("🚀 ~ file: Projects.tsx ~ line 45 ~ getRepos ~ error", error)
    return 0;
  }
}

const Projects = (props: ProjectProps): JSX.Element => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [paginationData, setPaginationData] = useState<PaginationData>({ perPage: 12, page: 1, total: 0 });
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getRepoTotal().then((totalReposCount) => {
      setPaginationData((prevState) => ({ ...prevState, total: totalReposCount }))
    }).catch((error) => {
      console.log("🚀 ~ file: Projects.tsx ~ line 118 ~ getRepoTotal ~ error", error)
      setIsLoading(false)
    })
  }, [])
  useEffect(() => {
    setIsLoading(true)
    getRepos(paginationData).then(repos => {
      console.log("🚀 ~ file: Projects.tsx ~ line 57 ~ getRepos ~ repos", repos)

      setRepos(repos)
      setIsLoading(false)
    }).catch((error) => {
      console.log("🚀 ~ file: Projects.tsx ~ line 118 ~ getRepoTotal ~ error", error)
      setIsLoading(false)
    })
  }, [paginationData])

  const setPagination = (evt: any) => {
    console.log("setPagination", evt)
    setPaginationData((prevState) => ({ ...prevState, perPage: 12, page: evt }))
  }

  return (
    <Container className="projects-page page" justifyContent="" alignItems="flex-start">
      <div data-scroll-to="projects" style={{ visibility: 'hidden' }} />
      <ContentMain>
        <h1>Projects</h1>
        <Pagination simple onChange={setPagination} className="pagination-custom" current={paginationData.page} total={paginationData.total || 0} />
        <div className="card-container">
          {isLoading ? <h1>Fetching Stuff...please stand by</h1> : repos.map(({ id, name, html_url, owner: { avatar_url } }) => <ProjectCard key={id} htmlUrl={html_url} name={name} avatar={avatar_url} />)}
        </div>
        <Pagination simple onChange={setPagination} className="pagination-custom" current={paginationData.page} total={paginationData.total || 0} />
      </ContentMain>
    </Container>
  )
}

export default Projects
