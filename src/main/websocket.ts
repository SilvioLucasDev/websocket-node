import { env } from './config/env'

import express from 'express'
import http from 'http'
import path from 'path'
import { Server } from 'socket.io'

const app = express()

app.use(express.static(path.join(__dirname, '../../', 'public')))

const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
  console.log('Novo socket conectado:', socket.id)

  socket.emit('podium', 'Olá, cliente! Esta é uma mensagem do servidor.')

  socket.on('disconnect', () => {
    console.log('Socket desconectado:', socket.id)
  })
})

server.listen(env.webSocketPort, () => {
  console.log(`Servidor Socket.IO está ouvindo na porta ${env.webSocketPort}`)
})
