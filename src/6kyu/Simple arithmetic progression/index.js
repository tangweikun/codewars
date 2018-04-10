// TODO: should find better solution

export function solve(arr) {
  let res = 0
  let distance = 1
  while (distance < (arr.slice(-1)[0] - arr[0]) / 2 + 1) {
    for (let i = 0; i < arr.length - 2; i++) {
      if (
        arr.includes(arr[i] + distance) &&
        arr.includes(arr[i] + distance * 2)
      )
        res++
    }
    distance++
  }

  return res
}
