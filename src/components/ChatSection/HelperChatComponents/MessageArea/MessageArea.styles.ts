import styled from 'styled-components';

export const MessageContainer = styled.div`
  /* hide scroll bar for chrome edge safari */
  scrollbar-width: none;
  -ms-overflow-style: none;

  border-radius: 12px;
  padding: 16px;
  height: 350px;
  width: 100%;
  max-width: 600px;
  /* margin: 20px; */
  background-color: #f7f7f7;
  overflow-y: auto;
  border: 1px solid #ccc;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Messages = styled.ul`
  min-height: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
`;

export const ScrollAnchor = styled.div``;
