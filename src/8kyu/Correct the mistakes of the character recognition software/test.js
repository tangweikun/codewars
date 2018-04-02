import { correct } from '.'

test('Correct the mistakes of the character recognition software', () => {
  expect(correct('L0ND0N')).toBe('LONDON')
})

test('Correct the mistakes of the character recognition software', () => {
  expect(correct('DUBL1N')).toBe('DUBLIN')
})

test('Correct the mistakes of the character recognition software', () => {
  expect(correct('51NGAP0RE')).toBe('SINGAPORE')
})

test('Correct the mistakes of the character recognition software', () => {
  expect(correct('BUDAPE5T')).toBe('BUDAPEST')
})

test('Correct the mistakes of the character recognition software', () => {
  expect(correct('PAR15')).toBe('PARIS')
})
