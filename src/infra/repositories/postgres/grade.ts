import { type GetRankingGrade, type SaveGrade } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/postgres/helpers/connection'

export class PgGradeRepository implements SaveGrade, GetRankingGrade {
  async save ({ id, idStudent, note, points }: SaveGrade.Input): Promise<void> {
    await prisma.grade.create({
      data: { id, id_student: idStudent, note, points }
    })

    await prisma.student.update({
      where: { id: idStudent },
      data: { points: { increment: points } }
    })
  }

  async getRanking (): Promise<GetRankingGrade.Output> {
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
