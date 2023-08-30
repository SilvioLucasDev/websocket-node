import './config/module-alias'
import { makeHttpServer as initHttpServer } from '@/main/factories/main/routes'
import { makeSocketIOAdapter as initWebSocket } from '@/main/factories/infra/adapters'

initHttpServer()
initWebSocket().listen()
