import { sumOfIntegersInString } from '.'

test('', () => {
  expect(
    sumOfIntegersInString(
      'The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog',
    ),
  ).toBe(3635)
})
