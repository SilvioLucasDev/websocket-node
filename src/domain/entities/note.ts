import { type UUIDGenerator } from '@/application/contracts/adapters'

export class Note {
  constructor (
    readonly id: string,
    readonly idStudent: string,
    readonly note: number,
    readonly points: number
  ) {}

  static create ({ idStudent, note }: Input, crypto: UUIDGenerator): Note {
    const id = crypto.uuid()
    const points = note * 10
    return new Note(id, idStudent, note, points)
  }
}

type Input = {
  idStudent: string
  note: number
}
