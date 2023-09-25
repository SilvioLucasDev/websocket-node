import { StudentRouter } from '@/main/routes'
import { makeExpressAdapter } from '@/main/factories/presentation/adapters'

import { type Application } from 'express'
import { type Server } from 'http'

export const makeHttpServer = (app: Application): Server => {
  const httpServer = makeExpressAdapter(app)
  new StudentRouter(httpServer)
  return httpServer.listen()
}
