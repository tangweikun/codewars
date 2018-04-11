import { validBraces } from '.'

test('Valid Braces', () => {
  expect(validBraces('{}[]')).toBe(true)
})

test('Valid Braces', () => {
  expect(validBraces('')).toBe(true)
})

test('Valid Braces', () => {
  expect(validBraces('{[]}[]')).toBe(true)
})

test('Valid Braces', () => {
  expect(validBraces('{()}[[]]')).toBe(true)
})

test('Valid Braces', () => {
  expect(validBraces('{)(}[]')).toBe(false)
})

test('Valid Braces', () => {
  expect(validBraces('{)}[)]')).toBe(false)
})

test('Valid Braces', () => {
  expect(validBraces(']')).toBe(false)
})

test('Valid Braces', () => {
  expect(validBraces('[')).toBe(false)
})
