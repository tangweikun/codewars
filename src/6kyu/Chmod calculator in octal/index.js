export function chmodCalculator(perm) {
  String.prototype.reduce = Array.prototype.reduce
  const res = { user: 0, group: 0, other: 0 }
  const hash = { r: 4, w: 2, x: 1, '-': 0 }
  Object.keys(perm).forEach(key => {
    res[key] = perm[key].reduce((acc, x) => acc + ~~hash[x], 0)
  })
  return `${res.user}${res.group}${res.other}`
}
