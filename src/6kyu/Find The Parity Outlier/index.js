export const findOutlier = arr =>
  arr.slice(0, 3).reduce((acc, x) => acc + Math.abs(x % 2), 0) >= 2
    ? arr.find(x => x % 2 === 0)
    : arr.find(x => x % 2 !== 0)
