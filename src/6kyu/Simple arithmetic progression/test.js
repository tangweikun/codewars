import { solve } from '.'

test('Simple arithmetic progression', () => {
  expect(solve([1, 2, 3, 4, 5])).toBe(4)
})

test('Simple arithmetic progression', () => {
  expect(solve([1, 12, 23, 34, 45])).toBe(4)
})

test('Simple arithmetic progression', () => {
  expect(solve([1, 3, 5, 9, 12])).toBe(2)
})

test('Simple arithmetic progression', () => {
  expect(solve([1, 2, 3, 5, 7, 9])).toBe(5)
})

test('Simple arithmetic progression', () => {
  expect(solve([0, 5, 8, 9, 11, 13, 14, 16, 17, 19])).toBe(10)
})

test('Simple arithmetic progression', () => {
  expect(solve([0, 1, 2, 3, 5, 6, 7, 11, 13, 15, 17, 19])).toBe(17)
})

test('Simple arithmetic progression', () => {
  expect(solve([0, 1, 4, 5, 7, 9, 10, 13, 15, 16, 18, 19])).toBe(15)
})

test('Simple arithmetic progression', () => {
  expect(solve([0, 1, 2, 3, 5, 8, 11, 13, 14, 16, 18, 19])).toBe(13)
})
