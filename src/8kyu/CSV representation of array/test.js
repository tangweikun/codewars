import { toCsvText } from '.'

test('CSV representation of array', () => {
  expect(
    toCsvText([
      [0, 1, 2, 3, 4],
      [10, 11, 12, 13, 14],
      [20, 21, 22, 23, 24],
      [30, 31, 32, 33, 34],
    ]),
  ).toBe('0,1,2,3,4\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34')
})
