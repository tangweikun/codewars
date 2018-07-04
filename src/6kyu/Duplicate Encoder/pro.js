export function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split('')
    .map(function(a, _, w) {
      return w.indexOf(a) === w.lastIndexOf(a) ? '(' : ')'
    })
    .join('')
}
