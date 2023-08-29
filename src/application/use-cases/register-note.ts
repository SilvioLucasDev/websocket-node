import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type GetStudent, type SaveNote } from '@/application/contracts/repositories'
import { Note } from '@/domain/entities'
import { StudentNotFoundError } from '@/application/errors'

export class RegisterNoteUseCase {
  constructor (
    private readonly studentRepository: GetStudent,
    private readonly noteRepository: SaveNote,
    private readonly crypto: UUIDGenerator
  ) {}

  async execute ({ note, idStudent }: Input): Promise<Output> {
    const student = await this.studentRepository.get({ id: idStudent })
    if (student === undefined) throw new StudentNotFoundError()
    const newNote = Note.create({ idStudent, note }, this.crypto)
    await this.noteRepository.save(newNote)

    // APLICAR LOGICA PARA CHAMAR O REPO QUE CALCULA AS NOTAS PARA RETORNAR AQUI
    return { }
  }
}

type Input = {
  note: string
  idStudent: string
}

type Output = any
