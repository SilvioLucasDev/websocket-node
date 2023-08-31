import swaggerConfig from '@/main/docs'

import { serve, setup } from 'swagger-ui-express'
import express from 'express'

export const setupSwagger = (): void => {
  const app = express()
  app.use('/api-docs', serve, setup(swaggerConfig))
  app.listen(8888, () => { console.log(`Swagger running at http://localhost:${8888}`) })
}
