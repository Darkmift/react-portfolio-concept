import styled from 'styled-components';
interface ProjectCardProps {
  key: number,
  name: string,
  avatar: string,
  htmlUrl: string
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
  a{
    text-align: center;
    text-decoration: none;
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
      <img src={props.avatar} alt="alon is a great guy who helps people" />
      <p>
        {props.name.toLocaleUpperCase()}
      </p>
      <a href={props.htmlUrl} target="_blank" rel="noreferrer">View Here</a>
    </CardWrapper>
  )
}

export default ProjectCard
