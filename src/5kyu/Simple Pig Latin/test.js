import { pigIt } from '.'

test('Simple Pig Latin', () => {
  expect(pigIt('Pig latin is cool')).toBe('igPay atinlay siay oolcay')
})

test('Simple Pig Latin', () => {
  expect(pigIt('Hello world')).toBe('elloHay orldway')
})
