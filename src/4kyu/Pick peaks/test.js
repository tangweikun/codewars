import { pickPeaks } from '.'

test('Pick peaks', () => {
  expect(pickPeaks([0, 1, 2, 5, 1, 0])).toEqual({ pos: [3], peaks: [5] })
})

test('Pick peaks', () => {
  expect(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3])).toEqual({
    pos: [3, 7],
    peaks: [6, 3],
  })
})

test('only return the position and value of the beginning of the plateau', () => {
  expect(pickPeaks([1, 2, 2, 2, 1])).toEqual({ pos: [1], peaks: [2] })
})

test('there is no peak', () => {
  expect(pickPeaks([1, 2, 2, 2, 3])).toEqual({ pos: [], peaks: [] })
})

test('there is no peak', () => {
  expect(pickPeaks([3, 2, 2, 2, 3])).toEqual({ pos: [], peaks: [] })
})
