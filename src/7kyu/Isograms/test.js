import { isIsogram } from '.'

test('Isograms', () => {
  expect(isIsogram('')).toBe(true)
})

test('Isograms', () => {
  expect(isIsogram('a')).toBe(true)
})

test('Isograms', () => {
  expect(isIsogram('aA')).toBe(false)
})

test('Isograms', () => {
  expect(isIsogram('BacD')).toBe(true)
})
