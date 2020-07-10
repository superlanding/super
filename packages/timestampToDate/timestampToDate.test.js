import { test } from '../../test/utils'
import timestampToDate from './timestampToDate'

test('timestampToDate', t => {
  t.deepEqual(timestampToDate(1594364706), new Date(1594364706 * 1000))
})
