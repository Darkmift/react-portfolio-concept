import styled from 'styled-components';
import Container from '../UI/Container';
import AlonDaMaster from '../../assets/images/alon.jpg';

const ContentMain = styled.div`
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
    align-items: center;
    justify-content: space-around;

    p{
      font-size:1.5rem;
      line-height:2.5rem;
      max-width:60%;
      word-wrap: break-word;
    }
    img{
      border-radius:50%;
      max-width:20%;
    }
  }
`

interface AboutProps {
}

const About = (props: AboutProps): JSX.Element => {

  return (
    <Container className="about-page page" justifyContent="" alignItems="flex-start">
      <div data-scroll-to="about" style={{ visibility: 'hidden' }} />
      <ContentMain>
        <h1>About</h1>
        <div className="wrapper">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Tempora rerum aspernatur qui! Ullam distinctio labore libero sapiente sit quod,
            totam maxime voluptate est laborum, blanditiis excepturi debitis vero eius nulla!</p>
          <img src={AlonDaMaster} alt="alon is a great guy who helps people" />
        </div>
      </ContentMain>
    </Container>
  )
}

export default About
