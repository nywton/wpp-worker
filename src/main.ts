import { WhatsAppWebJS } from './wrappers/whatsapp/wweb-js';
import { IWhatsAppClient } from './wrappers/whatsapp';
import { onMessage, onReady } from './handlers';

const wpp: IWhatsAppClient = new WhatsAppWebJS();

function runWhatsAppWeb(): void {
  console.log('Starting WhatsApp client...');
  try {
    wpp.start();

    wpp.onQrCode();
    wpp.onReady(onReady);
    wpp.onMessage(onMessage);
  } catch (error) {
    console.error('Error starting WhatsApp client:', error);
  }
}

process.on('SIGINT', () => {
  console.log('Shutting down WhatsApp client...');
  wpp.stop(); // Call the stop method to clean up resources
  process.exit();
});

runWhatsAppWeb();
