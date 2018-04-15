export function productFib(prod) {
  let [a, b] = [0, 1]
  while (a * b < prod) [a, b] = [b, a + b]
  return [a, b, a * b === prod]
}
