import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type GetPointsGrade, type GetStudent, type SaveGrade } from '@/application/contracts/repositories'
import { Grade } from '@/domain/entities'
import { StudentNotFoundError } from '@/application/errors'

export class RegisterGradeUseCase {
  constructor (
    private readonly studentRepository: GetStudent,
    private readonly gradeRepository: SaveGrade & GetPointsGrade,
    private readonly crypto: UUIDGenerator
  ) {}

  async execute ({ note, idStudent }: Input): Promise<Output> {
    const student = await this.studentRepository.get({ id: idStudent })
    if (student === undefined) throw new StudentNotFoundError()
    const newGrade = Grade.create({ idStudent, note }, this.crypto)
    await this.gradeRepository.save(newGrade)
    const { points } = await this.gradeRepository.getPoints({ id: idStudent })
    return { points }
  }
}

type Input = {
  note: number
  idStudent: string
}

type Output = {
  points: number
}
