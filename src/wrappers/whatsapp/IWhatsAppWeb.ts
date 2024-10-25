export interface IWhatsAppWeb {
  start: () => void;
  onReady: (handler: () => void) => void;
  onQrCode: () => void;
  onMessageCreated: (callback: (message: any) => void) => void;
}
