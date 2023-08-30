import './config/module-alias'
import { makeHttpServer as initHttpServer } from '@/main/factories/main/routes'

import '@/main/websocket'

initHttpServer()
