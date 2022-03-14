export default function commaSeparate(num) {
  const values = String(num).split('.')
  return values[0].replace(/.(?=(?:.{3})+$)/g, '$&,') + ( values.length == 2 ? '.' + values[1] : '' )
}
