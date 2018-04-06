export function digital_root(n) {
  if (n < 10) return n
  let sum = 0
  while (n > 9) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  return digital_root(sum + n)
}
