import { race } from '.'

test('Tortoise racing', () => {
  expect(race(720, 850, 70)).toEqual([0, 32, 18])
})

test('Tortoise racing', () => {
  expect(race(820, 850, 550)).toEqual([18, 20, 0])
})

test('Tortoise racing', () => {
  expect(race(736, 836, 147)).toEqual([1, 28, 12])
})

test('Tortoise racing', () => {
  expect(race(820, 81, 550)).toBe(null)
})
