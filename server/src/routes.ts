import express from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailter-mail-adapter'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository'
import { SubmitFeedbackUseCase } from './user-cases/submit-feedback-use-case'

export const routes = express.Router()

routes.use(express.json())



routes.post('/feedbacks', async (request, response) => {
    const { type, comment, screenshot } = request.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    })

    return response.status(201).send()
})