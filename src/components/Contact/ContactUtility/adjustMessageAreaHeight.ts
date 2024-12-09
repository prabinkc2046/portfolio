import React from 'react';
import { useEffect } from 'react';
import { FormData } from '../Contact';

export const useAdjustMessageAreaHeight = (
  textAreaRef: React.MutableRefObject<HTMLTextAreaElement>,
  formData: FormData
) => {
  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea) {
      if (formData.message.length > 0) {
        textArea.style.height = 'auto';
        textArea.style.height = `${textArea.scrollHeight}px`;
      } else {
        textArea.style.height = 'auto';
        textArea.rows = 4;
      }
    }
  }, [formData.message]);
};
