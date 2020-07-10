import { test } from '../../test/utils'
import mapDispatch from './mapDispatch'

test('mapDispatch', t => {

  const funcs = {
    hello() {
      return {
        type: 'type hello'
      }
    }
  }

  function Context() {
    this.store = {
      dispatch(action) {
        t.is(action.type, 'type hello')
        t.is(typeof action._id, 'symbol')
      }
    }
  }
  const res = mapDispatch.call(new Context(), funcs)
  res.hello()
})
