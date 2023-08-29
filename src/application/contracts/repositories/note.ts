import { type Note } from '@/domain/entities'

export interface SaveNote {
  save: (note: SaveNote.Input) => Promise<void>
}

export namespace SaveNote {
  export type Input = Note
}

export interface GetPointsNote {
  getPoints: (id: GetPointsNote.Input) => Promise<GetPointsNote.Output>
}

export namespace GetPointsNote {
  export type Input = {
    id: string
  }

  export type Output = {
    points: number
  }
}
