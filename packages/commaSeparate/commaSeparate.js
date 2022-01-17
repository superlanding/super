export default function commaSeparate(num) {
  return String(num).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}
