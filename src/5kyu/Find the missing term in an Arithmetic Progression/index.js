export const findMissing = function(list) {
  return (
    (list[0] + list.slice(-1)[0]) * (list.length + 1) / 2 -
    list.reduce((sum, x) => sum + x, 0)
  )
}
