import { sc } from '.'

test('Coding 3min : Symmetric Sort', () => {
  expect(sc([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 3, 5, 7, 9, 8, 6, 4, 2])
})

test('Coding 3min : Symmetric Sort', () => {
  expect(sc([1, 1, 2, 2, 3, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5, 4, 3, 2, 1])
})

test('Coding 3min : Symmetric Sort', () => {
  expect(sc([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual([1, 3, 5, 7, 9, 8, 6, 4, 2])
})

test('Coding 3min : Symmetric Sort', () => {
  expect(sc([5, 4, 4, 3, 3, 2, 2, 1, 1])).toEqual([1, 2, 3, 4, 5, 4, 3, 2, 1])
})

test('Coding 3min : Symmetric Sort', () => {
  expect(sc([11, 2, 33, 4, 55, 6])).toEqual([2, 6, 33, 55, 11, 4])
})

test('Coding 3min : Symmetric Sort', () => {
  expect(sc([5, 12, 5, 8, 33, 13])).toEqual([5, 8, 13, 33, 12, 5])
})
