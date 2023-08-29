import { PgGradeRepository } from '@/infra/repositories/postgres'

export const makePgGradeRepository = (): PgGradeRepository => {
  return new PgGradeRepository()
}
