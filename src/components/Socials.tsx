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
  return (
    <Socials className="socials" windowWidth={width}>
      <FileTextOutlined style={{ fontSize: props.fontSize || '4rem' }} />
      <GithubOutlined style={{ fontSize: props.fontSize || '4rem' }} />
      <LinkedinFilled style={{ fontSize: props.fontSize || '4rem' }} />
    </Socials>
  )
}

export default Main
