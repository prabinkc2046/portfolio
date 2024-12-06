import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const chatServerUrl = process.env.REACT_APP_CHAT_SERVER_API!;

interface BotResponse {
  message: string;
  [key: string]: any; // Optional to handle any additional properties in the response
}

interface ErrorResponse {
  message: string;
  [key: string]: any; // Optional for error details
}

const getBotResponse = async (
  userMessage: string,
  token?: string
): Promise<BotResponse | ErrorResponse> => {
  try {
    const messageBody = { message: userMessage };
    const config: AxiosRequestConfig = {
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
    console.log('Response', response);

    // Get data
    return response.data;
  } catch (error: any) {
    // Check if error is 429 (too many requests)
    if (error.response?.status === 429) {
      return error.response.data as ErrorResponse;
    } else {
      console.error(
        `Error in Server Response: ${error.response?.data || error.message}`
      );
      return { message: 'Something went wrong! Please try again later' };
    }
  }
};

export default getBotResponse;
