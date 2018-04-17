export const findMissing = function(list) {
  const step = (list[list.length - 1] - list[0]) / list.length
  return (
    list.filter(function(val, index) {
      return val !== list[0] + index * step
    })[0] - step
  )
}
