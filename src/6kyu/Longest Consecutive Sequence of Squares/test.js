import { longestSequence } from '.'

test('Longest Consecutive Sequence of Squares', () => {
  expect(longestSequence(50)).toEqual([3, 4, 5])
})

test('Longest Consecutive Sequence of Squares', () => {
  expect(longestSequence(595)).toEqual([6, 7, 8, 9, 10, 11, 12])
})

test('Longest Consecutive Sequence of Squares', () => {
  expect(longestSequence(10)).toEqual([])
})

test('Longest Consecutive Sequence of Squares', () => {
  expect(longestSequence(1)).toEqual([1])
})

test('Longest Consecutive Sequence of Squares', () => {
  expect(longestSequence(5)).toEqual([1, 2])
})

test('Longest Consecutive Sequence of Squares', () => {
  expect(longestSequence(44444445)).toEqual([])
})

test('Longest Consecutive Sequence of Squares', () => {
  expect(longestSequence(4344444445)).toEqual([])
})
