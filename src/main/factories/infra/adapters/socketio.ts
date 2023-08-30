import { SocketIOAdapter } from '@/infra/adapters'

export const makeSocketIOAdapter = (): SocketIOAdapter => {
  return SocketIOAdapter.getInstance()
}
