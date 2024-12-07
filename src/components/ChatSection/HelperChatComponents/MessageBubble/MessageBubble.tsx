import React, { ReactNode } from 'react';
import {
  MessageBubbleWrapper,
  MessageContent,
  AdditionalContent,
} from './MessageBubble.styles';

interface MessageBubbleProps {
  index?: number;
  content?: string;
  isUser: boolean;
  children?: ReactNode;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  content,
  isUser,
  children,
}) => {
  return (
    <MessageBubbleWrapper isUser={isUser}>
      <MessageContent>{content}</MessageContent>
      {children && <AdditionalContent>{children}</AdditionalContent>}
    </MessageBubbleWrapper>
  );
};
