import { test } from '../utils'
import commaSeparate from '../../packages/commaSeparate/commaSeparate.js'

test('commaSeparate', t => {

  t.is(commaSeparate(0), '0')
  t.is(commaSeparate(123), '123')
  t.is(commaSeparate(1234), '1,234')
  t.is(commaSeparate(1234567), '1,234,567')

  // decimal point
  t.is(commaSeparate(0.123), '0.123')
  t.is(commaSeparate(1000.123), '1,000.123')
})
