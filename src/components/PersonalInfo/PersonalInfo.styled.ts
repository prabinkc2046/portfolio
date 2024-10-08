import styled from "styled-components";
import profileImage from './Images/profile.jpeg';

import { Card } from "../../commonStyles/common.styled";

export const ProfilePhoto = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 20px;
  background-image: url(${profileImage});
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease-in-out;
`;


export const PersonalInfoStyled = styled(Card)`
    margin-top: 80px;
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    margin-top: 70px;
    font-size: 1.2rem;
    line-height: 2.1;
    letter-spacing: 1.5px;
    background-color: ${({theme}) => theme.colors.primaryBg};
    color: ${({theme}) => theme.colors.secondaryFontColor};

    &:hover ${ProfilePhoto}{
        transform: scale(1.1); /* Zoom effect on hover */

    }


  /* Mobile-First Approach */
  @media (min-width: 600px) { 
   width: 90%;
   
    
  }
  
  @media (min-width: 900px) {
   width: 95%;

  }
`

// Styled Component for Profile Photo Container
export const ProfilePhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 8px;
`;

export const PersonalText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 8px;
    padding: 10px;
    width: 100%;
    min-width: 100%;

    h2, p {
        margin: 0;
    }

    i {
        font-size: 24px; /* Size of the icon */
        color: #0072ff; /* Icon color */
        margin-right: 10px;
    }

`
