export function sumDigPow(a, b) {
  let res = []
  for (let i = a; i <= b; i++) {
    if (isSumDigPowNumber(i)) res.push(i)
  }

  return res
}

const isSumDigPowNumber = num =>
  (num + '').split('').reduce((acc, n, i) => acc + Math.pow(n, i + 1), 0) ===
  num
