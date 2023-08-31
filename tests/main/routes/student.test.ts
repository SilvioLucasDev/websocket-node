import { prismaMock } from '@/tests/infra/repositories/postgres/mocks'
import { StudentRouter } from '@/main/routes'
import { StudentNotFoundError } from '@/application/errors'
import { ExpressAdapter } from '@/presentation/adapters'

import request from 'supertest'
import { type School, type Prisma, type Student } from '@prisma/client'

describe('StudentRouter', () => {
  let note: number
  let studentId: string
  let createdAt: Date
  let updatedAt: Date

  let httpServer: ExpressAdapter

  beforeAll(() => {
    note = 7.6
    studentId = '1f879d78-46ae-11ee-be56-0242ac120002'
    createdAt = new Date()
    updatedAt = new Date()

    httpServer = new ExpressAdapter()
    new StudentRouter(httpServer)
    httpServer.listen()
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
        { id: 'any_student_id_1', name: 'any_name_1', id_school: 'any_school_id_1', points: 1 },
        { id: 'any_student_id_2', name: 'any_name_2', id_school: 'any_school_id_2', points: 2 },
        { id: 'any_student_id_3', name: 'any_name_3', id_school: 'any_school_id_3', points: 3 }
      ] as unknown as Student[])

      const { status } = await request(httpServer.app)
        .post('/v1/api/students/grades')
        .send({ note, studentId })

      expect(status).toBe(204)
    })

    it('should return 400 with StudentNotFoundError', async () => {
      const { status, body } = await request(httpServer.app)
        .post('/v1/api/students/grades')
        .send({ note, studentId: 'invalid_event_id' })

      expect(status).toBe(400)
      expect(body.error).toBe(new StudentNotFoundError().message)
    })
  })
})
