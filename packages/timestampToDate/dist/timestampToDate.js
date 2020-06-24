"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = timestampToDate;

function timestampToDate(timestamp) {
  return new Date(timestamp * 1000);
}