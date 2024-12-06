import React, { useState } from 'react';
import { MessageArea } from '../HelperChatComponents/MessageArea/MessageArea';
import { MessageInput } from '../HelperChatComponents/MessageInput/MessageInput';
import { StyledChat, ChatHeader } from './Chat.styles';
import { ChatWrapper } from './Chat.styles';

interface Message {
  isUser: boolean;
  content: string;
}

const defaultMessages: Message[] = [
  {
    isUser: false,
    content: `Hi there! 👋 I'm your friendly assistant here to help you explore my portfolio. Whether you have questions about my work, skills, or projects, feel free to ask. I'm happy to chat and guide you through everything! Let's connect!`,
  },
];

export const Chat: React.FC = () => {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>(defaultMessages);

  return (
    <ChatWrapper>
      <StyledChat>
        <ChatHeader>Welcome to the Chat! 👋</ChatHeader>
        <MessageArea messages={messages} isTyping={isTyping} />
        <MessageInput setMessages={setMessages} setIsTyping={setIsTyping} />
      </StyledChat>
    </ChatWrapper>
  );
};
