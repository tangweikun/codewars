import { basicOp } from '.'

test('Basic Mathematical Operations', () => {
  expect(basicOp('+', 4, 7)).toBe(11)
})

test('Basic Mathematical Operations', () => {
  expect(basicOp('-', 15, 18)).toBe(-3)
})

test('Basic Mathematical Operations', () => {
  expect(basicOp('*', 5, 5)).toBe(25)
})

test('Basic Mathematical Operations', () => {
  expect(basicOp('/', 49, 7)).toBe(7)
})
