import { firstNonRepeatingLetter } from '.'

test('First non-repeating character', () => {
  expect(firstNonRepeatingLetter('a')).toBe('a')
})

test('First non-repeating character', () => {
  expect(firstNonRepeatingLetter('stress')).toBe('t')
})

test('First non-repeating character', () => {
  expect(firstNonRepeatingLetter('moonmen')).toBe('e')
})

test('First non-repeating character', () => {
  expect(firstNonRepeatingLetter('abba')).toBe('')
})

test('First non-repeating character', () => {
  expect(firstNonRepeatingLetter('hello world, eh?')).toBe('w')
})

test('First non-repeating character', () => {
  expect(firstNonRepeatingLetter('sTreSS')).toBe('T')
})

test('First non-repeating character', () => {
  expect(firstNonRepeatingLetter("Go hang a salami, I'm a lasagna hog!")).toBe(
    ',',
  )
})

test('First non-repeating character', () => {
  expect(firstNonRepeatingLetter('')).toBe('')
})
