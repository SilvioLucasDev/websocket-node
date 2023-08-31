import { serverError, type HttpResponse, noContent } from '@/presentation/helpers'
import { type GetRankingUseCase } from '@/application/use-cases'
import { type Controller } from '@/presentation/controllers'

export class GetRankingController implements Controller {
  constructor (private readonly getRankingUseCase: GetRankingUseCase) { }

  async handle (): Promise<HttpResponse<Model>> {
    try {
      await this.getRankingUseCase.execute()
      return noContent()
    } catch (error) {
      return serverError(error as Error)
    }
  }
}

type Model = Error
