import { WhatsAppWebJS } from './wrappers/whatsapp/wweb-js';
import { Message } from './types/models';
import { IWhatsAppWeb } from './wrappers/whatsapp/IWhatsAppWeb';

const wpp: IWhatsAppWeb = new WhatsAppWebJS();

const onMessageCreated = async (message: Message) => {
  console.log(message);
}

const onReady = () => {
  console.log('Info: Whatsapp Client is ready!');
}

function runWhatsAppWeb(): void {
  wpp.start();
  wpp.onReady(onReady);
  wpp.onMessageCreated(onMessageCreated);
  wpp.onQrCode();
}

runWhatsAppWeb();
