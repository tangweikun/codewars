import { createSequence } from '.'

test('createSequence', () => {
  expect(createSequence(/[0-9]/)).toBe('0123456789')
})

test('createSequence', () => {
  expect(createSequence(/[0-9A-F]/)).toBe('0123456789ABCDEF')
})
