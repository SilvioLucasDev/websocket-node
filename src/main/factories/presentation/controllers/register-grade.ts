import { RegisterGradeController } from '@/presentation/controllers'
import { makeGetRankingUseCase, makeRegisterGradeUseCase } from '@/main/factories/application/use-cases'

export const makeRegisterGradeController = (): RegisterGradeController => {
  return new RegisterGradeController(
    makeRegisterGradeUseCase(),
    makeGetRankingUseCase()
  )
}
