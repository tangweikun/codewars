export function squareDigits(num) {
  return +String(num)
    .split('')
    .reduce((acc, x) => acc + x * x, '')
}
