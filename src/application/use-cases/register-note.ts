import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type GetPointsNote, type GetStudent, type SaveNote } from '@/application/contracts/repositories'
import { Note } from '@/domain/entities'
import { StudentNotFoundError } from '@/application/errors'

export class RegisterNoteUseCase {
  constructor (
    private readonly studentRepository: GetStudent,
    private readonly noteRepository: SaveNote & GetPointsNote,
    private readonly crypto: UUIDGenerator
  ) {}

  async execute ({ note, idStudent }: Input): Promise<Output> {
    const student = await this.studentRepository.get({ id: idStudent })
    if (student === undefined) throw new StudentNotFoundError()
    const newNote = Note.create({ idStudent, note }, this.crypto)
    await this.noteRepository.save(newNote)
    const { points } = await this.noteRepository.getPoints({ id: idStudent })
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
