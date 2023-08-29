import { type Note } from '@/domain/entities'

export interface SaveNote {
  save: (note: SaveNote.Input) => Promise<void>
}

export namespace SaveNote {
  export type Input = Note
}
