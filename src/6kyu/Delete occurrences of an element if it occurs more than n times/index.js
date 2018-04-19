export function deleteNth(arr, n) {
  let count = {}
  return arr.filter(x => (count[x] = ~~count[x] + 1) && count[x] <= n)
}
