import styled, { css } from 'styled-components';

interface MessageBubbleWrapperProps {
  isUser: boolean;
}

export const MessageBubbleWrapper = styled.li<MessageBubbleWrapperProps>`
  max-width: 70%;
  padding: 10px 15px;
  margin: 5px;
  font-size: 14px;
  line-height: 1.4;
  position: relative;
  border-radius: 20px;
  list-style: none;
  font-size: 14px;
  line-height: 1.4;
  word-wrap: break-word;

  ${({ isUser }) =>
    isUser
      ? css`
          background-color: #007bff; /* Light green for user messages */
          color: #fff;
          align-self: flex-start;
          border-top-left-radius: 0;
          animation: slideInLeft 0.3s ease-in-out;
        `
      : css`
          background-color: #e5e5e5;
          align-self: flex-end;
          border-top-right-radius: 0px;
          animation: slideInRight 0.3s ease-in-out;
        `}
  @keyframes slideInLeft {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    0% {
      opacity: 0;
      transform: translateX(+20px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const MessageContent = styled.div`
  // margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 1px;
`;

export const AdditionalContent = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: #777;
`;
