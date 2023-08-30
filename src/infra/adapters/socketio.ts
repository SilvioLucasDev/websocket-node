import { type ListenTCP, type EmitTCP } from '@/application/contracts/adapters'
import { env } from '@/main/config/env'

import express from 'express'
import http from 'http'
import path from 'path'
import { Server, type Socket } from 'socket.io'

export class SocketIOAdapter implements EmitTCP, ListenTCP {
  io: any
  server: any

  constructor () {
    const app = express()
    app.use(express.static(path.join(__dirname, '../../../', 'public')))
    this.server = http.createServer(app)
    this.io = new Server(this.server)
  }

  emit ({ event, data }: EmitTCP.Input): void {
    this.io.on('connection', (socket: Socket) => {
      this.io.emit(event, data)
    })
  }

  listen (): void {
    this.server.listen(env.webSocketPort, () => {
      console.log(`WebSocket running at ${env.webSocketPort}`)
    })
  }
}
