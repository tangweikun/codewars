import {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  dividedBy,
} from '.'

test('Calculating with Functions', () => {
  expect(seven(times(five()))).toBe(35)
})

test('Calculating with Functions', () => {
  expect(four(plus(nine()))).toBe(13)
})

test('Calculating with Functions', () => {
  expect(eight(minus(three()))).toBe(5)
})

test('Calculating with Functions', () => {
  expect(six(dividedBy(two()))).toBe(3)
})

test('Calculating with Functions', () => {
  expect(two()).toBe(2)
})
