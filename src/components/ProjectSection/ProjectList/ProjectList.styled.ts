import styled, {keyframes} from "styled-components";
import { Card } from "../../../commonStyles/common.styled";



export const ProjectSectionWrapper = styled(Card)`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: ${({theme}) => theme.colors.primaryBg};

  @media (min-width:600px){
    width: 90%;
    align-items: flex-start;
  }

  @media (min-width:800px){
    align-items: flex-start;
  }

  @media (min-width: 900px){
    width: 95%;
  }
`

export const ProjectTitle = styled.h3`
  color:${({theme}) => theme.colors.secondaryFontColor};

`



export const SkillNavItem = styled.div<{isSelected: boolean}>`
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.5);
  transition: background-color 1s ease, box-shadow 1s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  overflow: hidden;
  background-color: ${({theme}) => theme.colors.secondaryBg};
  width: 95px;
  font-size: ${({theme}) => theme.fonts.small};


  &:hover {
    ${({isSelected}) => !isSelected && `
        background:linear-gradient(to right, #869db4, #317bc4); /* Light blue background on hover */
    `}
  }

  ${({isSelected}) => isSelected && `
    font-weight: bold;
    background-color: #0072ff;
    color: #ffffff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.9);
  `   
  }

    @media (min-width:600px){
        width: 100px;
        padding: 10px;
        font-size: ${({theme}) => theme.fonts.medium};
    }

    @media (min-width:800px){
        width: 110px;
        padding: 10px;
        font-size: ${({theme}) => theme.fonts.large};
    }
   
    

`

export const SkillsNavbar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
ul {
    width: 100%;
    list-style-type: none;
    display: inline-flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 5px;
}

`

export const ProjectCount = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 10px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.3s ease;
  position: relative;
`

export const Count = styled.span`
 font-size: 1.5rem;
  font-weight: bold;
  margin: 0 4px;
  color: #007bff; /* Primary color */
`

export const ProjectsWrapper = styled.div`
  width: 100%;

  ul {
    list-style-type: none;
    display: inline-flex;
    flex-wrap: wrap;
    overflow: hidden;
    width: 100%;
    max-height: 500px;
    margin-top: 30px;
    overflow: auto;
}

`

const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Project = styled.li<{ index: number }>`
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  background-color: ${({theme}) => theme.colors.secondaryBg};
  font-size: 1rem;
  width: 100px;
  margin: 5px;
  flex: 1 1 100px;
  max-width: 300px;
  min-height: 100px;
  overflow: hidden;
  color: ${({theme}) => theme.colors.secondaryFontColor};
  animation: ${FadeIn} ${({index}) => index * 0.5}s ease-in-out;

  .project-icon {
    color: #0072ff;
    margin: 2px;
  }

  &:hover {
    transform: translateZ(10px) scale(1.05);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.9);
  }

  @media(min-width: 600px) {
    font-size: 1rem;
    width: 150px;
    margin: 10px;
    flex: 1 1 100px;
    max-width: 300px;
    min-height: 100px;
    max-height: 230px;
    padding: 8px;
  }

  @media(min-width: 800px) {
    width: 110px;
    padding: 10px;
    font-size: ${({theme}) => theme.fonts.large};
  }
`;





