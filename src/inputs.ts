import { getInput } from '@actions/core'

enum Input {
  Comment = 'comment',
  Id = 'id',
  Token = 'token',
}

export const comment = getInput(Input.Comment, { required: true })
export const id = getInput(Input.Id)
export const token = getInput(Input.Token, { required: true })
