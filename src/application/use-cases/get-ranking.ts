import { type EmitTCP } from '@/application/contracts/adapters'
import { type GetRankingStudent } from '@/application/contracts/repositories'

export class GetRankingUseCase {
  constructor (
    private readonly studentRepository: GetRankingStudent,
    private readonly socketio: EmitTCP
  ) { }

  async execute (): Promise<void> {
    const rank = await this.studentRepository.getRanking()
    this.socketio.emit({
      event: 'podium',
      data: rank
    })
  }
}
