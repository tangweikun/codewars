import { sc } from '.'

test('Jumping Dutch act', () => {
  expect(sc(2)).toBe('Aa~ Pa! Aa!')
})

test('Jumping Dutch act', () => {
  expect(sc(6)).toBe('Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!')
})

test('Jumping Dutch act', () => {
  expect(sc(7)).toBe('Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!')
})

test('Jumping Dutch act', () => {
  expect(sc(10)).toBe('Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!')
})

test('Jumping Dutch act', () => {
  expect(sc(1)).toBe('')
})

test('Jumping Dutch act', () => {
  expect(sc(-1)).toBe('')
})
