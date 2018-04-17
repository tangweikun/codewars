import { add } from '.'

test('A Chain adding function', () => {
  expect(add(1).valueOf()).toEqual(1)
})

test('A Chain adding function', () => {
  expect(add(5)(2).valueOf()).toBe(7)
})

test('A Chain adding function', () => {
  expect(add(6)(7)(9).valueOf()).toBe(22)
})

test('A Chain adding function', () => {
  expect(add(6)(7)(9)(1)(1).valueOf()).toBe(24)
})
