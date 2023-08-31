import { prismaMock } from '@/tests/infra/repositories/postgres/mocks'
import { PgGradeRepository } from '@/infra/repositories/postgres'
import { type UUIDGenerator } from '@/application/contracts/adapters'

import { mock, type MockProxy } from 'jest-mock-extended'
import { Grade } from '@/domain/entities'

describe('PgGradeRepository', () => {
  let id: string
  let note: number
  let points: number
  let studentId: string
  let schoolId: string
  let name: string
  let createdAt: Date
  let updatedAt: Date

  let sut: PgGradeRepository
  let crypto: MockProxy<UUIDGenerator>

  beforeAll(() => {
    id = 'any_id'
    note = 7.6
    points = 77
    studentId = 'any_student_id'
    schoolId = 'any_school_id'
    name = 'any_name'
    createdAt = new Date()
    updatedAt = new Date()

    crypto = mock()
  })

  beforeEach(() => {
    sut = new PgGradeRepository()
  })

  afterAll(async () => {
    await prismaMock.$disconnect()
  })

  it('should return undefined an create new grade', async () => {
    prismaMock.grade.create.mockResolvedValue({ id, note, points, id_student: studentId, created_at: createdAt, updated_at: updatedAt })
    prismaMock.student.update.mockResolvedValue({ id, name, id_school: schoolId, points, created_at: createdAt, updated_at: updatedAt })
    const grade = Grade.create({ note, studentId }, crypto)

    const result = sut.save(grade)

    await expect(result).resolves.toBeUndefined()
  })
})
