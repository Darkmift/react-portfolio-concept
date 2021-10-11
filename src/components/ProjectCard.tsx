import styled from 'styled-components';
import AlonDaMaster from '../assets/images/alon.jpg';
interface ProjectCardProps {

}
interface StyledProps {

}

const CardWrapper = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding:4vmin 1vmin 2vmin;
  min-width:250px;
  max-width:300px;
  border-radius: 1vmin;
  ${props => {
    const { main } = props.theme.main
    return `background-color:${main};`
  }}
  img{
    border-radius: 50%;
    width:75%;
  }
  p{
    padding: 4vmin 2vmin 2vmin;
  }
  button{
    ${props => {
    const { main } = props.theme.secondary
    return `background-color:${main};`
  }}
    outline: none;
    border: none;
    color: white;
    font-size:1rem;
    margin-top: 2vmin;
    width: 90%;
    padding: 0.75rem 1.5rem;
    border-radius:15px;
  }
`

const ProjectCard = (props: ProjectCardProps): JSX.Element => {

  return (
    <CardWrapper>
      <img src={AlonDaMaster} alt="alon is a great guy who helps people" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Neque nulla, ducimus sit accusamus saepe obcaecati hic,
        cum cumque totam sed,
        odio illo provident iste.
        Eveniet exercitationem magnam unde quia molestias?
      </p>
      <button>View Here</button>
    </CardWrapper>
  )
}

export default ProjectCard
