"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = commaSeparate;

function commaSeparate(num) {
  return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
}