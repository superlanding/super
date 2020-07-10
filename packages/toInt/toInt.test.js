import { test } from '../../test/utils'
import toInt from './toInt'

test('toInt', t => {
  t.is(toInt('123'), 123)
})
