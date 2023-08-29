import { type Grade } from '@/domain/entities'

export interface SaveGrade {
  save: (grade: SaveGrade.Input) => Promise<void>
}

export namespace SaveGrade {
  export type Input = Grade
}

export interface GetPointsGrade {
  getPoints: (id: GetPointsGrade.Input) => Promise<GetPointsGrade.Output>
}

export namespace GetPointsGrade {
  export type Input = {
    id: string
  }

  export type Output = {
    points: number
  }
}
