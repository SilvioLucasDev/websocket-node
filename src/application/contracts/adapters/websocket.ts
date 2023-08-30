export interface EmitTCP {
  emit: (input: EmitTCP.Input) => void
}

export namespace EmitTCP {
  export type Input = {
    event: string
    data: object
  }
}

export interface ListenTCP {
  listen: () => void
}
