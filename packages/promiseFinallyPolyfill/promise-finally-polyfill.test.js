import { test } from '../../test/utils'

test('promise-finally-polyfill', t => {

  require('./promise-finally-polyfill')

  // Promise.prototype.finally should be a polyfilled function
  t.is(typeof Promise.prototype.finally, 'function')

  // shouldn't be native
  t.true(! Promise.prototype.finally.toString().includes('native code'))
})
