import React from 'react'
import Container from '../UI/Container';

interface AboutProps {
}

const About = (props: AboutProps): JSX.Element => {

  return (
    <Container className="about-page page" justifyContent="" alignItems="flex-start">
      <div data-scroll-to="about" style={{ visibility: 'hidden' }} />
      MAIN
    </Container>
  )
}

export default About
