import axios, { AxiosResponse } from 'axios';
import convertUtcToLocalTime from './convertUtcToLocalTime';

const chatServerUrl = process.env.REACT_APP_CHAT_SERVER_API!;

interface BotResponse {
  token?: string;
  message: string;
  cooledDown?: boolean;
  [key: string]: any; // Optional to handle any additional properties in the response
}

const getBotResponse = async (userMessage: string, token?: string) => {
  try {
    const messageBody = { message: userMessage };
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token ? `Bearer ${token}` : `Bearer ""`, // Include token if available
      },
    };

    // Make API call
    const response: AxiosResponse<BotResponse> = await axios.post(
      chatServerUrl,
      messageBody,
      config
    );

    const { cooledDown, token: newToken, message } = response.data;

    if (cooledDown) {
      // handle cooled down response here
      const formattedLocalTime = convertUtcToLocalTime(message);
      const formattedMessage = `You have reached the maximum limit of message. Please chat again after ${formattedLocalTime}`;
      return { message: formattedMessage, token: newToken };
    } else {
      // handle message which has not exceed the message limit
      return { message: message, token: newToken };
    }
  } catch (error: any) {
    // Check if error is 429 (too many requests)
    return { message: 'Something went wrong! Please try again later' };
  }
};

export default getBotResponse;
