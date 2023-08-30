import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type GetStudent, type SaveGrade } from '@/application/contracts/repositories'
import { Grade } from '@/domain/entities'
import { StudentNotFoundError } from '@/application/errors'

export class RegisterGradeUseCase {
  constructor (
    private readonly studentRepository: GetStudent,
    private readonly gradeRepository: SaveGrade,
    private readonly crypto: UUIDGenerator
  ) {}

  async execute ({ note, idStudent }: Input): Promise<void> {
    const student = await this.studentRepository.get({ id: idStudent })
    if (student === undefined) throw new StudentNotFoundError()
    const newGrade = Grade.create({ idStudent, note }, this.crypto)
    await this.gradeRepository.save(newGrade)
  }
}

type Input = {
  note: number
  idStudent: string
}
