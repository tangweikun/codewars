export const chmodCalculator = perm =>
  [perm.user, perm.group, perm.other].map(
    x => (x ? parseInt(x.replace(/./g, c => (c === '-' ? 0 : 1)), 2) : 0),
  ).join``
