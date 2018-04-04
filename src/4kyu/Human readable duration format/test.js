import { formatDuration } from '.'

test('Human readable duration format', () => {
  expect(formatDuration(3)).toBe('3 seconds')
})

test('Human readable duration format', () => {
  expect(formatDuration(0)).toBe('now')
})

test('Human readable duration format', () => {
  expect(formatDuration(61)).toBe('1 minute and 1 second')
})

test('Human readable duration format', () => {
  expect(formatDuration(3601)).toBe('1 hour and 1 second')
})

test('Human readable duration format', () => {
  expect(formatDuration(378)).toBe('6 minutes and 18 seconds')
})

test('Human readable duration format', () => {
  expect(formatDuration(2378)).toBe('39 minutes and 38 seconds')
})

test('Human readable duration format', () => {
  expect(formatDuration(12378)).toBe('3 hours, 26 minutes and 18 seconds')
})

test('Human readable duration format', () => {
  expect(formatDuration(312378)).toBe(
    '3 days, 14 hours, 46 minutes and 18 seconds',
  )
})

test('Human readable duration format', () => {
  expect(formatDuration(88312378)).toBe(
    '2 years, 292 days, 3 hours, 12 minutes and 58 seconds',
  )
})
