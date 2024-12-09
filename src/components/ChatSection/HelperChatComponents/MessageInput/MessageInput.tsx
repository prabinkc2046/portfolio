import React, { useState, useRef } from 'react';
import { faRobot, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import getBotResponse from '../../chatUtility/getBotResponse';
import useAdjustTextareaHeight from '../../chatHooks/useAdjustTextareaHeight';

import {
  InputArea,
  RobotIcon,
  TextArea,
  SendMessageButton,
  SendMessageIcon,
} from './MessageInput.styles';

interface Message {
  isUser: boolean;
  content: string;
}

interface MessageInputProps {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  setIsTyping: React.Dispatch<React.SetStateAction<boolean>>;
  isTyping: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  setMessages,
  setIsTyping,
  isTyping,
}) => {
  const [input, setInput] = useState<string>('');
  const [token, setToken] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Custom hook to adjust height of text area
  useAdjustTextareaHeight(textAreaRef, input, isSent, setIsSent);

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    setIsSent(true);

    if (!input.trim()) return;

    const userMessage = { isUser: true, content: input };

    setMessages(prevMessages => [...prevMessages, userMessage]);
    setIsTyping(true);
    setInput('');

    const chatResponse = await getBotResponse(input, token);

    if (chatResponse) {
      const { token: newToken, message } = chatResponse;
      setToken(newToken);
      setMessages(prevMessages => [
        ...prevMessages,
        { isUser: false, content: message },
      ]);
      setIsTyping(false);
    }
  };

  return (
    <InputArea>
      <RobotIcon icon={faRobot} />
      <TextArea
        ref={textAreaRef}
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      <SendMessageButton disabled={isTyping} onClick={handleSendMessage}>
        <SendMessageIcon icon={faPaperPlane} />
      </SendMessageButton>
    </InputArea>
  );
};
