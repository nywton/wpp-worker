/* Docs: https://wwebjs.dev/guide/
 * whatsapp-web.js is an unofficial, open-source library
 * that isn't made by WhatsApp or affiliated with it in any way.
 * This library is designed to offer developers the freedom to create
 * WhatsApp clients, chatbots, applications, and more using node.js.
 */
import { Client, LocalAuth } from 'whatsapp-web.js';
import type { Message } from '../../types/models';
import { IWhatsAppClient } from '.';
import * as qrcode from 'qrcode-terminal';

export class WhatsAppWebJS implements IWhatsAppClient {
  private instance: Client | null = null;

  private get client(): Client {
    return this.instance ?? this.initClient();
  }

  private initClient(): Client {
    if (this.instance) return this.instance;

    this.instance = new Client({
      authStrategy: new LocalAuth({
        clientId: "worker",
        dataPath: "sessions"
      }),
      puppeteer: {
        headless: true, // false makes browser launch. True for running on servers
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      }
    });

    this.instance.on('error', (error) => {
      console.error('WhatsApp Client Error:', error);
    });

    return this.instance;
  }

  /** Starts the WhatsApp client. */
  start(): void {
    this.client.initialize();
  }

  /** Sets a callback for when a message is created. */
  onMessage(callback: (message: Message) => void): void {
    this.client.on('message', callback);
  }

  /** Sets a callback for when the client is ready. */
  onReady(handler: () => void): void {
    this.client.on('ready', handler);
  }

  /** Displays the QR code when received. */
  onQrCode(): void {
    this.client.on('qr', (qr) => {
      qrcode.generate(qr, { small: true });
    });
  }

  /** Stops the WhatsApp client and cleans up resources. */
  stop(): void {
    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }
  }
}
