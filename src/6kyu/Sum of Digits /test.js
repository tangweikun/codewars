import { digital_root } from '.'

test('Sum of Digits / Digital Root', () => {
  expect(digital_root(16)).toBe(7)
})

test('Sum of Digits / Digital Root', () => {
  expect(digital_root(7)).toBe(7)
})

test('Sum of Digits / Digital Root', () => {
  expect(digital_root(10)).toBe(1)
})

test('Sum of Digits / Digital Root', () => {
  expect(digital_root(1026)).toBe(9)
})

test('Sum of Digits / Digital Root', () => {
  expect(digital_root(999)).toBe(9)
})

test('Sum of Digits / Digital Root', () => {
  expect(digital_root(1000090002)).toBe(3)
})

test('Sum of Digits / Digital Root', () => {
  expect(digital_root(942)).toBe(6)
})

test('Sum of Digits / Digital Root', () => {
  expect(digital_root(132189)).toBe(6)
})

test('Sum of Digits / Digital Root', () => {
  expect(digital_root(493193)).toBe(2)
})
