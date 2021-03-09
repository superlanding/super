import { test } from '../../test/utils'
import extend from './extend'

test('extend', t => {

  t.deepEqual(extend({ test: 1 }, { test: 2 }), { test: 2 })
})
