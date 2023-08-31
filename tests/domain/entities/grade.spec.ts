import { type UUIDGenerator } from '@/application/contracts/adapters'
import { Grade } from '@/domain/entities'

import { mock, type MockProxy } from 'jest-mock-extended'

describe('GradeEntity', () => {
  let gradeId: string
  let note: number
  let points: number
  let studentId: string

  let sut: Grade
  let crypto: MockProxy<UUIDGenerator>

  beforeAll(() => {
    gradeId = 'any_grade_id'
    note = 7.6
    points = 76
    studentId = 'any_student_id'

    crypto = mock()
    crypto.uuid.mockReturnValue(gradeId)
  })

  beforeEach(() => {
    sut = Grade.create({ note, studentId }, crypto)
  })

  it('should return instance of GradeEntity with correct values', () => {
    expect(sut).toStrictEqual(new Grade(gradeId, note, points, studentId))
  })
})
