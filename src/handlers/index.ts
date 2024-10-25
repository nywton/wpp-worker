import { Message } from "../types/models";

export const onMessage = async (message: Message) => {
  try {
    console.log('Received message:', message);
  } catch (error) {
    console.error('Error processing message:', error);
  }
};

export const onReady = () => {
  console.log('Info: Phone connected!');
  console.log('Info: WhatsApp client is ready!');
};
