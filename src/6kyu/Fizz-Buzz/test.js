import { solution } from './pro'

test('Fizz / Buzz', () => {
  expect(solution(20)).toEqual([5, 2, 1])
})

test('Fizz / Buzz', () => {
  expect(solution(300)).toEqual([80, 40, 19])
})
