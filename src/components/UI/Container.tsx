import styled from 'styled-components';

interface IProps {
  justifyContent: string;
  alignItems: string;
  // styles: { [key: string]: string }
  sticky?: boolean;
}

// function returnSerialized(style: { [key: string]: string }): string {
//   let styleStr = ''
//   for (const key in style) {
//     styleStr += `${key}:${style[key]}`
//   }
//   return styleStr;
// }

const Container = styled.div<IProps>`
display:flex;
flex-direction: column;
${props => {
    const { justifyContent, alignItems /*,styles*/, className, sticky } = props
    let optionalAttr = '';
    if (sticky) optionalAttr += `position: -webkit-sticky;position: sticky;top: 0;`
    if (justifyContent) optionalAttr += `justify-content:${justifyContent};`
    if (alignItems) optionalAttr += `align-items=${alignItems};`
    /* if (styles) optionalAttr += `${returnSerialized(styles)} */
    if (className?.split(' ').includes('main-page')) optionalAttr += `background-color:${props.theme.main.main};`
    return optionalAttr;
  }}
`

export default Container;