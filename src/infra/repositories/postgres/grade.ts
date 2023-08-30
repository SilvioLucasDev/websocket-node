import { type SaveGrade } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/postgres/helpers/connection'

export class PgGradeRepository implements SaveGrade {
  async save ({ id, idStudent, note, points }: SaveGrade.Input): Promise<void> {
    await prisma.grade.create({
      data: { id, id_student: idStudent, note, points }
    })

    await prisma.student.update({
      where: { id: idStudent },
      data: { points: { increment: points } }
    })
  }
}
