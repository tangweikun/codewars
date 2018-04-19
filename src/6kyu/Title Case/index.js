export function titleCase(title, minorWords = '') {
  const minorWordsArr = minorWords.toLowerCase().split(' ')
  const arr = title
    .toLowerCase()
    .split(' ')
    .map(
      x =>
        minorWordsArr.includes(x) ? x : x.replace(/./, x => x.toUpperCase()),
    )

  return arr.join(' ').replace(/./, x => x.toUpperCase())
}
