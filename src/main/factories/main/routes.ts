import { StudentRouter } from '@/main/routes'
import { makeExpressAdapter } from '@/main/factories/presentation/adapters'

export const makeHttpServer = (): void => {
  const httpServer = makeExpressAdapter()
  new StudentRouter(httpServer)

  httpServer.listen()
}
