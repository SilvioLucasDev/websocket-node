import './config/module-alias'
import { makeHttpServer as initHttpServer } from '@/main/factories/main/routes'
import { makeSocketIOAdapter as initWebSocket } from '@/main/factories/infra/adapters'
import { setupSwagger } from '@/main/routes'

setupSwagger()
initHttpServer()
initWebSocket().listen()
