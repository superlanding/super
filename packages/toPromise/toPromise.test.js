import { test } from '../../test/utils'
import toPromise from './toPromise'

test('toPromise', t => {
  const store = {
    dispatch() {
    }
  }
  const next = () => {}

  const asyncAction = {
    type: 'test action',
    async: {
      resolve: 'success',
      reject: 'fail'
    }
  }
  const res1 = toPromise(store)(next)(asyncAction)

  t.true(res1 instanceof Promise)

  const action = {
    type: 'test action',
  }
  const res2 = toPromise(store)(next)(action)
  t.false(res2 instanceof Promise)
})
