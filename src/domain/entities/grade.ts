import { type UUIDGenerator } from '@/application/contracts/adapters'

export class Grade {
  constructor (
    readonly id: string,
    readonly note: number,
    readonly points: number,
    readonly studentId: string
  ) {}

  static create ({ note, studentId }: Input, crypto: UUIDGenerator): Grade {
    const id = crypto.uuid()
    const points = note * 10
    return new Grade(id, note, points, studentId)
  }
}

type Input = {
  note: number
  studentId: string
}
