import { isValidIP } from './pro'

test('IP Validation', () => {
  expect(isValidIP('1.2.3.4')).toBe(true)
})

test('IP Validation', () => {
  expect(isValidIP('123.45.67.89')).toBe(true)
})

test('IP Validation', () => {
  expect(isValidIP('12.34.0.2')).toBe(true)
})

test('IP Validation', () => {
  expect(isValidIP('123.0.2.0')).toBe(true)
})

test('IP Validation', () => {
  expect(isValidIP('1.2.3')).toBe(false)
})

test('IP Validation', () => {
  expect(isValidIP('1.2.3.4.5')).toBe(false)
})

test('IP Validation', () => {
  expect(isValidIP('123.456.78.90')).toBe(false)
})

test('IP Validation', () => {
  expect(isValidIP('123.045.067.089')).toBe(false)
})

test('IP Validation', () => {
  expect(isValidIP('01.02.03.04')).toBe(false)
})

test('IP Validation', () => {
  expect(isValidIP('001.2.3.4')).toBe(false)
})

test('IP Validation', () => {
  expect(isValidIP('00.2.3.4')).toBe(false)
})

test('IP Validation', () => {
  expect(isValidIP('abc.def.ghi.jkl')).toBe(false)
})
