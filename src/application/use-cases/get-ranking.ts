import { type EmitTCP } from '@/application/contracts/adapters'
import { type GetRankingStudent } from '@/application/contracts/repositories'

export class GetRankingUseCase {
  constructor (
    private readonly studentRepository: GetRankingStudent,
    private readonly socketio: EmitTCP
  ) {}

  async execute (): Promise<void> {
    const rank = await this.studentRepository.getRanking()
    console.log(rank)
    // this.socketio.emit({
    //   event: 'podium',
    //   data: {
    //     schoolData: rankByData,
    //     schoolTech: rankByTech,
    //     schoolProduct: rankByProduct,
    //     podium: rankPodium
    //   }
    // })
  }
}
