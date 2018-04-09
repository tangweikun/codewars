import { FluentCalculator } from '.'

test('Fluent Calculator', () => {
  const foo = new FluentCalculator()
  expect(foo.zero).toBe(0)
})

test('Fluent Calculator', () => {
  const foo = new FluentCalculator()
  expect(foo.one).toBe(1)
})

test('Fluent Calculator', () => {
  const foo = new FluentCalculator()
  expect(foo.zero.plus.two).toBe(2)
})

test('Fluent Calculator', () => {
  const foo = new FluentCalculator()
  expect(foo.ten.minus.one).toBe(9)
})

test('Fluent Calculator', () => {
  const foo = new FluentCalculator()
  expect(foo.five.times.ten).toBe(50)
})

test('Fluent Calculator', () => {
  const foo = new FluentCalculator()
  expect(foo.eight.dividedBy.two).toBe(4)
})

test('Fluent Calculator', () => {
  const foo = new FluentCalculator()
  expect(foo.one.plus.ten - 10).toBe(1)
})

test('Fluent Calculator', () => {
  const foo = new FluentCalculator()
  expect(foo.one.plus.two.plus.three.minus.one.minus.two.minus.four).toBe(-1)
})
