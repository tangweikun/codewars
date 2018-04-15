export const orderWeight = str =>
  str
    .split(' ')
    .sort((a, b) => sum(a) - sum(b) || a.localeCompare(b))
    .join(' ')

const sum = str => str.split``.reduce((sum, x) => sum + +x, 0)
