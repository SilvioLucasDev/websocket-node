import { type OnHTTP } from '@/application/contracts/adapters'
import { makeRegisterGradeController } from '@/main/factories/presentation/controllers'

export class StudentRouter {
  constructor (httpServer: OnHTTP) {
    httpServer.on({
      method: 'post',
      url: '/students/grades',
      callback: async (params: any, body: any) => {
        return await makeRegisterGradeController().handle(body)
      }
    })
  }
}
