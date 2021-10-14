import styled from 'styled-components';

interface IProps {
  show: Boolean;
}


const SwitchLinksWrapper = styled.div<IProps>`
    display: flex;
    justify-content:space-between;
    align-items:center;
    min-width: 35%;  
    ul{
        display: flex;  
        padding: 0 5vw;
      li {
        list-style: none;
        text-decoration: none;
        padding: 0 10px;
        font-size: 1.75rem;
        margin-bottom: 3px;
      }
    }

  @media (max-width: 700px) {
    display:flex;
    &.hidden{
      display:none;
    }
    ${props => {
    console.log("🚀 ~ file: SwitchLinksWrapper.tsx ~ line 28 ~ @media ~ props", props.show)
    return `visibility:${props.show ? 'visible' : 'hidden'};`
  }}


      flex-direction: column;
      position: absolute;
      right: 0;
      top:88px;
      padding:20px 0;
      ${props => `
        color: ${props.theme.appBar.contrastText};
        background-color: ${props.theme.appBar.main};
     `}
      ul{
        flex-direction: column;
        li{
          padding-bottom: 20px;
        }
      }
  }
`

export default SwitchLinksWrapper;
