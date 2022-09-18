import * as core from '@actions/core'
import * as github from '@actions/github'

import * as inputs from './inputs'
import * as outputs from './outputs'
import { createComment, deleteComment, findWithId } from './comments'
import { generateId } from './utils'

const run = async () => {
  try {
    core.debug('Creating octokit...')
    const octokit = github.getOctokit(inputs.githubToken)

    const id = inputs.id ?? generateId()
    core.debug(`Comment id: "${id}"`)

    core.info('Checking for previous comments...')
    const prevComment = await findWithId(octokit, id)
    if (prevComment) {
      core.info(`Found previous comment: ${prevComment.id}`)
      core.info('Deleting previous comment...')
      await deleteComment(octokit, prevComment)
      core.info('Recreating...')
      await createComment(octokit, id, inputs.comment)
    } else {
      core.info('No previous comment found, creating...')
      await createComment(octokit, id, inputs.comment)
    }

    outputs.setId(id)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
