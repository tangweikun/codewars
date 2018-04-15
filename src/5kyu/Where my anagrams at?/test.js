import { anagrams } from '.'

test('Where my anagrams at?', () => {
  expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toEqual([
    'aabb',
    'bbaa',
  ])
})

test('Where my anagrams at?', () => {
  expect(
    anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']),
  ).toEqual(['carer', 'racer'])
})

test('Where my anagrams at?', () => {
  expect(anagrams('laser', ['lazing', 'lazy', 'lacer'])).toEqual([])
})
