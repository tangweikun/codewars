import { palindromeChainLength } from '.'

test('Palindrome chain length', () => {
  expect(palindromeChainLength(87)).toBe(4)
})

test('Palindrome chain length', () => {
  expect(palindromeChainLength(1)).toBe(0)
})

test('Palindrome chain length', () => {
  expect(palindromeChainLength(1221)).toBe(0)
})

test('Palindrome chain length', () => {
  expect(palindromeChainLength(23)).toBe(1)
})

test('Palindrome chain length', () => {
  expect(palindromeChainLength(189)).toBe(2)
})
