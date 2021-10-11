import styled from 'styled-components';
import Socials from '../Socials'

interface ContactProps {

}
interface StyledProps {

}

const Footer = styled.div<StyledProps>`
display: flex;
flex-direction: column;
align-items: center;
padding:3vmin 0;
width: 100%;
*{
  padding:1vmin 0;
}
${props => {
    const { main } = props.theme.main
    return `background-color:${main};`
  }}

  h3{
    font-size: 2.5rem;
    color: #fff;
        ${props => {
    const { textShadow } = props.theme.main
    return `text-shadow:3px 6px 0px ${textShadow};`
  }}
  }
  a{
    text-decoration: none;
    color: #fff;
    padding:2vmin 0 0;
  }
`

const Contact = (props: ContactProps): JSX.Element => {

  return (
    <Footer >
      <div data-scroll-to="contact" style={{ visibility: 'hidden' }} />
      <h3>Coderz Workouts</h3>
      <a href="mailto:someemail@mail.com">coderz.workouts@exampleofdomain.com</a>
      <Socials fontSize='5rem' />
    </Footer>
  )
}

export default Contact
