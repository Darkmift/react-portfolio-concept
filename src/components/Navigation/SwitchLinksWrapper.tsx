import styled from 'styled-components';

interface IProps {
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
`

export default SwitchLinksWrapper;
