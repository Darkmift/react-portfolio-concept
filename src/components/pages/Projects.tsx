import styled from 'styled-components';
import Container from '../UI/Container';
import ProjectCard from '../ProjectCard';
interface ProjectProps {

}

interface StyledProps {

}

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

const Projects = (props: ProjectProps): JSX.Element => {

  return (
    <Container className="projects-page page" justifyContent="" alignItems="flex-start">
      <div data-scroll-to="projects" style={{ visibility: 'hidden' }} />
      <ContentMain>
        <h1>Projects</h1>
        <div className="card-container">
          {Array(20).fill(<ProjectCard />)}
        </div>
      </ContentMain>
    </Container>
  )
}

export default Projects
