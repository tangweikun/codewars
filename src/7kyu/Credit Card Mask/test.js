import { maskify } from '.'

test('Credit Card Mask', () => {
  expect(maskify('4556364607935616')).toBe('############5616')
})

test('Credit Card Mask', () => {
  expect(maskify('4')).toBe('4')
})

test('Credit Card Mask', () => {
  expect(maskify('ddfs')).toBe('ddfs')
})
