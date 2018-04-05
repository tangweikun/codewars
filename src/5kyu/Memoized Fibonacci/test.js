import { fibonacci } from '.'

test('Memoized Fibonacci', () => {
  expect(fibonacci(50)).toBe(12586269025)
})

test('Memoized Fibonacci', () => {
  expect(fibonacci(80)).toBe(23416728348467684)
})

test('Memoized Fibonacci', () => {
  expect(fibonacci(90)).toBe(2880067194370816000)
})

test('Memoized Fibonacci', () => {
  expect(fibonacci(100)).toBe(354224848179262000000)
})

test('Memoized Fibonacci', () => {
  expect(fibonacci(102)).toBe(927372692193079200000)
})
