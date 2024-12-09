import styled from 'styled-components';
import { Card } from '../../../commonStyles/common.styled';

export const ChatWrapper = styled(Card)`
  padding: 20px;

  width: 100%;
  margin: 0 auto;

  @media (min-width: 600px) {
    width: 90%;
  }

  @media (min-width: 900px) {
    width: 95%;
  }
`;

// Heading style
export const ChatHeader = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #007bff;
  // border-bottom: 2px solid #007bff;
  margin-bottom: 10px;
`;

export const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 10px;
  width: 100%;
  max-width: 600px; /* Maximum width for the chat window */
  margin: 20px auto; /* Center the chat */
  border-radius: 10px;
  background-color: #f7f7f7;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  height: 500px;
  overflow: hidden;
  padding: 8px 6px;

  @media (min-width: 330px) {
    padding: 10px;
  }
  @media (min-width: 600px) {
    height: 600px;
    padding: 15px;
  }
`;
