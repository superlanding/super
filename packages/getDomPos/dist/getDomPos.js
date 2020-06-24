"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDomPos;

function getDomPos(dom) {
  var rect = dom.getBoundingClientRect();
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    x: rect.left + scrollLeft,
    y: rect.top + scrollTop
  };
}