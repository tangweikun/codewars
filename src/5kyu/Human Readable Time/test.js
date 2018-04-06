import { humanReadable } from '.'

test('Human Readable Time', () => {
  expect(humanReadable(0)).toBe('00:00:00')
})

test('Human Readable Time', () => {
  expect(humanReadable(5)).toBe('00:00:05')
})

test('Human Readable Time', () => {
  expect(humanReadable(60)).toBe('00:01:00')
})

test('Human Readable Time', () => {
  expect(humanReadable(86399)).toBe('23:59:59')
})

test('Human Readable Time', () => {
  expect(humanReadable(3600)).toBe('01:00:00')
})

test('Human Readable Time', () => {
  expect(humanReadable(359999)).toBe('99:59:59')
})
