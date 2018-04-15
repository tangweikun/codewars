import { maxSequence } from '.'

test('Maximum subarray sum', () => {
  expect(maxSequence([])).toEqual(0)
})

test('Maximum subarray sum', () => {
  expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6)
})
