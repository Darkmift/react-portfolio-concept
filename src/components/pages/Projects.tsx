import React from 'react'
import Container from '../UI/Container';

interface ProjectProps {

}

const Projects = (props: ProjectProps): JSX.Element => {

  return (
    <Container className="projects-page page" justifyContent="" alignItems="flex-start">
      <div data-scroll-to="projects" style={{ visibility: 'hidden' }} />
      Project
    </Container>
  )
}

export default Projects
