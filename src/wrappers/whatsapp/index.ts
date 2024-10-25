import { Message } from "../../types/models";

export interface IWhatsAppClient {
  start: () => void;
  onReady: (handler: () => void) => void;
  onMessage: (callback: (message: Message) => void) => void;
  onQrCode: () => void;
  stop: () => void;
}
