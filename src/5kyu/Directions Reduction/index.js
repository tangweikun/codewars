export function dirReduc(arr) {
  const hash = { NORTH: 1, SOUTH: -1, EAST: 10, WEST: -10 }
  let i = 0
  while (i < arr.length) {
    if (hash[arr[i]] + hash[arr[i + 1]] === 0) {
      arr.splice(i, 2)
      i -= 2
    } else {
      i++
    }
  }
  return arr
}
