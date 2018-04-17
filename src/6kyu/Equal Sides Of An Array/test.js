import { findEvenIndex } from '.'

test('Equal Sides Of An Array', () => {
  expect(findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3)
})

test('Equal Sides Of An Array', () => {
  expect(findEvenIndex([20, 10, -80, 10, 10, 15, 35])).toBe(0)
})

test('Equal Sides Of An Array', () => {
  expect(findEvenIndex([1, 100, 50, -51, 1, 1])).toBe(1)
})

test('Equal Sides Of An Array', () => {
  expect(findEvenIndex([1, 2, 3, 4, 5, 6])).toBe(-1)
})

test('Equal Sides Of An Array', () => {
  expect(findEvenIndex([20, 10, 30, 10, 10, 15, 35])).toBe(3)
})
