// export const inAscOrder = arr =>
//   arr.every((_, i) => i === 0 || arr[i] >= arr[i - 1])

// export const inAscOrder = arr => arr.slice(1).every((x, i) => x >= arr[i])

export const inAscOrder = arr =>
  arr.every((x, i) => (i ? x >= arr[i - 1] : true))
