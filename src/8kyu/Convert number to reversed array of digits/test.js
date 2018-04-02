import { digitize } from '.'

test('Convert number to reversed array of digits', () => {
  expect(digitize(35231)).toEqual([1, 3, 2, 5, 3])
})
