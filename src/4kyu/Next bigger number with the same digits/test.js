import { nextBigger } from '.'

test('Next bigger number with the same digits', () => {
  expect(nextBigger(12)).toBe(21)
})

test('Next bigger number with the same digits', () => {
  expect(nextBigger(513)).toBe(531)
})

test('Next bigger number with the same digits', () => {
  expect(nextBigger(2017)).toBe(2071)
})

test('Next bigger number with the same digits', () => {
  expect(nextBigger(414)).toBe(441)
})

test('Next bigger number with the same digits', () => {
  expect(nextBigger(144)).toBe(414)
})

test('Next bigger number with the same digits', () => {
  expect(nextBigger(9)).toBe(-1)
})

test('Next bigger number with the same digits', () => {
  expect(nextBigger(111)).toBe(-1)
})

test('Next bigger number with the same digits', () => {
  expect(nextBigger(531)).toBe(-1)
})
