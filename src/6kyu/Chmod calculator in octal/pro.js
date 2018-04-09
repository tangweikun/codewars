export const chmodCalculator = perm =>
  [perm.user, perm.group, perm.other].map(item =>
    Object.keys(item || {}).reduce(
      (acc, x) => acc + { r: 4, w: 2, x: 1, '-': 0 }[item[x]],
      0,
    ),
  ).join``
