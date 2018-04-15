export const orderWeight = str =>
  str
    .split(' ')
    .sort(comp)
    .join(' ')

const sum = str => str.split``.reduce((sum, x) => sum + +x, 0)

function comp(a, b) {
  const sumA = sum(a)
  const sumB = sum(b)
  return sumA === sumB ? a.localeCompare(b) : sumA - sumB
}
