import { sumStrings } from '.'

test('Sum Strings as Numbers', () => {
  expect(sumStrings('1', '2')).toBe('3')
})

test('Sum Strings as Numbers', () => {
  expect(sumStrings('123', '456')).toBe('579')
})

test('Sum Strings as Numbers', () => {
  expect(sumStrings('199', '2')).toBe('201')
})

test('Sum Strings as Numbers', () => {
  expect(sumStrings('1111', '200')).toBe('1311')
})

test('Sum Strings as Numbers', () => {
  expect(sumStrings('00103', '08567')).toBe('8670')
})

test('Sum Strings as Numbers', () => {
  expect(
    sumStrings(
      '50095301248058391139327916261',
      '81055900096023504197206408605',
    ),
  ).toBe('131151201344081895336534324866')
})

test('Sum Strings as Numbers', () => {
  expect(
    sumStrings('712569312664357328695151392', '8100824045303269669937'),
  ).toBe('712577413488402631964821329')
})
