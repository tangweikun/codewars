// export const count = n =>
//   Math.ceil(
//     n * Math.log10(n / Math.exp(1)) + 1 / 2 * Math.log10(2 * Math.PI * n),
//   )

// export const count = n =>
//   ~~((Math.log(2 * Math.PI * n) / 2 + n * (Math.log(n) - 1)) / Math.LN10) + 1

export function count(n) {
  let value = 0
  while (n >= 2) {
    value += Math.log10(n)
    n--
  }
  return ~~value + 1
}
