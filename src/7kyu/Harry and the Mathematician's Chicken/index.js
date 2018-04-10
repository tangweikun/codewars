export function chickenOptions(n) {
  if (typeof n !== 'number') return [0]
  const hash = [0, 3, 6, 9, 10, 12, 13, 15, 16]
  const res = []
  while (n >= 0) {
    if (n >= 18) res.unshift(n)
    else if (hash.includes(n)) res.unshift(n)
    n--
  }
  return res
}
