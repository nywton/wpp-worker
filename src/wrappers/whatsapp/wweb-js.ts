/* Docs: https://wwebjs.dev/guide/
 * whatsapp-web.js is an unofficial, open-source library
 * that isn't made by WhatsApp or affiliated with it in any way.
 * This library is designed to offer developers the freedom to create
 * WhatsApp clients, chatbots, applications, and more using node.js.
 */
import { Client, LocalAuth } from 'whatsapp-web.js';
import { IWhatsAppWeb } from './IWhatsAppWeb';
import * as qrcode from 'qrcode-terminal';

export class WhatsAppWebJS implements IWhatsAppWeb {
  private client: Client;

  constructor() {
    this.client = new Client({
      authStrategy: new LocalAuth({
        clientId: "worker",
        dataPath: "sessions"
      }),
      puppeteer: {
        headless: true, // false makes browser launchs. Make it true for running on servers
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    });
  }

  start(): void {
    this.client.initialize();
  }

  onMessageCreated(callback: (message: any) => void): void {
    this.client.on('message', callback);
  }

  onReady(handler: () => void): void {
    this.client.on('ready', handler);
  }

  onQrCode(): void {
    this.client.on('qr', (qr) => {
      qrcode.generate(qr, { small: true });
    });
  }

  public initialize(): void {
    this.client.initialize();
  }
}




