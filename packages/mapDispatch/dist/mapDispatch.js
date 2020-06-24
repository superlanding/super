"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = mapDispatch;

function mapDispatch(funcs) {
  var store = this.store;
  return Object.keys(funcs).reduce(function (obj, name) {
    obj[name] = function () {
      var action = funcs[name].apply(funcs, arguments);
      action._id = Symbol();
      return store.dispatch(action);
    };

    return obj;
  }, this);
}