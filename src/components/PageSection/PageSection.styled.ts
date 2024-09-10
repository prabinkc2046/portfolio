import styled, {css} from "styled-components";

export const StyledSection = styled.section<{ isVisible: boolean }>`
  ${({ isVisible }) =>
    isVisible &&
    css`
      animation: fadeInUp 1.5s ease-in-out;
    `}
`;