import { test } from '../../test/utils'
import getApStr from './getApStr'

test('getApStr', t => {
  const res = getApStr({
    qty: 1,
    interval: 2,
    n: 3,
    separator: '; '
  })

  // 1 + 2 -> 3
  // 3 + 2 -> 5
  // 5 + 2 -> 7
  t.deepEqual(res, '3; 5; 7')
})

test('getApStr without n and separator', t => {
  const res = getApStr({
    qty: 1,
    interval: 2
  })
  // default n is 4
  // separator is ,
  t.deepEqual(res, '3, 5, 7, 9')
})
