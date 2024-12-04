import React, { useState } from 'react';
import './Chat.css';

interface Message {
  sender: 'user' | 'bot' | 'error';
  text: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [token, setToken] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputMessage(e.target.value);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  const sendMessage = async () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = { sender: 'user', text: inputMessage };
    setMessages(prev => [...prev, newMessage]);

    try {
      setIsTyping(true);
      setInputMessage('');
      const response = await fetch(`${process.env.REACT_APP_CHAT_SERVER_API}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token ? `Bearer ${token}` : `Bearer ""`,
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();
      setIsTyping(false);

      if (response.ok) {
        const botMessage: Message = { sender: 'bot', text: data.message };
        setMessages(prev => [...prev, botMessage]);
        if (data.token) {
          setToken(data.token);
        }
      } else {
        throw new Error(data.error || 'Something went wrong!');
      }
    } catch (error: unknown) {
      setIsTyping(false);
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred';
      setMessages(prev => [...prev, { sender: 'error', text: errorMessage }]);
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
        {isTyping && (
          <div className="chat-message typing-indicator">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        )}
        <div />
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
