import { type OnHTTP } from '@/application/contracts/adapters'
import { makeGetRankingController, makeRegisterGradeController } from '@/main/factories/presentation/controllers'

export class StudentRouter {
  constructor (httpServer: OnHTTP) {
    httpServer.on({
      method: 'post',
      url: '/students/grades',
      callback: async (params: any, body: any) => {
        return await makeRegisterGradeController().handle(body)
      }
    })

    httpServer.on({
      method: 'get',
      url: '/students/rankings',
      callback: async (params: any, body: any) => {
        return await makeGetRankingController().handle()
      }
    })
  }
}
