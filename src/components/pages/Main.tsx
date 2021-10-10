import styled from 'styled-components';

import Container from '../UI/Container';
import svgBg from '../../assets/images/blob.svg';

import { FileTextOutlined, LinkedinFilled, GithubOutlined } from '@ant-design/icons';

interface AboutProps {

}

const ContentMain = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  background-image: ${svgBg};
  flex:3;
  img{
    position: absolute;
    z-index: 1;
    width: 50%; 
    margin: auto;
    z-index: 1;
  }
  .wrapper{
    position: absolute;
    width: 100%;
    min-height: 60vh; 
    z-index: 10;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .content{
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      gap:3vmin 0;

      h1{
        font-size: 4rem;
        ${props => {
    const { textShadow } = props.theme.main
    return `text-shadow:3px 6px 0px ${textShadow};`
  }}
        /* text-shadow: 3px 6px 0px rgba(22, 0, 83, 1); */
      }
      p{
        font-size:2.5rem;
        font-weight: bold;
      }

      button{
        ${props => {
    const { button } = props.theme.main
    return `background-color:${button};`
  }}
        outline: none;
        border: none;
        color: white;
        font-size:1.75rem;
        padding: 0.25rem 1.5rem;
        border-radius:15px;
      }
    }

  }
`

const Socials = styled.div`
  display: flex;
  justify-content:space-around;
  align-items: center;
  flex:1;
  height: 60vh;
`


const Main = (props: AboutProps): JSX.Element => {

  return (
    <Container flexDirection="row" className="main-page page" justifyContent="space-between">
      <div data-scroll-to="main" style={{ visibility: 'hidden' }} />
      <ContentMain className="main-section">
        <img src={svgBg} alt="svgbg" />
        <div className="wrapper">
          <div className="content">
            <h1>Coderz Workouts</h1>
            <p>Level Up Your Skills</p>
            <button>About me</button>
          </div>
        </div>
      </ContentMain>
      <Socials className="socials">
        <FileTextOutlined style={{ fontSize: '4rem' }} />
        <GithubOutlined style={{ fontSize: '4rem' }} />
        <LinkedinFilled style={{ fontSize: '4rem' }} />
      </Socials>
    </Container>
  )
}

export default Main
