import { productFib } from '.'

test('Product of consecutive Fib numbers', () => {
  expect(productFib(4895)).toEqual([55, 89, true])
})

test('Product of consecutive Fib numbers', () => {
  expect(productFib(5895)).toEqual([89, 144, false])
})

test('Product of consecutive Fib numbers', () => {
  expect(productFib(74049690)).toEqual([6765, 10946, true])
})

test('Product of consecutive Fib numbers', () => {
  expect(productFib(84049690)).toEqual([10946, 17711, false])
})

test('Product of consecutive Fib numbers', () => {
  expect(productFib(193864606)).toEqual([10946, 17711, true])
})

test('Product of consecutive Fib numbers', () => {
  expect(productFib(447577)).toEqual([610, 987, false])
})

test('Product of consecutive Fib numbers', () => {
  expect(productFib(602070)).toEqual([610, 987, true])
})
