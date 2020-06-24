"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = dateToTimestamp;

function dateToTimestamp(date) {
  return parseInt(+date / 1000, 10);
}