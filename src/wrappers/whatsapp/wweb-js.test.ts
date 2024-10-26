import { WhatsAppWebJS } from './wweb-js';
import { Client, LocalAuth } from 'whatsapp-web.js';
import { Message } from '../../types/models';

jest.mock('whatsapp-web.js');

describe('WhatsAppWebJS', () => {
  let whatsappClient: WhatsAppWebJS;
  let client: Client;

  beforeEach(() => {
    client = new Client({
      authStrategy: new LocalAuth({
        clientId: 'test-client-id',
        dataPath: 'test-data-path',
      }),
      puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    });

    whatsappClient = new WhatsAppWebJS();
    whatsappClient.instance = client;
  });

  it('should start the WhatsApp client', async () => {
    await whatsappClient.start();
    expect(client.initialize).toHaveBeenCalledTimes(1);
  });

  it('should set a callback for when a message is created', async () => {
    const callback = jest.fn();
    whatsappClient.onMessage(callback);
    client.emit('message', { from: '1234567890', body: 'Hello' });
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it('should set a callback for when the client is ready', async () => {
    const handler = jest.fn();
    whatsappClient.onReady(handler);
    client.emit('ready');
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it('should display the QR code when received', async () => {
    const qrCode = 'https://example.com/qr-code';
    whatsappClient.onQrCode();
    client.emit('qr', qrCode);
    // Verify that the QR code is displayed
    expect(qrcode.generate).toHaveBeenCalledTimes(1);
  });

  it('should skip initializing the browser if SKIP_BROWSER is true', async () => {
    process.env.SKIP_BROWSER = 'true';
    expect(whatsappClient.skipInitializeBrowser()).toBe(true);
  });

  it('should not skip initializing the browser if SKIP_BROWSER is false', async () => {
    process.env.SKIP_BROWSER = 'false';
    expect(whatsappClient.skipInitializeBrowser()).toBe(false);
  });
});
