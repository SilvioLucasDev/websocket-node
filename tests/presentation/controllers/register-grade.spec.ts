import { RegisterGradeController } from '@/presentation/controllers'
import { RequiredNumber, RequiredString, ValidationComposite } from '@/presentation/validation'
import { ServerError } from '@/presentation/errors'
import { type GetRankingUseCase, RegisterGradeUseCase } from '@/application/use-cases'
import { StudentNotFoundError } from '@/application/errors'

import { mock, type MockProxy } from 'jest-mock-extended'

jest.mock('@/presentation/validation/composite')

describe('RegisterGradeController', () => {
  let note: number
  let studentId: string

  let sut: RegisterGradeController
  let registerGradeUseCase: MockProxy<RegisterGradeUseCase>
  let getRankingUseCase: MockProxy<GetRankingUseCase>

  beforeAll(() => {
    note = 7.6
    studentId = 'any_student_id'

    registerGradeUseCase = mock()
    getRankingUseCase = mock()
  })

  beforeEach(() => {
    sut = new RegisterGradeController(registerGradeUseCase,getRankingUseCase)
  })

  it('should return 400 if validation fails', async () => {
    const error = new Error('validation_error')
    const ValidationCompositeSpy = jest.fn().mockImplementationOnce(() => ({
      validate: jest.fn().mockReturnValueOnce(error)
    }))
    jest.mocked(ValidationComposite).mockImplementationOnce(ValidationCompositeSpy)

    const httpResponse = await sut.handle({ note, studentId })

    expect(ValidationComposite).toHaveBeenCalledWith([
      new RequiredNumber(note, 'note'),
      new RequiredString(studentId, 'studentId'),
    ])
    expect(httpResponse).toEqual({
      statusCode: 400,
      data: error
    })
  })

  it('should call RegisterGradeUseCase with correct params', async () => {
    await sut.handle({ note, studentId })

    expect(registerGradeUseCase.execute).toHaveBeenCalledWith({ note, studentId })
    expect(registerGradeUseCase.execute).toHaveBeenCalledTimes(1)
  })

  it('should call GetRankingUseCase', async () => {
    await sut.handle({ note, studentId })

    expect(getRankingUseCase.execute).toHaveBeenCalledTimes(1)
  })

  it('should return 500 if RegisterGradeUseCase throws', async () => {
    const error = new Error('infra_error')
    registerGradeUseCase.execute.mockRejectedValueOnce(error)

    const httpResponse = await sut.handle({ note, studentId })

    expect(httpResponse).toEqual({
      statusCode: 500,
      data: new ServerError(error)
    })
  })

  it('should return 500 if GetRankingUseCase throws', async () => {
    const error = new Error('infra_error')
    getRankingUseCase.execute.mockRejectedValueOnce(error)

    const httpResponse = await sut.handle({ note, studentId })

    expect(httpResponse).toEqual({
      statusCode: 500,
      data: new ServerError(error)
    })
  })

  it('should return 400 if purchase fails and error is StudentNotFoundError', async () => {
    registerGradeUseCase.execute.mockRejectedValueOnce(new StudentNotFoundError())

    const httpResponse = await sut.handle({ note, studentId })

    expect(httpResponse).toEqual({
      statusCode: 400,
      data: new StudentNotFoundError()
    })
  })

  it('should return 204 if purchase succeeds', async () => {
    const httpResponse = await sut.handle({ note, studentId })

    expect(httpResponse).toEqual({
      statusCode: 204,
      data: null
    })
  })
})
