import { badRequest, serverError, type HttpResponse, noContent } from '@/presentation/helpers'
import { type GetRankingUseCase, type RegisterGradeUseCase } from '@/application/use-cases'
import { StudentNotFoundError } from '@/application/errors'
import { RequiredString, RequiredNumber, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'

export class RegisterGradeController implements Controller {
  constructor (
    private readonly registerGradeUseCase: RegisterGradeUseCase,
    private readonly getRankingUseCase: GetRankingUseCase
  ) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      await this.registerGradeUseCase.execute({ note: httpRequest.note, studentId: httpRequest.studentId })
      await this.getRankingUseCase.execute()
      return noContent()
    } catch (error) {
      if (error instanceof StudentNotFoundError) return badRequest(error)
      return serverError(error as Error)
    }
  }

  private validate ({ note, studentId }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      new RequiredNumber(note, 'note'),
      new RequiredString(studentId, 'studentId')
    ]).validate()
  }
}
type HttpRequest = {
  note: number
  studentId: string
}

type Model = Error
