import styled from 'styled-components';

interface IProps {

}

const AppBar = styled.div<IProps>`
  height:88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding:0 25px;
  ${props => `
    color: ${props.theme.appBar.contrastText};
    background-color: ${props.theme.appBar.main};
  `}
`

export default AppBar;
