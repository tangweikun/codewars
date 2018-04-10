import { findOutlier } from '.'

test('Find The Parity Outlier', () => {
  expect(findOutlier([1, 2, 6, 4])).toBe(1)
})

test('Find The Parity Outlier', () => {
  expect(findOutlier([-1, 9, 3, 2])).toBe(2)
})

test('Find The Parity Outlier', () => {
  expect(findOutlier([5, -3, 0, -9])).toBe(0)
})

test('Find The Parity Outlier', () => {
  expect(findOutlier([8, 4, 8, 0, 1, 0])).toBe(1)
})

test('Find The Parity Outlier', () => {
  expect(findOutlier([5, 5, 2])).toBe(2)
})
