import { type ListenWebSocket, type EmitWebSocket } from '@/application/contracts/adapters'
import { env } from '@/main/config/env'

import express, { type Application } from 'express'
import http from 'http'
import path from 'path'
import { Server } from 'socket.io'

export class SocketIOAdapter implements EmitWebSocket, ListenWebSocket {
  private static instance: SocketIOAdapter
  io: Server
  server: http.Server

  constructor (app: Application) {
    app.use(express.static(path.join(__dirname, '../../../', 'public')))
    this.server = http.createServer(app)
    this.io = new Server(this.server)
  }

  static getInstance (app: Application): SocketIOAdapter {
    if (SocketIOAdapter.instance == null) {
      SocketIOAdapter.instance = new SocketIOAdapter(app)
    }
    return SocketIOAdapter.instance
  }

  emit ({ event, data }: EmitWebSocket.Input): void {
    this.io.emit(event, data)
  }

  listen (): void {
    this.server.listen(env.webSocketPort, () => {
      console.log(`WebSocket running at http://localhost:${env.webSocketPort}`)
    })
  }
}
