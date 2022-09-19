import { getInput } from '@actions/core'

enum Input {
  Comment = 'comment',
  Id = 'id',
  GithubToken = 'github-token',
  Strategy = 'strategy',
}

export enum Strategy {
  Update = 'update',
  Delete = 'delete',
}

function assertIsStrategy(input: string): asserts input is Strategy {
  if (![Strategy.Delete, Strategy.Update].includes(input as Strategy)) {
    throw new Error(`found invalud inputs.strategy value of "${input}"
    allowed values are: ${[Object.values(Strategy).join(' | ')]}
    `)
  }
}

const parseStrategy = (input: string): Strategy => {
  const lowercased = input.toLowerCase()
  assertIsStrategy(lowercased)
  return lowercased
}

const idInput = getInput(Input.Id)

export const comment = getInput(Input.Comment, { required: true })
export const id = idInput ? idInput : null
export const githubToken = getInput(Input.GithubToken, { required: true })
export const strategy = parseStrategy(
  getInput(Input.Strategy, { required: true, trimWhitespace: true }),
)
