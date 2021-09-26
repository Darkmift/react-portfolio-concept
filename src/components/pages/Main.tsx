import React from 'react'
import Container from '../UI/Container';

interface AboutProps {

}

const Main = (props: AboutProps): JSX.Element => {

  return (
    <Container className="main-page page" justifyContent="" alignItems="flex-start">
      <div data-scroll-to="main" style={{ visibility: 'hidden' }} />
      Main
    </Container>
  )
}

export default Main
