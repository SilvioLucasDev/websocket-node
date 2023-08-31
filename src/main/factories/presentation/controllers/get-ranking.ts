import { GetRankingController } from '@/presentation/controllers'
import { makeGetRankingUseCase } from '@/main/factories/application/use-cases'

export const makeGetRankingController = (): GetRankingController => {
  return new GetRankingController(
    makeGetRankingUseCase()
  )
}
