import { prismaMock } from '@/tests/infra/repositories/postgres/mocks'
import { PgStudentRepository } from '@/infra/repositories/postgres'

import { School, type Prisma, type Student } from '@prisma/client'

describe('PgStudentRepository', () => {
  let id: string
  let name: string
  let createdAt: Date
  let updatedAt: Date

  let sut: PgStudentRepository

  beforeEach(() => {
    id = 'any_id'
    name = 'any_name'
    createdAt = new Date()
    updatedAt = new Date()

    sut = new PgStudentRepository()
  })

  afterAll(async () => {
    await prismaMock.$disconnect()
  })

  it('should return student if exists', async () => {
    prismaMock.student.findFirst.mockResolvedValueOnce({ id, name } as unknown as Prisma.Prisma__StudentClient<Student>)

    const student = await sut.get({ id })

    expect(student).toEqual({ id, name })
  })

  it('should return undefined if student not exists', async () => {
    prismaMock.student.findFirst.mockResolvedValueOnce(null)

    const student = await sut.get({ id })

    expect(student).toBeUndefined()
  })

  it('should return an object with ranking arrays', async () => {
    prismaMock.school.findMany.mockResolvedValue([
      { id: 'any_school_id_1', name: 'any_name_1', created_at: createdAt, updated_at: updatedAt, students: [] },
      { id: 'any_school_id_2', name: 'any_name_2', created_at: createdAt, updated_at: updatedAt, students: [] },
      { id: 'any_school_id_3', name: 'any_name_3', created_at: createdAt, updated_at: updatedAt, students: [] }
    ] as unknown as School[])

    prismaMock.student.findMany.mockResolvedValue([
      { id: 'any_student_id_1', name: 'any_name_1', school_id: 'any_school_id_1', points: 1 },
      { id: 'any_student_id_2', name: 'any_name_2', school_id: 'any_school_id_2', points: 2 },
      { id: 'any_student_id_3', name: 'any_name_3', school_id: 'any_school_id_3', points: 3 }
    ] as unknown as Student[])

    const result = await sut.getRanking()

    expect(result).toEqual({
      rankStudentsBySchool: {
        'any_name_1': [],
        'any_name_2': [],
        'any_name_3': [],
      },
      rankStudents: [
        { id: 'any_student_id_1', name: 'any_name_1', school_id: 'any_school_id_1', points: 1 },
        { id: 'any_student_id_2', name: 'any_name_2', school_id: 'any_school_id_2', points: 2 },
        { id: 'any_student_id_3', name: 'any_name_3', school_id: 'any_school_id_3', points: 3 }
      ]
    });
  })
})
