export function tickets(peopleInLine) {
  const hash = { 25: 0, 50: 0 }
  for (let money of peopleInLine) {
    if (money === 25) hash[25]++
    if (money === 50) {
      hash[50]++
      hash[25]--
    }
    if (money === 100) {
      if (hash[50] > 0) {
        hash[50]--
        hash[25]--
      } else {
        hash[25] -= 3
      }
    }
    if (hash[25] < 0 || hash[50] < 0) return false
  }
  return true
}
