
import styled from 'styled-components';
import { Card } from '../../commonStyles/common.styled';

export const TestimonySectionWrapper = styled(Card)`
  padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;
    width: 100%;
    margin: 0 auto;
    font-size: 1.1rem;
    line-height: 1.5;
    letter-spacing: 0.2px;
    background-color: ${({theme}) => theme.colors.primaryBg};

    h3 {
      color: ${({theme}) => theme.colors.secondaryFontColor};
    }

    @media (min-width: 600px){
      align-items: flex-start;
      width: 90%;
    }

    @media (min-width: 900px){
      width: 95%;
    }
`

export const TestimonyCardsWrapper = styled.div`
    display: grid;
    grid-template-columns: auto;
    row-gap: 5px;

    @media (min-width: 600px){
      grid-template-columns: auto auto;
      gap: 10px;
    }

    @media (min-width: 900px){
      grid-template-columns: auto auto auto;
    }
`

export const TestimonyCard = styled(Card)`
   border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: ${({theme}) => theme.colors.secondaryBg};

    p {
    margin-bottom: 5px;
  }
`
export const TestimonyProviderName = styled.strong`
color: blue;
`
