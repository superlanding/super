import { test } from '../../test/utils'

test('promise-finally-polyfill', t => {

  require('./promise-finally-polyfill')

  // Promise.prototype.finally should be a polyfilled function
  t.is(typeof Promise.prototype.finally, 'function')

  // shouldn't be native
  t.true(! Promise.prototype.finally.toString().includes('native code'))

  const doSomething = (success) => {
    return new Promise((resolve, reject) => {
      if (success) {
        return resolve()
      }
      reject()
    })
  }

  let calledThen = false

  doSomething(true)
    .then(() => {
      calledThen = true
    })
    .finally(() => {
      t.true(calledThen)
    })
})
