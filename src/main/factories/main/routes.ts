import { env } from '@/main/config/env'
import { StudentRouter } from '@/main/routes'
import { makeExpressAdapter } from '@/main/factories/presentation/adapters'

import { type Application } from 'express'

export const makeHttpServer = (app: Application): void => {
  const httpServer = makeExpressAdapter(app)
  new StudentRouter(httpServer)
  if (env.nodeEnv !== 'test') httpServer.listen()
}
