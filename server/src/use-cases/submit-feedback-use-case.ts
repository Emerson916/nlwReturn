import { MailAdapter } from "../adapters/mail-adpters";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is require");
    }

    if (!comment) {
      throw new Error("Comment is require");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Invalid screenshot format.");
    }

    await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo Feedback",

      body: [
        `<html>`,
        `<body style="max-width: 800px; margin: 20px auto; padding: 20px; background-color: #09090A">`,
        `<h1 style="font-size: 20px; font-family: Arial, Helvetica, sans-serif">Olá, agradecemos o envio do seu feedback</h1>`,
        `<p  style="font-size: 16px; font-family: Arial, Helvetica, sans-serif; color: #565656; font-weight: 700;"></p>`,
        `<p  style="font-size: 16px; font-family: Arial, Helvetica, sans-serif; color: #565656; font-weight: 700;">Iremos verificar o erro 😊</p>`,
        `<p  style="font-size: 16px; font-family: Arial, Helvetica, sans-serif; color: #565656; font-weight: 700;">${type}</p>`,
        `<p  style="font-size: 16px; font-family: Arial, Helvetica, sans-serif; color: #565656; font-weight: 700;">${comment}</p>`,
        `</body>`,
        `</html>`,
      ].join("\n"),
    });
  }
}
