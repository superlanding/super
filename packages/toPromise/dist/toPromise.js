"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.clearTimer = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var clearTimer = function clearTimer(config) {
  if (config.timer) {
    clearTimeout(config.timer);
  }
};

exports.clearTimer = clearTimer;

var toPromise = function toPromise(store) {
  return function (next) {
    var record = new Map();
    return function (action) {
      var id = action._id;

      if (action.async) {
        var promise = new Promise(function (resolve, reject) {
          var config = _objectSpread({}, action.async);

          if (config.loading) {
            config.timer = setTimeout(function () {
              config.timer = null;
              store.dispatch({
                type: config.loading
              });
            }, config.wait || 800);
          }

          if (config.resolve) {
            config.resolveFunc = resolve;
          }

          if (config.reject) {
            config.rejectFunc = reject;
          }

          record.set(id, config);
        });
        next(action);
        return promise;
      }

      var res = next(action);
      var config = record.get(id);

      if (config) {
        if (config.resolve === action.type) {
          clearTimer(config);
          config.resolveFunc(action);
          record["delete"](id);
        } else if (config.reject === action.type) {
          clearTimer(config);
          config.rejectFunc(action);
          record["delete"](id);
        }
      }

      return res;
    };
  };
};

var _default = toPromise;
exports["default"] = _default;