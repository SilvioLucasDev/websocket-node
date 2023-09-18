import { SocketIOAdapter } from '@/infra/adapters'

import { type Application } from 'express'

export const makeSocketIOAdapter = (app: Application): SocketIOAdapter => {
  return SocketIOAdapter.getInstance(app)
}
