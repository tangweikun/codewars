import { duplicateEncode } from '.'

test('Duplicate Encoder', () => {
  expect(duplicateEncode('din')).toBe('(((')
})

test('Duplicate Encoder', () => {
  expect(duplicateEncode('recede')).toBe('()()()')
})

test('Duplicate Encoder', () => {
  expect(duplicateEncode('Success')).toBe(')())())')
})

test('Duplicate Encoder', () => {
  expect(duplicateEncode('(( @')).toBe('))((')
})
