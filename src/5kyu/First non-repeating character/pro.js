export function firstNonRepeatingLetter(s) {
  const t = s.toLowerCase()
  for (let i = 0; i < t.length; i++) {
    if (t.indexOf(t[i]) === t.lastIndexOf(t[i])) return s[i]
  }
  return ''
}
