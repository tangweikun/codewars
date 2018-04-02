import { removeChar } from '.'

test('Remove First and Last Character', () => {
  expect(removeChar('eloquent')).toBe('loquen')
})

test('Remove First and Last Character', () => {
  expect(removeChar('country')).toBe('ountr')
})

test('Remove First and Last Character', () => {
  expect(removeChar('person')).toBe('erso')
})

test('Remove First and Last Character', () => {
  expect(removeChar('place')).toBe('lac')
})
