import { RegisterGradeUseCase } from '@/application/use-cases'
import { type UUIDGenerator } from '@/application/contracts/adapters'
import { type GetStudent, type SaveGrade } from '@/application/contracts/repositories'
import { StudentNotFoundError } from '@/application/errors'
import { Grade } from '@/domain/entities'

import { type MockProxy, mock } from 'jest-mock-extended'

describe('RegisterGradeUseCase', () => {
  let note: number
  let studentId: string
  let name: string

  let sut: RegisterGradeUseCase
  let studentRepository: MockProxy<GetStudent>
  let gradeRepository: MockProxy<SaveGrade>
  let crypto: MockProxy<UUIDGenerator>
  let grade: jest.SpyInstance


  beforeAll(() => {
    note = 7.6
    studentId = 'any_student_id'
    name = 'any_name'

    studentRepository = mock()
    studentRepository.get.mockResolvedValue({ id: studentId, name })
    gradeRepository = mock()
    crypto = mock()
    grade = jest.spyOn(Grade, 'create')
  })

  beforeEach(() => {
    sut = new RegisterGradeUseCase(studentRepository, gradeRepository, crypto)
  })

  it('should call method get of StudentRepository with correct value', async () => {
    await sut.execute({ note, studentId })

    expect(studentRepository.get).toHaveBeenCalledWith({ id: studentId })
    expect(studentRepository.get).toHaveBeenCalledTimes(1)
  })

  it('should throw StudentNotFoundError if StudentRepository return undefined', async () => {
    studentRepository.get.mockResolvedValueOnce(undefined)

    const promise = sut.execute({ note, studentId })

    await expect(promise).rejects.toThrow(new StudentNotFoundError())
  })

  it('should call GradeEntity with correct values', async () => {
    await await sut.execute({ note, studentId })

    expect(grade).toHaveBeenCalledWith({ note, studentId }, crypto)
    expect(grade).toHaveBeenCalledTimes(1)
  })

  it('should call GradeRepository with instance of GradeEntity', async () => {
    await await sut.execute({ note, studentId })

    expect(gradeRepository.save).toHaveBeenCalledWith(expect.any(Grade))
    expect(gradeRepository.save).toHaveBeenCalledTimes(1)
  })
})
