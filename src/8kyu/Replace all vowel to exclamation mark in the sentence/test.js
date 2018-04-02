import { replace } from '.'

test('Replace all vowel to exclamation mark in the sentence', () => {
  expect(replace('Hi!')).toBe('H!!')
})

test('Replace all vowel to exclamation mark in the sentence', () => {
  expect(replace('!Hi! Hi!')).toBe('!H!! H!!')
})

test('Replace all vowel to exclamation mark in the sentence', () => {
  expect(replace('aeiou')).toBe('!!!!!')
})

test('Replace all vowel to exclamation mark in the sentence', () => {
  expect(replace('ABCDE')).toBe('!BCD!')
})
