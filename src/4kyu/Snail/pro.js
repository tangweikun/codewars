// HELP:

export function snail(array) {
  let res
  while (array.length) {
    res = res ? res.concat(array.shift()) : array.shift() // Steal the first row.

    for (let i = 0; i < array.length; i++) res.push(array[i].pop()) // Steal the right items.

    res = res.concat((array.pop() || []).reverse()) // Steal the bottom row.

    for (let i = array.length - 1; i >= 0; i--) res.push(array[i].shift()) // Steal the left items.
  }

  return res
}
