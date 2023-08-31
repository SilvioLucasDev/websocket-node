import swaggerConfig from '@/main/docs'
import { env } from '@/main/config/env'

import { serve, setup } from 'swagger-ui-express'
import express from 'express'

export const setupSwagger = (): void => {
  const app = express()
  app.use('/api-docs', serve, setup(swaggerConfig))
  app.listen(env.swaggerPort, () => { console.log(`Swagger running at http://localhost:${env.swaggerPort}`) })
}
