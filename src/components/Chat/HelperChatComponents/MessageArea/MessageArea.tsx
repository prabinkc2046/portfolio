import React, { useEffect, useRef } from 'react';
import { TypingIndicator } from '../TypingIndicator/TypingIndicator';
import { MessageBubble } from '../MessageBubble/MessageBubble';
import { MessageContainer, Messages, ScrollAnchor } from './MessageArea.styles';

interface Message {
  content: string;
  isUser: boolean;
}

interface MessageAreaProps {
  messages: Message[];
  isTyping: boolean;
}

export const MessageArea: React.FC<MessageAreaProps> = ({
  messages,
  isTyping,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'auto' });
  }, [messages]);

  return (
    <MessageContainer>
      <Messages>
        {messages.map(({ content, isUser }, index) => (
          <MessageBubble key={index} isUser={isUser} content={content} />
        ))}

        {/* Display typing indicator when bot is typing */}
        {isTyping && <TypingIndicator isTyping={isTyping} />}

        {/* Dummy element for scrollIntoView */}
        <ScrollAnchor ref={messagesEndRef} />
      </Messages>
    </MessageContainer>
  );
};
