import styled from "styled-components";
import { Box3D, Card } from "../../commonStyles/common.styled";

export const ExperienceSectionWrapper = styled(Card)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  margin: 0 auto;
  font-size: 1.1rem;
  letter-spacing: 0.1px;
  line-height: 1.2;
  background-color: ${({ theme }) => theme.colors.primaryBg}; /* Updated with theme */

  @media (min-width: 600px) {
    width: 90%;
    align-items: flex-start;
  }

  @media (min-width: 900px) {
    width: 95%;
  }
`;

export const ExperienceCardWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  row-gap: 20px;

  @media (min-width: 600px) {
    grid-template-columns: auto auto;
    gap: 20px;
  }

  @media (min-width: 900px) {
    grid-template-columns: auto auto auto;
    gap: 20px;
  }
`;

export const ExperienceCard = styled(Box3D)`
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  background-color: ${({ theme }) => theme.colors.secondaryBg}; /* Updated with theme */
  color: ${({ theme }) => theme.colors.primaryFontColor}; /* Updated with theme */

  h4 {
    margin-bottom: 10px;
    color: #0072ff; /* Hardcoded color; consider adding to theme if consistent use */
  }
`;
