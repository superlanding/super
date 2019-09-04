export default function getScrollTop() {
  const doc = document.documentElement
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
}
