import { type EmitTCP } from '@/application/contracts/adapters'
import { type GetRankingStudent } from '@/application/contracts/repositories'

export class GetRankingUseCase {
  constructor (
    private readonly studentRepository: GetRankingStudent,
    private readonly websocket: EmitTCP
  ) { }

  async execute (): Promise<void> {
    const rank = await this.studentRepository.getRanking()
    this.websocket.emit({
      event: 'podium',
      data: rank
    })
  }
}
