import { test } from '../../test/utils'
import getApStr from './getApStr'

test('getApStr', t => {
  const res = getApStr({
    qty: 1,         // initial base number
    interval: 2,    // number to add each time
    n: 3,           // add how many times
    separator: '; '
  })

  // 1 + 2 -> 3
  // 3 + 2 -> 5
  // 5 + 2 -> 7
  t.deepEqual(res, '3; 5; 7')
})
