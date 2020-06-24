"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toPixel;

function toPixel(value) {
  return value === 0 ? '0' : "".concat(value, "px");
}