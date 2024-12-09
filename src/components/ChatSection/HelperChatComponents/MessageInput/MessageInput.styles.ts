import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InputArea = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 10px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  gap: 4px;
  align-items: center;

  @media (min-width: 330px) {
    padding: 15px;
  }

  @media (min-width: 600px) {
    gap: 10px;
  }
`;

export const RobotIcon = styled(FontAwesomeIcon)`
  font-size: 14px;
  color: #007bff;
  margin-bottom: 5px;
  align-self: flex-end;

  @media (min-width: 330px) {
    font-size: 18px;
  }

  @media (min-width: 600px) {
    font-size: 30px;
  }
`;

export const TextArea = styled.textarea`
  overflow: hidden;
  width: 100%;
  min-height: 40px;
  text-align: justify;
  padding: 10px;
  font-size: 14px;
  line-height: 1.5;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.3s;
  background-color: #f9f9f9;
  caret-color: #007bff;

  &:focus {
    border-color: #007bff;
  }

  @media (min-width: 330px) {
    padding: 14px;
    font-size: 18px;
  }

  @media (min-width: 600px) {
    min-height: 60px;
  }
`;

export const SendMessageButton = styled.button`
  // margin-left: 15px;
  align-self: flex-end;
  background-color: #007bff;
  border: none;
  border-radius: 50%;
  padding: 14px;
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
  &:disabled {
    background-color: #ccc;
    color: #666;
    cursor: not-allowed;
  }
`;

export const SendMessageIcon = styled(FontAwesomeIcon)`
  font-size: 16px;
  color: #ffffff;

  @media (min-width: 600px) {
    padding: 15px;
  }
`;
