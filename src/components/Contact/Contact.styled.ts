
import styled from 'styled-components';
import { Box3D, Card } from '../../commonStyles/common.styled';

export const ContactSection = styled(Card)`
   padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    margin: 0 auto;
    background-color: ${({theme}) => theme.colors.primaryBg};
    color: ${({theme}) => theme.colors.primaryFontColor};

    h3 {
      color: ${({theme}) => theme.colors.secondaryFontColor};
    }

    @media (min-width: 600px){
      width: 90%;
      align-items: flex-start;
    }
    @media (min-width: 900px){
      width: 95%;
    }
`

export const ContactInfoFormContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (min-width: 600px){
      flex-direction: row;
      align-items: flex-start;
      gap: 20px;
    }

    @media (min-width: 900px){
      justify-content: flex-start;
      gap: 40px;
    }
`

export const ContactDetailsContainer = styled.div`
    user-select: text;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    max-width: 500px;

    @media (min-width: 600px){
      gap: 10px;
    }
    @media (min-width: 900px){
      align-items: flex-start
    }
`

export const ContactInfoName = styled.a`
  text-decoration: none;
  transition: color 0.3s ease, text-decoration-color 0.3s ease; /* Smooth transition for link colors */

`

export const ContactDetailParagraph = styled(Box3D).attrs({as: 'p'})`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    transition: background-color 0.3s ease, transform 0.3s ease; /* Smooth transition for hover effects */
    font-size: 5px;
    min-width: 225px;
    overflow: hidden;
    max-width: 100%;
    min-height: 56px;
    background-color:${({theme}) => theme.colors.secondaryBg};

    &:hover{
      background:linear-gradient(to right, #869db4, #317bc4); /* Light blue background on hover */
      transform: translateX(20px); /* Slight movement to the right on hover */
    }

    &:hover ${ContactInfoName} {
      text-decoration: underline;
      text-decoration-color: #0072ff;
      color: #005bb5; /* Slightly darker blue on hover */
    }
`

export const ContactIconNameContainer = styled.div`
   display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-left: 1rem;
    font-size: 1rem;

    i {
      font-size: 2rem; /* Size of the icon */
    color: #0072ff; /* Icon color */
    transition: color 0.3s ease; /* Smooth transition for icon color */
    }


    @media (min-width: 600px){
      margin-left: 0;
    }
`
export const ContactForm = styled(Box3D).attrs({as:'form'})`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.5rem;
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.9); /* Soft shadow */
    max-width: 500px;
    min-width: 100px;
    background-color: ${({theme}) => theme.colors.secondaryBg};

  input, textarea {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background-color: #cac4c4;
    color: #000000;
  }
`
export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 1rem;
`

export const Button = styled.button`
   font-size: 1rem;
   background-color: #0072ff;
  color: #fff;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover{
    background-color: #005bb5;
  }
`

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background-color: #cac4c4;
    color: #000000;
`

export const TextArea = styled.textarea`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    background-color: #cac4c4;
    color: #000000;
`
