import { test } from '../../test/utils'
import commaSeparate from './commaSeparate'

test('commaSeparate', t => {

  t.is(commaSeparate(0), '0')
  t.is(commaSeparate(123), '123')
  t.is(commaSeparate(1234), '1,234')
  t.is(commaSeparate(1234567), '1,234,567')

  // negative
  t.is(commaSeparate(-100), '-100')

  // decimal point
  t.is(commaSeparate(0.123), '0.123')
  t.is(commaSeparate(1000.123), '1,000.123')
  t.is(commaSeparate(123456789.1234567), '123,456,789.1234567')

  // negative with decimal point
  t.is(commaSeparate(-12345), '-12,345')
})
