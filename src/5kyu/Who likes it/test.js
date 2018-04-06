import { likes } from '.'

test('Who likes it?', () => {
  expect(likes([])).toBe('no one likes this')
})

test('Who likes it?', () => {
  expect(likes(['Peter'])).toBe('Peter likes this')
})

test('Who likes it?', () => {
  expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this')
})

test('Who likes it?', () => {
  expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this')
})

test('Who likes it?', () => {
  expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe(
    'Alex, Jacob and 2 others like this',
  )
})

test('Who likes it?', () => {
  expect(likes(['Alex', 'Jacob', 'Mark', 'Max', 'Nick'])).toBe(
    'Alex, Jacob and 3 others like this',
  )
})
