import { type SaveGrade } from '@/application/contracts/repositories'
import prisma from '@/infra/repositories/postgres/helpers/connection'

export class PgGradeRepository implements SaveGrade {
  async save ({ id, idStudent, note, points }: SaveGrade.Input): Promise<void> {
    await prisma.grade.create({
      data: { id, id_student: idStudent, note, points }
    })
  }

  async getRanking (): Promise<any> {
    const schoolIds = await prisma.school.findMany({
      select: {
        id: true,
        name: true
      }
    })

    console.log('schoolIds', schoolIds)

    const studentsWithPoints = await prisma.grade.groupBy({
      by: ['id_student'],
      _sum: {
        points: true
      },
      orderBy: {
        _sum: {
          points: 'desc'
        }
      }
    })

    console.log('studentsWithPoints', studentsWithPoints)

    const studentPointsMap: any = {}

    for (const student of studentsWithPoints) {
      studentPointsMap[student.id_student] = student._sum.points
    }

    const sortedStudentsBySchool: any = {}

    for (const school of schoolIds) {
      const topStudents = await prisma.student.findMany({
        where: {
          id_school: school.id
        },
        take: 10,
        orderBy: {
          id: 'asc'
        }
      })

      const topStudentsWithPoints = topStudents.map(student => ({
        ...student,
        points: studentPointsMap[student.id]
      }))

      const sortedTopStudents = topStudentsWithPoints.sort(
        (a, b) => b.points - a.points
      )

      sortedStudentsBySchool[school.name] = sortedTopStudents
    }

    console.log('sortedStudentsBySchool', sortedStudentsBySchool)

    const allStudents = await prisma.student.findMany()

    const studentsWithTotalPoints = allStudents.map(student => ({
      ...student,
      points: studentPointsMap[student.id]
    }))

    const sortedStudentsByPoints = studentsWithTotalPoints.sort(
      (a, b) => b.points - a.points
    )

    const topOverallStudents = sortedStudentsByPoints.slice(0, 3)

    console.log('Top 3 Alunos Gerais:', topOverallStudents)
  }
}
