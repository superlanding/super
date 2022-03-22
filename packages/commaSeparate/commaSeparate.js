export default function commaSeparate(num) {
  const values = String(num).split('.')
  const [whole, decimal] = values
  const negative = whole.startsWith('-')
  const hasDot = (values.length === 2)
  const formattedWhole = negative ? ('-' + addComma(whole.slice(1))) : addComma(whole)

  if (hasDot) {
    return formattedWhole + '.' + decimal
  }
  return formattedWhole
}

function addComma(str) {
  return str.replace(/.(?=(?:.{3})+$)/g, '$&,')
}
