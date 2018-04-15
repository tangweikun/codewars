import { toCamelCase } from '.'

test('Convert string to camel case', () => {
  expect(toCamelCase('the-stealth-warrior')).toBe('theStealthWarrior')
})

test('Convert string to camel case', () => {
  expect(toCamelCase('The_Stealth_Warrior')).toBe('TheStealthWarrior')
})

test('Convert string to camel case', () => {
  expect(toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior')
})

test('Convert string to camel case', () => {
  expect(toCamelCase('A-B-C')).toBe('ABC')
})

test('Convert string to camel case', () => {
  expect(toCamelCase('')).toBe('')
})
