export const uniqueInOrder = iterable =>
  [...iterable].filter((a, i) => a !== iterable[i - 1])
