import { type UUIDGenerator } from '@/application/contracts/adapters'

export class Grade {
  constructor (
    readonly id: string,
    readonly idStudent: string,
    readonly note: number,
    readonly points: number
  ) {}

  static create ({ idStudent, note }: Input, crypto: UUIDGenerator): Grade {
    const id = crypto.uuid()
    const points = note * 10
    return new Grade(id, idStudent, note, points)
  }
}

type Input = {
  idStudent: string
  note: number
}
