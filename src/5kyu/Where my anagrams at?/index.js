export function anagrams(word, words) {
  const sortedWord = word.split``.sort().join``
  return words.filter(x => x.split``.sort().join`` === sortedWord)
}
