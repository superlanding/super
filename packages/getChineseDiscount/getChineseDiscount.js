// 0.75 -> 75 (折)
// 0.7 -> 7 (折)
export default function getChineseDiscount(rate) {
  const num = parseInt(rate * 100, 10)
  return parseInt(String(num).replace(/0+$/, ''), 10)
}
