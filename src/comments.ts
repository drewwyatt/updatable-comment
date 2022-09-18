import * as github from '@actions/github'

export type Comment = NonNullable<Awaited<ReturnType<typeof findWithId>>>
type Octokit = ReturnType<typeof github['getOctokit']>

const {
  issue: { number: issue_number },
  repo: { repo, owner },
} = github.context

const toCommentBody = (id: string, body: string) => [`<!--${id}-->`, body].join('\n')

export const findWithId = async (octokit: Octokit, id: string) => {
  const response = await octokit.rest.issues.listComments({
    repo,
    owner,
    issue_number,
  })

  return response.data.find(comment => comment.body?.includes(id))
}

export const deleteComment = async (octokit: Octokit, comment: Comment) =>
  octokit.rest.issues.deleteComment({
    repo,
    owner,
    comment_id: comment.id,
  })

export const createComment = async (octokit: Octokit, id: string, body: string) =>
  octokit.rest.issues.createComment({
    repo,
    owner,
    issue_number,
    body: toCommentBody(id, body),
  })

export const updateComment = async (
  octokit: Octokit,
  comment: Comment,
  id: string,
  body: string,
) =>
  octokit.rest.issues.updateComment({
    repo,
    owner,
    comment_id: comment.id,
    body: toCommentBody(id, body),
  })
