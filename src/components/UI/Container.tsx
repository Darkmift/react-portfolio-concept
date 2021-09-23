import styled from 'styled-components';

interface IProps {
  justifyContent: string;
  alignItems: string;
}

const Container = styled.div<IProps>`
display:flex;
flex-direction: column;
${props => {
    const { justifyContent, alignItems } = props
    let optionalAttr = '';
    if (justifyContent) optionalAttr += `justify-content=${justifyContent}`
    if (alignItems) optionalAttr += `align-items=${alignItems}`
    return optionalAttr;
  }}
`

export default Container;