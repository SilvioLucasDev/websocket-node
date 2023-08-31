import { type SaveGrade } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/postgres/helpers/connection'

export class PgGradeRepository implements SaveGrade {
  async save ({ id, studentId, note, points }: SaveGrade.Input): Promise<void> {
    await prisma.grade.create({
      data: { id, id_student: studentId, note, points }
    })

    await prisma.student.update({
      where: { id: studentId },
      data: { points: { increment: points } }
    })
  }
}
