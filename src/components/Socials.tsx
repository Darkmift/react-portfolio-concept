import styled from 'styled-components';

import { FileTextOutlined, LinkedinFilled, GithubOutlined } from '@ant-design/icons';
import { useWindowSize } from '../hooks/useWindowSize';

interface MainProps {
  fontSize?: string;
}

interface StyledProps {
  windowWidth?: number;
}

const Socials = styled.div<StyledProps>`
  display: flex;
  /* justify-content:space-around; */
  align-items: center;
  flex:1;
  gap:0 5vmin;
  padding-right: 5vmin;

  ${props => {
    const { windowWidth = 0 } = props
    return `height: ${windowWidth > 1100 ? '60vh' : '20vh'};
    justify-content: ${windowWidth > 1100 ? 'space-around' : 'center'};`
  }}
  color:white;
`


const Main = (props: MainProps): JSX.Element => {
  const [width /*, height*/] = useWindowSize()
  const sendTo = (pageUrl: string): void => {
    console.log("🚀 ~ file: Socials.tsx ~ line 34 ~ sendTo ~ pageName", pageUrl)
    window.open(pageUrl, '_blank');

  }

  return (
    <Socials className="socials" windowWidth={width}>
      <FileTextOutlined style={{ fontSize: props.fontSize || '4rem' }} onClick={() => sendTo('https://drive.google.com/file/d/1MuVuDjcf05NKIaGCkz5pv8ppJn7lL4vq/view?usp=sharing')} />
      <GithubOutlined style={{ fontSize: props.fontSize || '4rem' }} onClick={() => sendTo('https://github.com/Darkmift')} />
      <LinkedinFilled style={{ fontSize: props.fontSize || '4rem' }} onClick={() => sendTo('https://www.linkedin.com/in/avi-koenig-67159620b/')} />
    </Socials>
  )
}

export default Main
