import React from 'react';
import { TypingIndicatorWrapper, Dots, Dot } from './TypingIndicator.styles';
import { MessageBubble } from '../MessageBubble/MessageBubble';

interface TypingIndicatorProps {
  isTyping: boolean;
}

export const TypingIndicator: React.FC<TypingIndicatorProps> = ({
  isTyping,
}) => {
  return (
    <>
      {isTyping && (
        <MessageBubble isUser={false}>
          <TypingIndicatorWrapper>
            <Dots>
              <Dot />
              <Dot />
              <Dot />
            </Dots>
          </TypingIndicatorWrapper>
        </MessageBubble>
      )}
    </>
  );
};
