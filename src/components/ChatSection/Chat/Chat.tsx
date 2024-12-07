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
    content: `Hi there! 👋 Got any question about me?`,
  },
];

const Chat = () => {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>(defaultMessages);

  return (
    // <ChatWrapper>
    <StyledChat>
      <ChatHeader>Welcome to the Chat!</ChatHeader>
      <MessageArea messages={messages} isTyping={isTyping} />
      <MessageInput setMessages={setMessages} setIsTyping={setIsTyping} />
    </StyledChat>
    // </ChatWrapper>
  );
};

export default Chat;
