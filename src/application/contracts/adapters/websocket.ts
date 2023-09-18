export interface EmitWebSocket {
  emit: (input: EmitWebSocket.Input) => void
}

export namespace EmitWebSocket {
  export type Input = {
    event: string
    data: object
  }
}

export interface ListenWebSocket {
  listen: () => void
}
