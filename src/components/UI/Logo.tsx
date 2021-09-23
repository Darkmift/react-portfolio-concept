import styled from 'styled-components';
import coderz_logo from '../../assets/images/coderz_logo.jpg'
interface IProps {
}

const Logo = styled.img<IProps>`
max-width: 60px;
height: auto;
border-radius: 60px;
object-fit: contain;
`

Logo.defaultProps = {
  src: coderz_logo
}

export default Logo;