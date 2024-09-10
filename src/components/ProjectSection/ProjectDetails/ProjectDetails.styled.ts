import styled from "styled-components";


export const ProjectCard = styled.div`
   background-color: #fff;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Added 'ease' for smoother transition */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 70%;
  max-width: 400px;
  max-height: 85vh;
  overflow: auto;
  opacity: 0.85;
  position: relative;
  margin-top: 50px;
  font-size: 1.1rem;
  line-height: 1.5;
  letter-spacing: 0.2px;

  a {
    color: #0072ff;
    text-decoration: none;
    
    &:hover {
        text-decoration: underline;
    }

  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  
  }

  @media (min-width: 600px){
    width: 300px;
}
`

export const ProjectTitle = styled.h4`
    margin-bottom: 10px;
    font-weight: bolder;
`


export const ProjectLink = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
`

