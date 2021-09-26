import React from 'react'
import Container from '../UI/Container';

interface ContactProps {

}

const Contact = (props: ContactProps): JSX.Element => {

  return (
    <Container className="contact-page page" justifyContent="" alignItems="flex-start">
      <div data-scroll-to="contact" style={{ visibility: 'hidden' }} />
      Contact
    </Container>
  )
}

export default Contact
