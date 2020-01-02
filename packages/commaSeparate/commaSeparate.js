export default function commaSeparate(num) {
  return String(num).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}
