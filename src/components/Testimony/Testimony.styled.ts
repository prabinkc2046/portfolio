
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
    gap: 20px;
    @media (min-width: 600px){
      grid-template-columns: auto auto;
      gap: 20px;
    }

    @media (min-width: 900px){
      grid-template-columns: auto auto auto;
    }
`

export const TestimonyCard = styled.div`
    border-radius: 10px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: ${({theme}) => theme.colors.secondaryBg};
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
    transition: box-shadow 0.5s ease, transform 0.5s ease;

    &:hover{
      transform: scale(1.05);
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.9);
    }
    p {
    margin-bottom: 5px;
    }
`
export const TestimonyProviderName = styled.strong`
color: blue;
`
