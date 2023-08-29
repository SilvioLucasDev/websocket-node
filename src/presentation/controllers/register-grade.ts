import { badRequest, serverError, type HttpResponse, ok } from '@/presentation/helpers'
import { type RegisterGradeUseCase } from '@/application/use-cases'
import { StudentNotFoundError } from '@/application/errors'
import { RequiredString, RequiredNumber, ValidationComposite } from '@/presentation/validation'
import { type Controller } from '@/presentation/controllers'

export class RegisterGradeController implements Controller {
  constructor (private readonly registerGradeUseCase: RegisterGradeUseCase) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    try {
      const error = this.validate(httpRequest)
      if (error !== undefined) return badRequest(error)
      const result = await this.registerGradeUseCase.execute({ note: httpRequest.note, idStudent: httpRequest.idStudent })
      return ok({ points: result.points })
    } catch (error) {
      if (error instanceof StudentNotFoundError) return badRequest(error)
      return serverError(error as Error)
    }
  }

  private validate ({ note, idStudent }: HttpRequest): Error | undefined {
    return new ValidationComposite([
      new RequiredNumber(note, 'note'),
      new RequiredString(idStudent, 'idStudent')
    ]).validate()
  }
}
type HttpRequest = {
  note: number
  idStudent: string
}

type Model = Error | {
  points: number
}