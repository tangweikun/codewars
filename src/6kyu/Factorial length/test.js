import { count } from '.'

test('Factorial length', () => {
  expect(count(5)).toBe(3)
})

test('Factorial length', () => {
  expect(count(8)).toBe(5)
})

test('Factorial length', () => {
  expect(count(15)).toBe(13)
})

test('Factorial length', () => {
  expect(count(135)).toBe(231)
})

test('Factorial length', () => {
  expect(count(13335)).toBe(49218)
})
