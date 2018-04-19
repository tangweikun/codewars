import { titleCase } from '.'

test('Title Case', () => {
  expect(titleCase('')).toBe('')
})

test('Title Case', () => {
  expect(titleCase('a clash of KINGS', 'a an the of')).toBe('A Clash of Kings')
})

test('Title Case', () => {
  expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).toBe(
    'The Wind in the Willows',
  )
})

test('Title Case', () => {
  expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox')
})
