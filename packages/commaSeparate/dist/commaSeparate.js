"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = commaSeparate;

function commaSeparate(num) {
  var values = String(num).split('.');
  return values[0].replace(/.(?=(?:.{3})+$)/g, '$&,') + (values.length == 2 ? '.' + values[1] : '');
}