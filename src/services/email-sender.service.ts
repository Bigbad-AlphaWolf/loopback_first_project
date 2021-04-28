import {BindingScope, injectable} from '@loopback/core';
import * as nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import {EMAIL_CONFIG} from '../utils/email.config';

export interface EmailManager<T = Object> {
  sendMail(mailObj: Mail.Options): Promise<T>;
}

@injectable({scope: BindingScope.TRANSIENT})
export class EmailSenderService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */

  async sendMail(mailObj: Mail.Options): Promise<object> {
    const configOption = EMAIL_CONFIG;

    let transporter = nodemailer.createTransport(configOption);

    return await transporter.sendMail(mailObj);
  }
}
