import { sumDigPow } from '.'

test('Take a Number And Sum Its Digits Raised To The Consecutive Powers', () => {
  expect(sumDigPow(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('Take a Number And Sum Its Digits Raised To The Consecutive Powers', () => {
  expect(sumDigPow(1, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
})

test('Take a Number And Sum Its Digits Raised To The Consecutive Powers', () => {
  expect(sumDigPow(10, 100)).toEqual([89])
})

test('Take a Number And Sum Its Digits Raised To The Consecutive Powers', () => {
  expect(sumDigPow(90, 100)).toEqual([])
})

test('Take a Number And Sum Its Digits Raised To The Consecutive Powers', () => {
  expect(sumDigPow(50, 150)).toEqual([89, 135])
})
