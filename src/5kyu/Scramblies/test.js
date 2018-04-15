import { scramble } from '.'

test('Scramblies', () => {
  expect(scramble('scriptjavx', 'javascript')).toBe(false)
})

test('Scramblies', () => {
  expect(scramble('javscripts', 'javascript')).toBe(false)
})

test('Scramblies', () => {
  expect(
    scramble(
      'uglyvbpthtgvgejiwhyeofmdrfzexayvckktcftnhrsjetnikcffkvlpuqeytgbkrslaut',
      'mrxhomnckrzjtgwupigxiepagxucgvfbvbjpuqyuwyoapiarcogmgypmaooxdfjlngcwxmmkwm',
    ),
  ).toBe(false)
})

test('Scramblies', () => {
  expect(scramble('', '')).toBe(true)
})
