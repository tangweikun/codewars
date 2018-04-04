import { countBits } from '.'

test('Bit Counting', () => {
  expect(countBits(0)).toBe(0)
})

test('Bit Counting', () => {
  expect(countBits(1)).toBe(1)
})

test('Bit Counting', () => {
  expect(countBits(5)).toBe(2)
})

test('Bit Counting', () => {
  expect(countBits(13)).toBe(3)
})

test('Bit Counting', () => {
  expect(countBits(133)).toBe(3)
})

test('Bit Counting', () => {
  expect(countBits(13333)).toBe(6)
})

test('Bit Counting', () => {
  expect(countBits(324145)).toBe(9)
})
