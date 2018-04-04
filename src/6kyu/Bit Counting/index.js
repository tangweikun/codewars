// export const countBits = n => {
//   const res = n.toString(2).match(/1/g)
//   return res ? res.length : 0
// }

// export const countBits = n => n.toString(2).replace(/0/g, '').length

export const countBits = function(n) {
  let res = 0
  while (n > 0) {
    res += n & 1
    n >>= 1
  }
  return res
}
