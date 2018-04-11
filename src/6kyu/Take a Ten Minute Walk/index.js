export const isValidWalk = walk =>
  walk.length === 10 &&
  walk.reduce((acc, x) => acc + { e: 1, w: -1, s: 100, n: -100 }[x], 0) === 0
