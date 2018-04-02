import { getNumber } from '.'

test('Number of People in the Bus', () => {
  expect(getNumber([[10, 0], [3, 5], [5, 8]])).toBe(5)
})

test('Number of People in the Bus', () => {
  expect(getNumber([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])).toBe(
    17,
  )
})

test('Number of People in the Bus', () => {
  expect(getNumber([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])).toBe(21)
})
