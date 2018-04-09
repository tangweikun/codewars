export const sc = array =>
  array
    .sort((x, y) => x - y)
    .reduce(
      (acc, x, i) =>
        i % 2 ? [acc[0], [x, ...acc[1]]] : [[...acc[0], x], acc[1]],
      [[], []],
    )
    .reduce((res, cur) => res.concat(cur), [])
