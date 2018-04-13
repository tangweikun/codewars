import { solution } from '.'

test('Strip Comments', () => {
  expect(
    solution('apples, pears # and bananas\ngrapes\nbananas !apples', [
      '#',
      '!',
    ]),
  ).toBe('apples, pears\ngrapes\nbananas')
})

test('Strip Comments', () => {
  expect(solution('a #b\nc\nd $e f g', ['#', '$'])).toBe('a\nc\nd')
})

test('Strip Comments', () => {
  expect(solution('#a #b\nc\nd $e f g', ['$'])).toBe('#a #b\nc\nd')
})

test('Strip Comments', () => {
  expect(solution('#a #a #b\nc\nd $e f g', ['$'])).toBe('#a #a #b\nc\nd')
})
