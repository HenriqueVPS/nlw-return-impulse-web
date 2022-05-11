import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2ef7c49d1a47b6",
      pass: "d7ca0271cd816e"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body } : SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <henriquevpsantos@hotmail.com>',
        to: 'Henrique Pereira <jibas1997@hotmail.com>',
        subject: subject,
        html: body
    })
    }
}