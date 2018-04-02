import { chromosomeCheck } from '.'

test('Determine offspring sex based on genes XX and XY chromosomes', () => {
  expect(chromosomeCheck('XY')).toBe(
    "Congratulations! You're going to have a son.",
  )
})

test('Determine offspring sex based on genes XX and XY chromosomes', () => {
  expect(chromosomeCheck('XX')).toBe(
    "Congratulations! You're going to have a daughter.",
  )
})
