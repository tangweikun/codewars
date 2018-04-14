import { tickets } from '.'

test('Vasya - Clerk', () => {
  expect(tickets([25])).toBe(true)
})

test('Vasya - Clerk', () => {
  expect(tickets([25, 50])).toBe(true)
})

test('Vasya - Clerk', () => {
  expect(tickets([25, 50, 25, 100])).toBe(true)
})

test('Vasya - Clerk', () => {
  expect(tickets([25, 25, 50, 50, 25, 50])).toBe(true)
})

test('Vasya - Clerk', () => {
  expect(tickets([50])).toBe(false)
})

test('Vasya - Clerk', () => {
  expect(tickets([25, 100])).toBe(false)
})

test('Vasya - Clerk', () => {
  expect(tickets([25, 50, 50])).toBe(false)
})

test('Vasya - Clerk', () => {
  expect(tickets([25, 25, 100])).toBe(false)
})

test('Vasya - Clerk', () => {
  expect(tickets([25, 25, 50, 50, 100])).toBe(false)
})
