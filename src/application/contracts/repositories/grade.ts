import { type Grade } from '@/domain/entities'

export interface SaveGrade {
  save: (grade: SaveGrade.Input) => Promise<void>
}

export namespace SaveGrade {
  export type Input = Grade
}
