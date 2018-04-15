export function scramble(str1, str2) {
  const map = {}
  for (let x of str1) map[x] ? map[x]++ : (map[x] = 1)
  for (let y of str2) {
    if (!map[y]) return false
    map[y]--
  }

  return true
}
