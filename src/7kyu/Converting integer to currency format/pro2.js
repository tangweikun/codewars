export function toCurrency(price) {
  return (price + '').split``.reverse``.map(
    (x, i) => ((i + 1) % 3 === 0 ? ',' + x : x),
  ).reverse``.join``.replace(/^,/, '')
}
