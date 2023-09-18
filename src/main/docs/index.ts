import { studentPath } from '@/main/docs/paths'
import { badRequest, serverError, notFound } from '@/main/docs/components'
import { registerGradeParams } from '@/main/docs/schemas/params'
import { errorResponse } from '@/main/docs/schemas/responses'
import { env } from '@/main/config/env'

export default {
  openapi: '3.0.0',
  info: {
    title: 'WebSocket',
    description: 'WebSocket em NodeJs para atualizar ranking de alunos em tempo real.',
    version: '1.0.0'
  },
  servers: [{
    url: `http://localhost:${env.port}/v1/api`,
    description: 'Servidor de desenvolvimento'
  }],
  tags: {
    name: 'Student'
  },
  paths: {
    '/students/grades': studentPath
  },
  schemas: {
    registerGradeParams,
    errorResponse
  },
  components: {
    badRequest,
    serverError,
    notFound
  }
}
