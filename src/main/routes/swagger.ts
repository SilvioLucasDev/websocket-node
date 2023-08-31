import swaggerConfig from '@/main/docs'

import { serve, setup } from 'swagger-ui-express'

export const setupSwagger = (app: any): void => {
  app.use('/api-docs', serve, setup(swaggerConfig))
}
