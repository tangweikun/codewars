import { boolToWord } from '.'

test('Convert boolean values to strings Yes or No', () => {
  expect(boolToWord('')).toBe('No')
})

test('Convert boolean values to strings Yes or No', () => {
  expect(boolToWord(null)).toBe('No')
})

test('Convert boolean values to strings Yes or No', () => {
  expect(boolToWord(NaN)).toBe('No')
})

test('Convert boolean values to strings Yes or No', () => {
  expect(boolToWord([])).toBe('Yes')
})

test('Convert boolean values to strings Yes or No', () => {
  expect(boolToWord(9)).toBe('Yes')
})

test('Convert boolean values to strings Yes or No', () => {
  expect(boolToWord(' ')).toBe('Yes')
})
