export default function addPrefix(obj, prefix) {
  return Object.keys(obj)
    .reduce((o, key) => Object.assign({}, o, { [prefix + key]: obj[key] }), {})
}
