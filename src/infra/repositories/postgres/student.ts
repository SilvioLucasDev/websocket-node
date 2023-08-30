import { type GetRankingStudent, type GetStudent } from '@/application/contracts/repositories'
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

  async getRanking (): Promise<GetRankingStudent.Output> {
    const schools = await prisma.school.findMany({
      include: {
        students: {
          orderBy: { points: 'desc' },
          take: 10,
          select: {
            id: true,
            name: true,
            id_school: true,
            points: true
          }
        }
      }
    })
    const rankStudentsBySchool: Record<string, object[]> = {}
    schools.forEach((school) => {
      rankStudentsBySchool[school.name] = school.students
    })
    const rankStudents = await prisma.student.findMany({
      orderBy: { points: 'desc' },
      take: 3,
      select: {
        id: true,
        name: true,
        id_school: true,
        points: true
      }
    })
    return { rankStudentsBySchool, rankStudents }
  }
}
