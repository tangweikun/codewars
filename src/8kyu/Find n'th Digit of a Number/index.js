// export const findDigit = (num, nth) => {
//   if (nth <= 0) return -1
//   let x = Math.abs(num)
//   while (nth-- > 1) x = ~~(x / 10)
//   return x % 10
// }

// export const findDigit = (num, nth) => {
//   if (nth <= 0) return -1
//   if (nth === 1) return Math.abs(~~num % 10)
//   return findDigit(num / 10, nth - 1)
// }

export const findDigit = (n, k) =>
  k <= 0 ? -1 : ~~Math.abs((n / 10 ** (k - 1)) % 10)
