import { list } from '.'

test('Format a string of names like `Bart, Lisa & Maggie`', () => {
  expect(
    list([
      { name: 'Bart' },
      { name: 'Lisa' },
      { name: 'Maggie' },
      { name: 'Homer' },
      { name: 'Marge' },
    ]),
  ).toBe('Bart, Lisa, Maggie, Homer & Marge')
})

test('Format a string of names like `Bart, Lisa & Maggie`', () => {
  expect(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }])).toBe(
    'Bart, Lisa & Maggie',
  )
})

test('Format a string of names like `Bart, Lisa & Maggie`', () => {
  expect(list([{ name: 'Bart' }, { name: 'Lisa' }])).toBe('Bart & Lisa')
})

test('Format a string of names like `Bart, Lisa & Maggie`', () => {
  expect(list([{ name: 'Bart' }])).toBe('Bart')
})

test('Format a string of names like `Bart, Lisa & Maggie`', () => {
  expect(list([])).toBe('')
})
