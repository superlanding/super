export const clearTimer = config => {
  if (config.timer) {
    clearTimeout(config.timer)
  }
}

const toPromise = store => next => {

  const record = new Map()

  return action => {

    const id = action._id

    if (action.async) {
      const promise = new Promise((resolve, reject) => {
        const config = { ...action.async }
        if (config.loading) {
          config.timer = setTimeout(() => {
            config.timer = null
            store.dispatch({ type: config.loading })
          }, config.wait || 800)
        }
        if (config.resolve) {
          config.resolveFunc = resolve
        }
        if (config.reject) {
          config.rejectFunc = reject
        }
        record.set(id, config)
      })
      next(action)
      return promise
    }
    const res = next(action)
    const config = record.get(id)

    if (config) {
      if (config.resolve === action.type) {
        clearTimer(config)
        config.resolveFunc(action)
        record.delete(id)
      }
      else if (config.reject === action.type) {
        clearTimer(config)
        config.rejectFunc(action)
        record.delete(id)
      }
    }
    return res
  }
}

export default toPromise
