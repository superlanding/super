"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = fromChineseDiscount;

// 75 (折) -> 0.75
// 7 (折) -> 0.7
function fromChineseDiscount(discount) {
  if (discount === 0) {
    return 0;
  }

  if (discount < 10) {
    return discount / 10;
  }

  if (discount < 100) {
    return discount / 100;
  }

  throw new Error("Unable to handle discount: ".concat(discount));
}