import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputArea = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  /* margin: 20px; */
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const RobotIcon = styled(FontAwesomeIcon)`
  font-size: 28px;
  color: #007bff;
  margin-right: 15px;
`;

export const TextArea = styled.textarea`
  overflow: hidden;
  text-align: justify;
  width: 100%;
  min-height: 10px;
  padding: 30px 10px 40px 10px;
  font-size: 18px;
  line-height: 1.5;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.3s;
  background-color: #f9f9f9;

  &:focus {
    border-color: #007bff;
  }
`;

export const SendMessageButton = styled.button`
  margin-left: 15px;
  background-color: #007bff;
  border: none;
  border-radius: 8px;
  padding: 12px 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.1s;

  &:hover {
    background-color: #0056b3;
    transform: scale(1.05);
  }
  &:active {
    background-color: #007bff;
    transform: scale(1);
  }
`;

export const SendMessageIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: #ffffff;
`;
