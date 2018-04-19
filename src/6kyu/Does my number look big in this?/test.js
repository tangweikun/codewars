import { narcissistic } from '.'

test('Does my number look big in this?', () => {
  expect(narcissistic(7)).toBe(true)
})

test('Does my number look big in this?', () => {
  expect(narcissistic(371)).toBe(true)
})

test('Does my number look big in this?', () => {
  expect(narcissistic(23829)).toBe(false)
})

test('Does my number look big in this?', () => {
  expect(narcissistic(16251)).toBe(false)
})

test('Does my number look big in this?', () => {
  expect(narcissistic(48008)).toBe(false)
})

test('Does my number look big in this?', () => {
  expect(narcissistic(27825)).toBe(false)
})

test('Does my number look big in this?', () => {
  expect(narcissistic(37248)).toBe(false)
})

test('Does my number look big in this?', () => {
  expect(narcissistic(9956294)).toBe(false)
})

test('Does my number look big in this?', () => {
  expect(narcissistic(11016783)).toBe(false)
})

test('Does my number look big in this?', () => {
  expect(narcissistic(11305697)).toBe(false)
})

test('Does my number look big in this?', () => {
  expect(narcissistic(8208)).toBe(true)
})
