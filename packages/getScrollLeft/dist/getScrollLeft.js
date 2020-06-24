"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getScrollLeft;

function getScrollLeft() {
  var doc = document.documentElement;
  return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
}