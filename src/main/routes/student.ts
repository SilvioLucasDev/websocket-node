import { type On } from '@/application/contracts/adapters'

export class StudentRouter {
  constructor (httpServer: On) {
    httpServer.on({
      method: 'post',
      url: '/students/notes',
      callback: async (params: any, body: any) => {
        return { statusCode: 200, data: { Hello: 'World' } }
      }
    })
  }
}
