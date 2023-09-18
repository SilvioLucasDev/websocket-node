import { prismaMock } from '@/tests/infra/repositories/postgres/mocks'
import { StudentNotFoundError } from '@/application/errors'
import { app } from '@/main'

import request from 'supertest'
import { type School, type Prisma, type Student } from '@prisma/client'

describe('StudentRouter', () => {
  let note: number
  let studentId: string
  let createdAt: Date
  let updatedAt: Date

  beforeAll(() => {
    note = 7.6
    studentId = '1f879d78-46ae-11ee-be56-0242ac120002'
    createdAt = new Date()
    updatedAt = new Date()
  })

  afterAll(async () => {
    await prismaMock.$disconnect()
  })

  describe('POST /students/grades', () => {
    it('should return 204 if success', async () => {
      prismaMock.student.findFirst.mockResolvedValueOnce({ id: 'any_id', name: 'any_name' } as unknown as Prisma.Prisma__StudentClient<Student>)
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

      const { status } = await request(app)
        .post('/v1/api/students/grades')
        .send({ note, studentId })

      expect(status).toBe(204)
    })

    it('should return 400 with StudentNotFoundError', async () => {
      const { status, body } = await request(app)
        .post('/v1/api/students/grades')
        .send({ note, studentId: 'invalid_student_id' })

      expect(status).toBe(400)
      expect(body.error).toBe(new StudentNotFoundError().message)
    })
  })

  describe('GET /students/rankings', () => {
    it('should return 204 if success', async () => {
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

      const { status } = await request(app)
        .get('/v1/api/students/rankings')
        .send()

      expect(status).toBe(204)
    })
  })
})
