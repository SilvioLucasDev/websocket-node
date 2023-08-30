export interface OnHTTP {
  on: (input: OnHTTP.Input) => void
}

export namespace OnHTTP {
  export type Input = {
    method: string
    url: string
    callback: (params: object, body: string) => Promise<{ statusCode: number, data: any }>
  }
}

export interface ListenHTTP {
  listen: () => void
}
