export function firstNonRepeatingLetter(s) {
  for (let c of s) {
    if (s.match(new RegExp(c, 'gi')).length === 1) return c
  }
  return ''
}
