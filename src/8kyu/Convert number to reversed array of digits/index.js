export function digitize(n) {
  return ('' + n).split('').reduce((acc, x) => [+x, ...acc], [])
  // return (n + '').split('').map(Number).reverse()
  // return Array.from(String(n), Number).reverse()
  // return [...String(n)].map(Number).reverse()
}
