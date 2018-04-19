export function narcissistic(value) {
  return String(value).split``.reduce(
    (sum, x) => sum + Math.pow(x, String(value).length),
    0,
  ) === value
    ? true
    : false
}
