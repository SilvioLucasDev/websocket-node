import { GetRankingUseCase } from '@/application/use-cases'
import { makePgStudentRepository } from '@/main/factories/infra/repositories/postgres'
import { makeSocketIOAdapter } from '@/main/factories/infra/adapters'
import { app } from '@/main/index'

export const makeGetRankingUseCase = (): GetRankingUseCase => {
  return new GetRankingUseCase(
    makePgStudentRepository(),
    makeSocketIOAdapter(app)
  )
}
