"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getScrollTop;

function getScrollTop() {
  var doc = document.documentElement;
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
}