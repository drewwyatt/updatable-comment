import { getInput } from '@actions/core'

enum Input {
  Comment = 'comment',
  Id = 'id',
  GithubToken = 'github-token',
}

export const comment = getInput(Input.Comment, { required: true })
export const id = getInput(Input.Id)
export const githubToken = getInput(Input.GithubToken, { required: true })
