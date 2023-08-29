import { RegisterGradeUseCase } from '@/application/use-cases'
import { makePgGradeRepository, makePgStudentRepository } from '@/main/factories/infra/repositories/postgres'
import { makeUUIDAdapter } from '@/main/factories/infra/adapters'

export const makeRegisterGradeUseCase = (): RegisterGradeUseCase => {
  return new RegisterGradeUseCase(
    makePgStudentRepository(),
    makePgGradeRepository(),
    makeUUIDAdapter()
  )
}
