import { studentPath } from '@/main/docs/paths'
import { badRequest, serverError, notFound } from '@/main/docs/components'
import { RegisterGradeParamsSchema, errorSchema } from '@/main/docs/schemas'
export default {
  openapi: '3.0.0',
  info: {
    title: 'Teste Full Stack',
    description: 'API rest utilizando WebSocket',
    version: '1.0.0'
  },
  servers: [{
    url: 'http://localhost:8080/v1/api'
  }],
  tags: {
    name: 'Student'
  },
  paths: {
    '/students/grades': studentPath
  },
  schemas: {
    registerGradeParams: RegisterGradeParamsSchema,
    error: errorSchema
  },
  components: {
    badRequest,
    serverError,
    notFound
  }
}
