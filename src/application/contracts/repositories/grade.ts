import { type Grade } from '@/domain/entities'

export interface SaveGrade {
  save: (grade: SaveGrade.Input) => Promise<void>
}

export namespace SaveGrade {
  export type Input = Grade
}

export interface GetRankingGrade {
  getRanking: () => Promise<GetRankingGrade.Output>
}

export namespace GetRankingGrade {
  export type Output = {
    rankStudentsBySchool: Record<string, object[]>
    rankStudents: object[]
  }
}
