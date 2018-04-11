export function order(str) {
  return str
    .split(' ')
    .sort((x, y) => x.match(/\d+/g)[0] - y.match(/\d+/g)[0])
    .join(' ')
}
