import { solution } from '.'

test('Break camelCase', () => {
  expect(solution('camelCase')).toBe('camel Case')
})

test('Break camelCase', () => {
  expect(solution('hello')).toBe('hello')
})

test('Break camelCase', () => {
  expect(solution('helloWorldFuck')).toBe('hello World Fuck')
})
