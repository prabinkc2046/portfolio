import { useState } from 'react';
import { MessageArea } from '../HelperChatComponents/MessageArea/MessageArea';
import { MessageInput } from '../HelperChatComponents/MessageInput/MessageInput';
import { StyledChat, ChatHeader } from './Chat.styles';

interface Message {
  isUser: boolean;
  content: string;
}

const defaultMessages: Message[] = [
  {
    isUser: false,
    content: `Hello there! 👋 I’m Prabin’s AI assistant. I’m here to help answer any questions you have about Prabin’s skills, services, or portfolio. Feel free to ask me anything!`,
  },
];

const Chat = () => {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>(defaultMessages);

  return (
    // <ChatWrapper>
    <StyledChat>
      <ChatHeader>Ask About Prabin!</ChatHeader>
      <MessageArea messages={messages} isTyping={isTyping} />
      <MessageInput
        setMessages={setMessages}
        setIsTyping={setIsTyping}
        isTyping={isTyping}
      />
    </StyledChat>
    // </ChatWrapper>
  );
};

export default Chat;
