import { validate } from '.'

test('Regex Password Validation', () => {
  expect(validate('fjd3IR9')).toBe(true)
})

test('Regex Password Validation', () => {
  expect(validate('4fdg5Fj3')).toBe(true)
})

test('Regex Password Validation', () => {
  expect(validate('djI38D55')).toBe(true)
})

test('Regex Password Validation', () => {
  expect(validate('fjd3  IR9')).toBe(false)
})

test('Regex Password Validation', () => {
  expect(validate('a2.d412')).toBe(false)
})

test('Regex Password Validation', () => {
  expect(validate('!fdjn345')).toBe(false)
})

test('Regex Password Validation', () => {
  expect(validate('DSJKHD23')).toBe(false)
})

test('Regex Password Validation', () => {
  expect(validate('dsF43')).toBe(false)
})

test('Regex Password Validation', () => {
  expect(validate('ghdfj32')).toBe(false)
})
