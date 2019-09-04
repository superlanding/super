import range from 'lodash.range'

// https://en.wikipedia.org/wiki/Arithmetic_progression
export default function getApStr({ qty, interval, n, separator }) {
  return range(0, (n || 4)).map(i => qty + ((i + 1) * interval))
    .join(separator || ', ')
}
