import { MailAdapter, SendMailData } from "../mail-adpters";
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "79a7ae14214cfb",
    pass: "797b4e51cc0c66",
  },
});

export class NodemailerMainAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <email@gmail.com>",
      to: "Emerson <emersons.a296@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
