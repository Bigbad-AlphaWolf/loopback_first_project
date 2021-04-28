// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {post, response} from '@loopback/openapi-v3';
import {EmailSenderService} from '../services';

// import {inject} from '@loopback/core';

export class MailSenderController {
  constructor(
    @inject('services.EmailSenderService')
    protected mailSender: EmailSenderService,
  ) {}

  @post('/send-email')
  @response(200, {
    description: "Api de test pour l'envoi d'email",
  })
  sendMail(): string {
    const modelObject = {
      from: 'pamoapp001@gmail.com',
      to: 'mabdoulkarimdiop@gmail.com',
      subject: 'Test',
      html: 'Ceci est email de test',
    };
    this.mailSender
      .sendMail(modelObject)
      .then((res: any) => {
        console.log('res', res);
      })
      .catch((err: any) => {
        console.log('err', err);
      });
    return 'Hello world!';
  }
}
