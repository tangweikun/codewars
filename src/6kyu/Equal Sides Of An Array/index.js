export function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (sum(arr.slice(0, i)) === sum(arr.slice(i + 1))) return i
  }
  return -1
}

const sum = arr => arr.reduce((acc, x) => acc + x, 0)
