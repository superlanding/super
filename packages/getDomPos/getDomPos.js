export default function getDomPos(dom) {
  let x = 0
  let y = 0
  while (dom) {
    x += dom.offsetLeft - dom.scrollLeft + dom.clientLeft
    y += dom.offsetTop - dom.scrollLeft + dom.clientTop
    dom = dom.offsetParent
  }
  return { x, y }
}
