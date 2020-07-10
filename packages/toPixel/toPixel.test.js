import { test } from '../../test/utils'
import toPixel from './toPixel'

test('toPixel', t => {
  t.is(toPixel(0), '0')
  t.is(toPixel(1), '1px')
  t.is(toPixel(-1), '-1px')
})
