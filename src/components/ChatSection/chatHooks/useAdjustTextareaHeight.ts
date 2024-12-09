import { useEffect, MutableRefObject, Dispatch, SetStateAction } from 'react';

const useAdjustTextareaHeight = (
  textAreaRef: MutableRefObject<HTMLTextAreaElement | null>,
  input: string,
  isSent: boolean,
  setIsSent: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    const textArea = textAreaRef.current;

    if (textArea) {
      if (isSent) {
        // Reset to min height when a message is sent
        textArea.style.height = '30px';
        setIsSent(false);
      } else {
        // Trim trailing spaces and calculate visible content height
        const trimmedInput = input.trim();
        if (trimmedInput.length > 0) {
          // Reset to auto to recalculate scroll height
          textArea.style.height = 'auto';
          textArea.style.height = `${textArea.scrollHeight}px`;
        } else {
          // Reset to min height if input is empty
          textArea.style.height = '30px';
        }
      }
    }
  }, [textAreaRef, input, isSent, setIsSent]);
};

export default useAdjustTextareaHeight;
