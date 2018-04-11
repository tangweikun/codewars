import { isValidWalk } from '.'

test('Take a Ten Minute Walk', () => {
  expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(
    true,
  )
})

test('Take a Ten Minute Walk', () => {
  expect(isValidWalk(['w', 'w', 'e', 'e', 'n', 's', 'n', 's', 'n', 's'])).toBe(
    true,
  )
})

test('Take a Ten Minute Walk', () => {
  expect(isValidWalk([])).toBe(false)
})

test('Take a Ten Minute Walk', () => {
  expect(isValidWalk(['w', 'n', 'e', 's'])).toBe(false)
})

test('Take a Ten Minute Walk', () => {
  expect(
    isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']),
  ).toBe(false)
})

test('Take a Ten Minute Walk', () => {
  expect(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(
    false,
  )
})
