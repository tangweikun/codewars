// HELP:

export function snail(array) {
  let res = []
  while (array.length) {
    res.push(...array.shift())
    array.map(row => res.push(row.pop()))
    array.reverse().map(row => row.reverse())
  }
  return res
}
