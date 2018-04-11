import { dirReduc } from '.'

test('Directions Reduction', () => {
  expect(
    dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']),
  ).toEqual(['WEST'])
})

test('Directions Reduction', () => {
  expect(dirReduc(['SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])).toEqual(
    ['SOUTH', 'WEST'],
  )
})

test('Directions Reduction', () => {
  expect(
    dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH']),
  ).toEqual([])
})

test('Directions Reduction', () => {
  expect(dirReduc([])).toEqual([])
})

test('Directions Reduction', () => {
  expect(
    dirReduc([
      'NORTH',
      'EAST',
      'NORTH',
      'EAST',
      'WEST',
      'WEST',
      'EAST',
      'EAST',
      'WEST',
      'SOUTH',
    ]),
  ).toEqual(['NORTH', 'EAST'])
})
