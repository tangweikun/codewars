export function duplicateEncode(word) {
  const lowercaseWord = word.toLowerCase()
  const hash = {}
  let res = ''
  for (let char of lowercaseWord) {
    hash[char] = ~~hash[char] + 1
  }
  for (let char of lowercaseWord) {
    if (hash[char] > 1) {
      res += ')'
    } else {
      res += '('
    }
  }
  return res
}
