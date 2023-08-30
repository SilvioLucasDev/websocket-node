import { SocketIOAdapter } from '@/infra/adapters'

export const makeSocketIOAdapter = (): SocketIOAdapter => {
  return new SocketIOAdapter()
}
