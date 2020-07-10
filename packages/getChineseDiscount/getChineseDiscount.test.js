import { test } from '../../test/utils'
import getChineseDiscount from './getChineseDiscount'

test('getChineseDiscount', t => {
  t.is(getChineseDiscount(1), '')
  t.is(getChineseDiscount(0.75), 75)
  t.is(getChineseDiscount(0.7), 7)
})
