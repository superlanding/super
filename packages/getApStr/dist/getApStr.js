"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getApStr;

var _lodash = _interopRequireDefault(require("lodash.range"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// https://en.wikipedia.org/wiki/Arithmetic_progression
//
// qty: initial base value
// interval: number to add each time
// n: how many times to add
function getApStr(_ref) {
  var qty = _ref.qty,
      interval = _ref.interval,
      n = _ref.n,
      separator = _ref.separator;
  return (0, _lodash["default"])(0, n || 4).map(function (i) {
    return qty + (i + 1) * interval;
  }).join(separator || ', ');
}