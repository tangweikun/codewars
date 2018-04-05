// export const fibonacci = n => {
//   if (n < 2) return n
//   const cache = [0, 1]
//   let i = 1
//   while (i++ < n) {
//     cache.push(cache[i - 1] + cache[i - 2])
//   }
//   return cache.pop()
// }

export const fibonacci = n =>
  Array(n)
    .fill()
    .reduce(([a, b]) => [b, a + b], [0, 1])[0]
