import { type UUIDGenerator } from '@/application/contracts/adapters'

export class Note {
  constructor (
    readonly id: string,
    readonly idStudent: string,
    readonly note: string
  ) {}

  static create ({ idStudent, note }: Input, crypto: UUIDGenerator): Note {
    const id = crypto.uuid()
    return new Note(id, idStudent, note)
  }
}

type Input = {
  idStudent: string
  note: string
}
