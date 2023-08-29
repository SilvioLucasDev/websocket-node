export class StudentNotFoundError extends Error {
  constructor () {
    super('Student not found')
    this.name = 'StudentNotFoundError'
  }
}
