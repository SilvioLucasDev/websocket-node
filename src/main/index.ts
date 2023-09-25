import './config/module-alias'
import { makeHttpServer as initHttpServer } from '@/main/factories/main/routes'
import { makeSocketIOAdapter as initWebSocket } from '@/main/factories/infra/adapters'
import { setupSwagger } from '@/main/routes'
import express from 'express'

export const app = express()
setupSwagger(app)
export const server = initHttpServer(app)
initWebSocket(app).listen()
