// export function toWeirdCase(string) {
//   return string.replace(/(\w{1,2})/g, m => m[0].toUpperCase() + m.slice(1))
// }

export function toWeirdCase(string) {
  return string
    .split(' ')
    .map(str =>
      str.replace(
        /(.)/g,
        (x, _, i) => (i % 2 === 0 ? x.toUpperCase() : x.toLowerCase()),
      ),
    )
    .join(' ')
}
