export default function mapDispatch(funcs) {
  const { store } = this
  return Object.keys(funcs)
    .reduce((obj, name) => {
      obj[name] = function(...args) {
        const action = funcs[name](...args)
        action._id = Symbol()
        return store.dispatch(action)
      }
      return obj
    }, this)
}
