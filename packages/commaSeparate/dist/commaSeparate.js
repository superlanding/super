"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = commaSeparate;

function commaSeparate(num) {
  return String(num).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
}