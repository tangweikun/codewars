import { toWeirdCase } from '.'

test('WeIrD StRiNg CaSe', () => {
  expect(toWeirdCase('String')).toBe('StRiNg')
})

test('WeIrD StRiNg CaSe', () => {
  expect(toWeirdCase('Weird string case')).toBe('WeIrD StRiNg CaSe')
})
