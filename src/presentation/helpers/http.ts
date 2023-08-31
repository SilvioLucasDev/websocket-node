import { ServerError } from '@/presentation/errors'

export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: 400,
  data: error
})

export const serverError = (error: Error): HttpResponse<Error> => ({
  statusCode: 500,
  data: new ServerError(error)
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  data: null
})
