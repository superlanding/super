export default function getDomPos(dom) {
  const rect = dom.getBoundingClientRect()
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  return {
    x: rect.left + scrollLeft,
    y: rect.top + scrollTop
  }
}
