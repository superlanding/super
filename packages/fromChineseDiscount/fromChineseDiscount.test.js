import { test } from '../../test/utils'
import fromChineseDiscount from './fromChineseDiscount'

test('fromChineseDiscount', t => {
  t.is(fromChineseDiscount(0), 0)
  t.is(fromChineseDiscount(3), 0.3)
  t.is(fromChineseDiscount(75), 0.75)
  t.throws(() => fromChineseDiscount(200))
})
