import { RegisterGradeController } from '@/presentation/controllers'
import { makeRegisterGradeUseCase } from '@/main/factories/application/use-cases'

export const makeRegisterGradeController = (): RegisterGradeController => {
  return new RegisterGradeController(makeRegisterGradeUseCase())
}
