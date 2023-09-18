import { SocketIOAdapter } from '@/infra/adapters'

export const makeSocketIOAdapter = (app: any): SocketIOAdapter => {
  return SocketIOAdapter.getInstance(app)
}
