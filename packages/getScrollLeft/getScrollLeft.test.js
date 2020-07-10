import { test } from '../../test/utils'
import getScrollLeft from './getScrollLeft'

test('getScrollLeft', t => {
  t.is(getScrollLeft(), 0)
})
