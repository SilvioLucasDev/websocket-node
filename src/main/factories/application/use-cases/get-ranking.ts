import { GetRankingUseCase } from '@/application/use-cases'
import { makePgGradeRepository } from '@/main/factories/infra/repositories/postgres'
import { makeSocketIOAdapter } from '@/main/factories/infra/adapters'

export const makeGetRankingUseCase = (): GetRankingUseCase => {
  return new GetRankingUseCase(
    makePgGradeRepository(),
    makeSocketIOAdapter()
  )
}
