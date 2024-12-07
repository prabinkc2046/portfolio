import styled, { keyframes } from 'styled-components';

export const TypingIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
`;

export const Dots = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40px;
`;

const blink = keyframes`
 0%,
  80%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }

`;

export const Dot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 2px;
  background-color: #007bff;
  border-radius: 50%;
  animation: ${blink} 1.4s infinite;
}


  &:nth-child(2) {
    animation-delay: 0.2s;

  }

  &:nth-child(3) {
    animation-delay: 0.4s;

  }
`;
