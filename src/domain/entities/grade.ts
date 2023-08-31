import { type UUIDGenerator } from '@/application/contracts/adapters'

export class Grade {
  constructor (
    readonly id: string,
    readonly studentId: string,
    readonly note: number,
    readonly points: number
  ) {}

  static create ({ note, studentId }: Input, crypto: UUIDGenerator): Grade {
    const id = crypto.uuid()
    const points = note * 10
    return new Grade(id, studentId, note, points)
  }
}

type Input = {
  studentId: string
  note: number
}
