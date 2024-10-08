import styled from 'styled-components';
import { Card } from '../../../commonStyles/common.styled';

export const SkillsContainer = styled(Card)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primaryBg};

  @media (min-width: 600px) {
    width: 90%;
    align-items: flex-start;
  }

  @media (min-width: 900px) {
    width: 95%;
  }
`;

export const SkillsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
`;

export const SkillsAreaContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 20px;
  width: 100%;

  @media (min-width: 600px) {
    grid-template-columns: auto auto;
  }

  @media (min-width: 900px) {
    grid-template-columns: auto auto auto;
  }
`;
