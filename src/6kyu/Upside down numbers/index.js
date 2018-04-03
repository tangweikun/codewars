// export function solve(x, y) {
//   String.prototype.map = Array.prototype.map
//   const flip = s =>
//     s
//       .map(v => '01____9_86'[v])
//       .reverse()
//       .join('')

//   return Array.from({ length: y - x }, (_, i) => String(x + i)).filter(
//     m => m === flip(m),
//   ).length
// }

export const solve = (x, y) =>
  [...Array(y - x).keys()].filter(
    n =>
      (n + x + '')
        .split('')
        .reverse()
        .map(n => [0, 1, , , , , 9, , 8, 6][n])
        .join('') ===
      n + x + '',
  ).length
