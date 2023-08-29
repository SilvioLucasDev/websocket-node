import { type GetStudent } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/postgres/helpers/connection'

export class PgStudentRepository implements GetStudent {
  async get ({ id }: GetStudent.Input): Promise<GetStudent.Output> {
    const student = await prisma.student.findFirst({
      where: {
        id
      },
      select: {
        id: true,
        name: true
      }
    })
    if (student !== null && student !== undefined) {
      return {
        id: student.id,
        name: student.name
      }
    }
  }
}
