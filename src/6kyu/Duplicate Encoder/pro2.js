export function duplicateEncode(word) {
  word = word.toLowerCase()
  return word
    .toLowerCase()
    .replace(/./g, m => (word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')'))
}
