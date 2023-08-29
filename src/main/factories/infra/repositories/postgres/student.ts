import { PgStudentRepository } from '@/infra/repositories/postgres'

export const makePgStudentRepository = (): PgStudentRepository => {
  return new PgStudentRepository()
}
