export function solution(n) {
  --n
  const c15 = Math.floor(n / 15)
  const c3 = Math.floor(n / 3) - c15
  const c5 = Math.floor(n / 5) - c15
  return [c3, c5, c15]
}
