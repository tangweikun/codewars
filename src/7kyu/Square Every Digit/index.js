// export function squareDigits(num) {
//   return +String(num)
//     .split('')
//     .reduce((acc, x) => acc + x * x, '')
// }

// export const squareDigits = x => +`${x}`.replace(/./g, a => a * a)

export const squareDigits = x => +[...`${x}`].map(a => a * a).join``
