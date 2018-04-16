import { toCurrency } from '.'

test('Converting integer to currency format', () => {
  expect(toCurrency(123456)).toBe('123,456')
})

test('Converting integer to currency format', () => {
  expect(toCurrency(1234)).toBe('1,234')
})

test('Converting integer to currency format', () => {
  expect(toCurrency(123)).toBe('123')
})

test('Converting integer to currency format', () => {
  expect(toCurrency(123456789012)).toBe('123,456,789,012')
})
