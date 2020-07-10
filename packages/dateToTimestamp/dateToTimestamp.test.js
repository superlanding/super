import { test } from '../../test/utils'
import dateToTimestamp from './dateToTimestamp'

test('dateToTimestamp', t => {
  const now = +new Date()
  const expected = parseInt(now / 1000, 10)
  t.is(dateToTimestamp(new Date(now)), expected)
})
