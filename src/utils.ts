import * as core from '@actions/core'
import { v5 as uuid } from 'uuid'

export const generateId = () => {
  const id = uuid('https://github.com/drewwyatt/updatable-comment/', uuid.URL)
  core.info(`generating uuid for comment... ${id}`)
  return id
}
