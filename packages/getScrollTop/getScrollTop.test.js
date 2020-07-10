import { test } from '../../test/utils'
import getScrollTop from './getScrollTop'

test('getScrollTop', t => {
  t.is(getScrollTop(), 0)
})
