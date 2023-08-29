export interface GetStudent {
  get: (input: GetStudent.Input) => Promise<GetStudent.Output>
}

export namespace GetStudent {
  export type Input = {
    id: string
  }

  export type Output = {
    id: string
    name: string
  } | undefined
}
