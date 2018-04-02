import { capitalizeWord } from '.'

test('Capitalization and Mutability', () => {
  expect(capitalizeWord('hello')).toBe('Hello')
})

test('Capitalization and Mutability', () => {
  expect(capitalizeWord('r')).toBe('R')
})

test('Capitalization and Mutability', () => {
  expect(capitalizeWord('T')).toBe('T')
})
