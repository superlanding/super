"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getChineseDiscount;

// >= 1 -> '' 沒折扣就不顯示
// 0.75 -> 75 (折)
// 0.7 -> 7 (折)
function getChineseDiscount(rate) {
  if (rate >= 1) {
    return '';
  }

  var num = parseInt(rate * 100, 10);
  return parseInt(String(num).replace(/0+$/, ''), 10);
}