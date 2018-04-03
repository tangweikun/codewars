import { solution } from '.'

test('Split Strings', () => {
  expect(solution('abcd')).toEqual(['ab', 'cd'])
})

test('Split Strings', () => {
  expect(solution('abcde')).toEqual(['ab', 'cd', 'e_'])
})
