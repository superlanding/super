export default function getScrollLeft() {
  const doc = document.documentElement
  return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
}
