import { deleteNth } from '.'

test('Delete occurrences of an element if it occurs more than n times', () => {
  expect(deleteNth([1, 1, 1, 1], 2)).toEqual([1, 1])
})

test('Delete occurrences of an element if it occurs more than n times', () => {
  expect(deleteNth([20, 37, 20, 21], 1)).toEqual([20, 37, 21])
})

test('Delete occurrences of an element if it occurs more than n times', () => {
  expect(deleteNth([1, 2, 3, 1, 1, 2, 1, 2, 3, 3, 2, 4, 5, 3, 1], 3)).toEqual([
    1,
    2,
    3,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    5,
  ])
})

test('Delete occurrences of an element if it occurs more than n times', () => {
  expect(deleteNth([1, 1, 1, 1, 1], 5)).toEqual([1, 1, 1, 1, 1])
})

test('Delete occurrences of an element if it occurs more than n times', () => {
  expect(deleteNth([1, 1, 1, 1, 1], 0)).toEqual([])
})
