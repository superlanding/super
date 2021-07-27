// >= 1 -> '' 沒折扣就不顯示
// 0.75 -> 75 (折)
// 0.7 -> 7 (折)
// 0.57 -> 57 (折)
export default function getChineseDiscount(rate) {
  const [, discount] = String(rate).match(/^0.(\d+)$/) || []
  return discount || ''
}
