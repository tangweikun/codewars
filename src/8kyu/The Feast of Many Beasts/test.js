import { feast } from '.'

test('The Feast of Many Beats', () => {
  expect(feast('great blue heron', 'garlic naan')).toBe(true)
})

test('The Feast of Many Beats', () => {
  expect(feast('chickadee', 'chocolate cake')).toBe(true)
})

test('The Feast of Many Beats', () => {
  expect(feast('brown bear', 'bear claw')).toBe(false)
})
