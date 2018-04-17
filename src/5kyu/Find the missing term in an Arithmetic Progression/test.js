import { findMissing } from '.'

test('Find the missing term in an Arithmetic Progression', () => {
  expect(findMissing([1, 3, 4])).toBe(2)
})

test('Find the missing term in an Arithmetic Progression', () => {
  expect(findMissing([1, 3, 5, 9, 11])).toBe(7)
})

test('Find the missing term in an Arithmetic Progression', () => {
  expect(findMissing([2, 6, 8])).toBe(4)
})

test('Find the missing term in an Arithmetic Progression', () => {
  expect(findMissing([1, 4, 10])).toBe(7)
})
