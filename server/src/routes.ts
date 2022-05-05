import { NodemailerMainAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

const express = require("express");

export const router = express.Router();

//Rota de criação de feedback
router.post("/feedbacks", async (req: any, resp: any) => {
  try {
    const { type, comment, screenshot } = req.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMainAdapter = new NodemailerMainAdapter();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMainAdapter
    );

    await submitFeedbackUseCase.execute({
      type,
      comment,
      screenshot,
    });

    return resp.status(201).send({});
  } catch (error) {
    return resp.send({ error: "Nâo deu para criar" });
  }
});
