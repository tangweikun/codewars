import { validatePIN } from '.'

test('Regex validate PIN code', () => {
  expect(validatePIN('1234')).toBe(true)
})

test('Regex validate PIN code', () => {
  expect(validatePIN('123444')).toBe(true)
})

test('Regex validate PIN code', () => {
  expect(validatePIN('a234')).toBe(false)
})

test('Regex validate PIN code', () => {
  expect(validatePIN('12442')).toBe(false)
})

test('Regex validate PIN code', () => {
  expect(validatePIN(' 123')).toBe(false)
})
