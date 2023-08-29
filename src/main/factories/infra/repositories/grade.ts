import { PgGradeRepository } from '@/infra/repositories/postgres'

export const makePgEventRepository = (): PgGradeRepository => {
  return new PgGradeRepository()
}
