import { test } from '../../test/utils'
import toPromise, { clearTimer } from './toPromise'

const promiseTimeout = (fn, duration) => {
  let timer
  const promise = new Promise((resolve, reject) => {
    timer = setTimeout(() => {
      fn()
      resolve()
    }, duration)
  })
  return { promise, timer }
}

test('clearTimer', async t => {
  const { timer, promise } = promiseTimeout(() => t.fail(), 0)
  const config = { timer }
  clearTimer(config)
  const res = promiseTimeout(() => t.pass(), 300)
  await res.promise
})

test('toPromise: regular action', t => {
  const store = {
    dispatch() {
    }
  }
  const action = {
    type: 'TEST',
  }
  const next = a => t.deepEqual(a, action)
  toPromise(store)(next)(action)
})

test('toPromise: async action', t => {
  const store = {
    dispatch() {
    }
  }
  const next = () => {}
  const asyncAction = {
    type: 'TEST',
    async: {
      resolve: 'SUCCESS',
      reject: 'FAIL'
    }
  }
  const res = toPromise(store)(next)(asyncAction)
  t.true(res instanceof Promise)
})

test('toPromise: async action with loading', t => {
  return new Promise(resolve => {

    const next = () => {}
    const asyncAction = {
      _id: 'secret',
      type: 'TEST',
      async: {
        resolve: 'SUCCESS',
        reject: 'FAIL',
        loading: 'LOADING'
      }
    }
    const store = {
      dispatch(action) {
        t.is(action.type,  asyncAction.async.loading)
      }
    }
    const nextFunc = toPromise(store)(next)
    const p = nextFunc(asyncAction)
    t.true(p instanceof Promise)

    setTimeout(() => {
      nextFunc({
        _id: asyncAction._id,
        type: asyncAction.async.resolve
      })
    }, 1000)

    p.then(() => resolve())
  })
})

test('toPromise: reject async action', t => {
  return new Promise(resolve => {

    const next = () => {}
    const asyncAction = {
      _id: 'secret',
      type: 'TEST',
      async: {
        resolve: 'SUCCESS',
        reject: 'FAIL'
      }
    }
    const store = {
      dispatch(action) {
      }
    }
    const nextFunc = toPromise(store)(next)
    const p = nextFunc(asyncAction)
    t.true(p instanceof Promise)

    nextFunc({
      _id: asyncAction._id,
      type: asyncAction.async.reject
    })

    p.catch(() => resolve())
  })
})
