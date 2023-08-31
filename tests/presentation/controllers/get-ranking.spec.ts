import { GetRankingController } from '@/presentation/controllers'
import { ServerError } from '@/presentation/errors'
import { type GetRankingUseCase } from '@/application/use-cases'

import { mock, type MockProxy } from 'jest-mock-extended'

describe('GetRankingController', () => {
  let sut: GetRankingController
  let getRankingUseCase: MockProxy<GetRankingUseCase>

  beforeAll(() => {
    getRankingUseCase = mock()
  })

  beforeEach(() => {
    sut = new GetRankingController(getRankingUseCase)
  })


  it('should call GetRankingUseCase', async () => {
    await sut.handle()

    expect(getRankingUseCase.execute).toHaveBeenCalledTimes(1)
  })

  it('should return 500 if GetRankingUseCase throws', async () => {
    const error = new Error('infra_error')
    getRankingUseCase.execute.mockRejectedValueOnce(error)

    const httpResponse = await sut.handle()

    expect(httpResponse).toEqual({
      statusCode: 500,
      data: new ServerError(error)
    })
  })

  it('should return 204 if process succeeds', async () => {
    const httpResponse = await sut.handle()

    expect(httpResponse).toEqual({
      statusCode: 204,
      data: null
    })
  })
})
