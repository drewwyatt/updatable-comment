import { setOutput } from '@actions/core'

enum Output {
  Id = 'id',
}

export const setId = (value: string) => setOutput(Output.Id, value)
