export const countBits = n => {
  const res = n.toString(2).match(/1/g)
  return res ? res.length : 0
}
