export function longestSequence(n) {
  let R = 1

  while (R <= Math.floor(Math.sqrt(n))) {
    let res = []
    let x = R
    let sum = 0
    while (sum < n && x > 0) {
      sum += x * x
      res.unshift(x)
      if (sum === n) return res
      x--
    }
    R++
  }

  return []
}
