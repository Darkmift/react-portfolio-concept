import styled from 'styled-components';

interface IProps {
  justifyContent?: string;
  alignItems?: string;
  sticky?: boolean;
  flexDirection?: string;
}

const Container = styled.div<IProps>`
display:flex;
flex-direction: column;
${props => {
    const { flexDirection, justifyContent, alignItems /*,styles*/, className, sticky } = props
    let optionalAttr = '';
    if (flexDirection) optionalAttr += `flex-direction:${flexDirection};`
    if (sticky) optionalAttr += `position: -webkit-sticky;position: sticky;top: 0;`
    if (justifyContent) optionalAttr += `justify-content:${justifyContent};`
    if (alignItems) optionalAttr += `align-items=${alignItems};`
    if (className?.split(' ').includes('main-page')) optionalAttr += `background-color:${props.theme.main.main};`
    return optionalAttr;
  }}
`

export default Container;