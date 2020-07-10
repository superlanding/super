import { test } from '../../test/utils'
import getDomPos from './getDomPos'

test('getDomPos', t => {

  const div = document.createElement('div')
  document.body.append(div)

  // Expected values are jsdom initial values
  t.deepEqual(getDomPos(div), { x: 0, y: 0 })
})
