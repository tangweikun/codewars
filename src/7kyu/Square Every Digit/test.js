import { squareDigits } from '.'

test('Square Every Digit', () => {
  expect(squareDigits(1)).toBe(1)
})

test('Square Every Digit', () => {
  expect(squareDigits(0)).toBe(0)
})

test('Square Every Digit', () => {
  expect(squareDigits(9119)).toBe(811181)
})

test('Square Every Digit', () => {
  expect(squareDigits(10)).toBe(10)
})

test('Square Every Digit', () => {
  expect(squareDigits(101)).toBe(101)
})

test('Square Every Digit', () => {
  expect(squareDigits(2780100)).toBe(449640100)
})
