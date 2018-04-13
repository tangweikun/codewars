export function digPow(n, p) {
  const res = String(n).split``.reduce(
    (sum, x, i) => sum + Math.pow(x, p + i),
    0,
  )
  return res % n ? -1 : res / n
}
