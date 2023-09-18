import { type ListenTCP, type EmitTCP } from '@/application/contracts/adapters'
import { env } from '@/main/config/env'

import express from 'express'
import http from 'http'
import path from 'path'
import { Server } from 'socket.io'

export class SocketIOAdapter implements EmitTCP, ListenTCP {
  private static instance: SocketIOAdapter
  io: any
  server: any

  constructor (app: any) {
    app.use(express.static(path.join(__dirname, '../../../', 'public')))
    this.server = http.createServer(app)
    this.io = new Server(this.server)
  }

  static getInstance (app: any): SocketIOAdapter {
    if (SocketIOAdapter.instance == null) SocketIOAdapter.instance = new SocketIOAdapter(app)
    return SocketIOAdapter.instance
  }

  emit ({ event, data }: EmitTCP.Input): void {
    this.io.emit(event, data)
  }

  listen (): void {
    this.server.listen(env.webSocketPort, () => {
      console.log(`WebSocket running at http://localhost:${env.webSocketPort}`)
    })
  }
}
