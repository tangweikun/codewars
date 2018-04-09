import { chmodCalculator } from '.'

test('chmod calculator in octal', () => {
  expect(chmodCalculator({ user: 'rwx', group: 'r-x', other: 'r-x' })).toBe(
    '755',
  )
})

test('chmod calculator in octal', () => {
  expect(chmodCalculator({ user: 'rwx', group: 'r--', other: 'r--' })).toBe(
    '744',
  )
})

test('chmod calculator in octal', () => {
  expect(chmodCalculator({ user: 'r-x', group: 'r-x', other: 'r-x' })).toBe(
    '555',
  )
})

test('chmod calculator in octal', () => {
  expect(chmodCalculator({ group: 'rwx' })).toBe('070')
})

test('chmod calculator in octal', () => {
  expect(chmodCalculator({})).toBe('000')
})

test('chmod calculator in octal', () => {
  expect(chmodCalculator({ user: '---' })).toBe('000')
})
