import React, { useEffect, useState } from 'react';

import styled from 'styled-components';
import Container from '../UI/Container';
import ProjectCard from '../ProjectCard';
import axios from 'axios';

interface ProjectProps {

}

interface StyledProps {

}

interface Repo { id: number, name: string, html_url: string, owner: { avatar_url: string } }

const ContentMain = styled.div<StyledProps>`
display: flex;
flex-direction: column;
align-items: center;
  h1{
    margin:0 auto;
    font-size: 3rem;
      ${props => {
    const { textShadow } = props.theme.main
    return `text-shadow:3px 6px 0px ${textShadow};`
  }}
  }

  .card-container{
    margin-top:5vmin;
    padding:3vmin;
    max-width:90vw;
    display: grid;
    grid-template-columns: repeat( auto-fill, minmax(300px, 1fr) );
    gap:3vmin 4vmin;
  }
`

const getRepos = async (): Promise<Repo[]> => {
  try {
    const repoUrl = 'https://api.github.com/users/alonzo245/repos?per_page=20'
    const respose = await axios.get(repoUrl)
    const repos = respose.data
    return await repos
  } catch (error) {
    console.log("🚀 ~ file: Projects.tsx ~ line 45 ~ getRepos ~ error", error)
    return [];
  }
}

const Projects = (props: ProjectProps): JSX.Element => {
  const [repos, setRepos] = useState<Repo[]>([]);
  useEffect(() => {
    getRepos().then(repos => {
      console.log("🚀 ~ file: Projects.tsx ~ line 57 ~ getRepos ~ repos", repos)

      setRepos(repos)
    })
  }, [])
  return (
    <Container className="projects-page page" justifyContent="" alignItems="flex-start">
      <div data-scroll-to="projects" style={{ visibility: 'hidden' }} />
      <ContentMain>
        <h1>Projects</h1>
        <div className="card-container">
          {repos.map(({ id, name, html_url, owner: { avatar_url } }) => <ProjectCard key={id} htmlUrl={html_url} name={name} avatar={avatar_url} />)}
        </div>
      </ContentMain>
    </Container>
  )
}

export default Projects
