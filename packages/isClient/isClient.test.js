import { test } from '../../test/utils'
import isClient from './isClient'

test('isClient', t => {
  // we have jsdom's window in test env
  // isClient should be true
  t.true(isClient)
})
