import { solve } from '.'

test('Simple parenthesis removal-1', () => {
  expect(solve('x-(+y+z)')).toBe('x-y-z')
})

test('Simple parenthesis removal-1', () => {
  expect(solve('-(+(+x-(+y+(-(-(z)))))')).toBe('-x+y+z')
})

test('Simple parenthesis removal-2', () => {
  expect(solve('-x-(y+z)')).toBe('-x-y-z')
})

test('Simple parenthesis removal-3', () => {
  expect(solve('+x-(-y+z)')).toBe('x+y-z')
})

test('Simple parenthesis removal-4', () => {
  expect(solve('(x-(y+z))')).toBe('x-y-z')
})

test('Simple parenthesis removal-5', () => {
  expect(solve('x+(-y+z)')).toBe('x-y+z')
})

test('Simple parenthesis removal-6', () => {
  expect(solve('x-(y-z)')).toBe('x-y+z')
})

test('Simple parenthesis removal-7', () => {
  expect(solve('u-(v-w-(x+y))-z')).toBe('u-v+w+x+y-z')
})

test('Simple parenthesis removal-8', () => {
  expect(solve('x-(-y-z)')).toBe('x+y+z')
})

test('Simple parenthesis removal-9', () => {
  expect(solve('(((((((((-((-(((n))))))))))))))')).toBe('n')
})

test('Simple parenthesis removal-10', () => {
  expect(solve('x-(-((-((((-((-(-(-y)))))))))))')).toBe('x-y')
})

test('Simple parenthesis removal-11', () => {
  expect(solve('u-(v-w-(x+y))-z')).toBe('u-v+w+x+y-z')
})
