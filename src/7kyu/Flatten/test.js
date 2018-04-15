import { flatten } from '.'

test('Flatten', () => {
  expect(flatten([])).toEqual([])
})

test('Flatten', () => {
  expect(flatten([1, 2, 3])).toEqual([1, 2, 3])
})

test('Flatten', () => {
  expect(flatten([[1, 2, 3], ['a', 'b', 'c'], [1, 2, 3]])).toEqual([
    1,
    2,
    3,
    'a',
    'b',
    'c',
    1,
    2,
    3,
  ])
})

test('Flatten', () => {
  expect(flatten([[3, 4, 5], [[9, 9, 9]], ['a,b,c']])).toEqual([
    3,
    4,
    5,
    [9, 9, 9],
    'a,b,c',
  ])
})

test('Flatten', () => {
  expect(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]])).toEqual([
    [3],
    [4],
    [5],
    9,
    9,
    8,
    [1, 2, 3],
  ])
})
