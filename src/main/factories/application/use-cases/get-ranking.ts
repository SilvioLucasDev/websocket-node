import { GetRankingUseCase } from '@/application/use-cases'
import { makePgStudentRepository } from '@/main/factories/infra/repositories/postgres'
import { makeSocketIOAdapter } from '@/main/factories/infra/adapters'

export const makeGetRankingUseCase = (): GetRankingUseCase => {
  return new GetRankingUseCase(
    makePgStudentRepository(),
    makeSocketIOAdapter()
  )
}
