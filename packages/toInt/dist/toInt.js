"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toInt;

function toInt(value) {
  var radix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  return parseInt(value, radix);
}