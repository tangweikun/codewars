import { reverseSeq } from '.'

test('Reversed sequence', () => {
  expect(reverseSeq(5)).toEqual([5, 4, 3, 2, 1])
})
