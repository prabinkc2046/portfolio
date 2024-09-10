import styled from 'styled-components';
import { Card } from '../../commonStyles/common.styled';

export const EducationSectionWrapper = styled(Card)`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.primaryBg}; /* Updated with theme */

  h3 {
    color: ${({ theme }) => theme.colors.secondaryFontColor}; /* Updated with theme */
  }

  @media (min-width: 600px) {
    width: 90%;
    align-items: flex-start;
  }

  @media (min-width: 900px) {
    width: 95%;
    align-items: flex-start;
  }
`;

export const EducationCardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  justify-content: stretch;
  align-content: space-between;
  gap: 10px;
  width: 100%;
  padding: 5px;

  @media (min-width: 900px) {
    grid-template-columns: auto auto;
    padding: 20px;
  }
`;

export const EducationCard = styled.div<{ open: boolean, height: number }>`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fadeInUp 0.7s ease-in-out forwards;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: height 1.75s ease;
  height: 175px;
  overflow: hidden;
  max-height: 1000px;
  min-height: 175px;
  background-color: ${({ theme }) => theme.colors.secondaryBg}; /* Updated with theme */

  ${({ open, height }) =>
    open &&
    `
    height: ${height}px;
    transform: scale(1.03);
  `}

  @media (min-width: 600px) {
    &:hover {
      transform: scale(1.03);
      max-height: 900px;
      height: ${({height}) => `${height}px`};
      opacity: 1;
    }
  }
`;

export const EducationDetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px;
  cursor: pointer;

  p,
  h4 {
    width: 100%;
    font-size: 1.2rem;
  }

  h4 {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.secondaryFontColor}; /* Updated with theme */
  }
`;

export const SubjectsContainer = styled.div<{ open: boolean}>`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding-top: 10px;
  overflow: hidden;
  opacity: 0;
  transition: opacity 1.75s ease;

  ${({ open}) =>
    open &&
    `
    opacity: 1;
  `}
`;

export const Subject = styled(Card)`
  width: 100%;
  font-weight: bold;
  line-height: 1.5;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.accentBg}; /* Updated with theme */
  color: ${({ theme }) => theme.colors.secondaryFontColor}; /* Updated with theme */

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    overflow: hidden;
  }
`;

export const SubjectScore = styled.span`
  color: #0072ff;
`;
