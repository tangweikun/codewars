import { queueTime } from '.'

test('The Supermarket Queue', () => {
  expect(queueTime([], 1)).toBe(0)
})

test('The Supermarket Queue', () => {
  expect(queueTime([1, 2, 3, 4], 1)).toBe(10)
})

test('The Supermarket Queue', () => {
  expect(queueTime([2, 2, 3, 3, 4, 4], 2)).toBe(9)
})

test('The Supermarket Queue', () => {
  expect(queueTime([1, 2, 3, 4, 5], 10)).toBe(5)
})

test('The Supermarket Queue', () => {
  expect(queueTime([1, 2, 3, 4], 2)).toBe(6)
})

test('The Supermarket Queue', () => {
  expect(queueTime([2, 3, 10], 2)).toBe(12)
})

test('The Supermarket Queue', () => {
  expect(
    queueTime([44, 28, 24, 5, 32, 45, 16, 13, 11, 33, 47, 7, 13, 30, 32], 6),
  ).toBe(79)
})
