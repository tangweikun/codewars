import { remove } from '.'

test('Remove n exclamation marks in the sentence from left to right', () => {
  expect(remove('Hi!', 1)).toBe('Hi')
})

test('Remove n exclamation marks in the sentence from left to right', () => {
  expect(remove('Hi!', 100)).toBe('Hi')
})

test('Remove n exclamation marks in the sentence from left to right', () => {
  expect(remove('Hi!!!', 1)).toBe('Hi!!')
})
