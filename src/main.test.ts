import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import { test } from '@jest/globals'

test('test runs', () => {
  process.env['GITHUB_REPOSITORY'] = 'drewwyatt/updatable-comment'
  process.env['INPUT_COMMENT'] = 'lol'
  process.env['INPUT_TOKEN'] = 'wow'

  // TODO: use mock-service-worker or something here
  // const np = process.execPath
  // const ip = path.join(__dirname, '..', 'lib', 'main.js')
  // const options: cp.ExecFileSyncOptions = {
  //   env: process.env,
  // }

  // console.log(cp.execFileSync(np, [ip], options).toString())
})
