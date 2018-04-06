import { duplicateCount } from '.'

test('Counting Duplicates', () => {
  expect(duplicateCount('')).toBe(0)
})

test('Counting Duplicates', () => {
  expect(duplicateCount('asdf')).toBe(0)
})

test('Counting Duplicates', () => {
  expect(duplicateCount('asdfadsf')).toBe(4)
})

test('Counting Duplicates', () => {
  expect(duplicateCount('ajjjjjjjjjj')).toBe(1)
})
