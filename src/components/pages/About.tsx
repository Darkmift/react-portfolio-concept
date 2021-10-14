import styled from 'styled-components';
import Container from '../UI/Container';
import Mee from '../../assets/images/Me.jpg';
// import AlonDaMaster from '../../assets/images/alon.jpg';

import { useWindowSize } from '../../hooks/useWindowSize';

interface StyledProps {
  windowWidth?: number;
}

const ContentMain = styled.div<StyledProps>`
  display:flex;
  flex-direction: column;
  align-items: center;
  flex:1;
  margin-top: 5vmin;

  h1{
    font-size: 3rem;
    ${props => {
    const { textShadow } = props.theme.main
    return `text-shadow:3px 6px 0px ${textShadow};`
  }}
  }

  .wrapper{
    width: 70%;
    min-height: 40vh; 
    display:flex;
    flex-direction: row;

    img{
      border-radius:50%;
      width:22.5vw;
    }

    ${props => {
    const { windowWidth = 0 } = props
    const smallScreen = windowWidth < 1100;
    if (smallScreen) {
      return `
      flex-direction:column-reverse;
      img{
        padding:4vmin;
        width:40vw;
      }
      `
    }
    return ``
  }}
    align-items: center;
    justify-content: space-around;

    p{
      font-size:1.5rem;
      line-height:2.5rem;
      max-width:60%;
      word-wrap: break-word;
    }
  }
`

interface AboutProps {
}

const About = (props: AboutProps): JSX.Element => {
  const [width /*, height*/] = useWindowSize()
  return (
    <Container className="about-page page" justifyContent="" alignItems="flex-start">
      <div data-scroll-to="about" style={{ visibility: 'hidden' }} />
      <ContentMain windowWidth={width}>
        <h1>About</h1>
        <div className="wrapper">
          <p>
            <i>Some guy with a keyboard,loves booping said keyboard... all day,most days.
              <br />      <br />
              Might aswell boop keyboard for you!</i>
          </p>
          <img src={Mee/**AlonDaMaster */} alt="alon is a great guy who helps people" />
        </div>
      </ContentMain>
    </Container>
  )
}

export default About
