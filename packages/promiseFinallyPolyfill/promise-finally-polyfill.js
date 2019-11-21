// native finally function will fail on mobile safari / chrome
// e.g. [Vue warn] |this| is not a promise
// always use polyfill version to ensure consistent behavior
// https://stackoverflow.com/questions/32362057/es6-promise-settled-callback/32362233#32362233
Promise.prototype.finally = function(cb) {
  const res = () => this
  const fin = () => Promise.resolve(cb()).then(res)
  return this.then(fin, fin)
}
