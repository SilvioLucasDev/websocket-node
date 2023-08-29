import { type GetPointsGrade, type SaveGrade } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/postgres/helpers/connection'

export class PgGradeRepository implements SaveGrade, GetPointsGrade {
  async save ({ id, idStudent, note, points }: SaveGrade.Input): Promise<void> {
    await prisma.grade.create({
      data: { id, id_student: idStudent, note, points }
    })
  }

  async getPoints ({ id }: GetPointsGrade.Input): Promise<GetPointsGrade.Output> {
    const points = await prisma.grade.aggregate({
      _sum: {
        points: true
      },
      where: {
        id_student: id
      }
    })
    if (points._sum.points !== null && points._sum.points !== undefined) {
      return { points: points._sum.points }
    }
    return { points: 0 }
  }
}
