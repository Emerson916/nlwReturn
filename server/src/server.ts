const { prisma } = require("./prisma");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "79a7ae14214cfb",
    pass: "797b4e51cc0c66",
  },
});

//Rota de criação de feedback
app.post("/feedbacks", async (req: any, resp: any) => {
  try {
    const { type, comment, screenshot } = req.body;
    const feedback = await prisma.feedback.create({
      data: {
        type: type,
        comment: comment,
        screenshot: screenshot,
      },
    });

    await transport.sendMail({
      from: "Equipe Feedget <email@gmail.com>",
      to: "Emerson <emersons.a296@gmail.com>",
      subject: "Novo feedback",
      html: [
        `<p> Tipo do feedback ${type}</p>`,
        `<p> Comentário:  ${comment}</p>`,
      ].join("\n"),
    });

    return resp.status(201).json({ data: feedback });
  } catch (error) {
    return resp.send({ error: "Nâo deu para criar" });
  }
});

app.listen(3001, () => {
  console.log("Agora esta pegando");
});
