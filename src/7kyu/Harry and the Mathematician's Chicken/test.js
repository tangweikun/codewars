import { chickenOptions } from '.'

test("Harry and the Mathematician's Chicken", () => {
  expect(chickenOptions('')).toEqual([0])
})

test("Harry and the Mathematician's Chicken", () => {
  expect(chickenOptions(2)).toEqual([0])
})

test("Harry and the Mathematician's Chicken", () => {
  expect(chickenOptions(3)).toEqual([0, 3])
})

test("Harry and the Mathematician's Chicken", () => {
  expect(chickenOptions(13)).toEqual([0, 3, 6, 9, 10, 12, 13])
})

test("Harry and the Mathematician's Chicken", () => {
  expect(chickenOptions(29)).toEqual([
    0,
    3,
    6,
    9,
    10,
    12,
    13,
    15,
    16,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
  ])
})
