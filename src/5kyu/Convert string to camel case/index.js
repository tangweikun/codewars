export const toCamelCase = str =>
  str
    .split(/[_-]/)
    .map((x, i) => (i === 0 ? x : x.slice(0, 1).toUpperCase() + x.slice(1)))
    .join``
