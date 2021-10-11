import styled from 'styled-components';

import Container from '../UI/Container';
import svgBg from '../../assets/images/blob.svg';

import Socials from '../Socials';
import { useWindowSize } from '../../hooks/useWindowSize';

interface MainProps {
}

interface StyledProps {
  windowWidth?: number;
}

const ContentMain = styled.div<StyledProps>`
  display:flex;
  flex-direction: column;
  align-items: center;
  background-image: ${svgBg};
  background-size: cover;
  flex:3;
  ${props => {
    const { windowWidth = 0 } = props
    return `${windowWidth < 1100 ? 'height:20vh' : ''};`
  }}
  max-height: 40vh;
  .wrapper{
    background-image: url(${svgBg});
    background-repeat:no-repeat;
    background-position: center center;
    min-height: 60vh; 
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

const Main = (props: MainProps): JSX.Element => {
  const [width /*, height*/] = useWindowSize()
  const flexDirection = width < 1100 ? 'column' : 'row'
  return (
    <Container flexDirection={flexDirection} className="main-page page" justifyContent="space-between" alignItems="center">
      <div data-scroll-to="main" style={{ visibility: 'hidden' }} />
      <ContentMain className="main-section" windowWidth={width}>
        <div className="wrapper">
          <div className="content">
            <h1>Coderz Workouts</h1>
            <p>Level Up Your Skills</p>
            <button>About me</button>
          </div>
        </div>
      </ContentMain>
      <Socials />
    </Container>
  )
}

export default Main
