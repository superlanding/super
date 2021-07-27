import { test } from '../../test/utils'
import getChineseDiscount from './getChineseDiscount'

test('getChineseDiscount', t => {
  t.is(getChineseDiscount(1), '')
  t.is(getChineseDiscount(0.75), '75')
  t.is(getChineseDiscount(0.7), '7')
  t.is(getChineseDiscount(0.57), '57')
  t.is(getChineseDiscount(0.572), '572')
})
