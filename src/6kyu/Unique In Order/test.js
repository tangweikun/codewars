import { uniqueInOrder } from '.'

test('Unique In Order', () => {
  expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual([
    'A',
    'B',
    'C',
    'D',
    'A',
    'B',
  ])
})

test('Unique In Order', () => {
  expect(uniqueInOrder('ABBCcAD')).toEqual(['A', 'B', 'C', 'c', 'A', 'D'])
})

test('Unique In Order', () => {
  expect(uniqueInOrder([1, 2, 2, 3, 3])).toEqual([1, 2, 3])
})
