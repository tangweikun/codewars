import { solution } from '.'

test('Roman Numerals Encoder', () => {
  expect(solution(1)).toBe('I')
})

test('Roman Numerals Encoder', () => {
  expect(solution(2)).toBe('II')
})

test('Roman Numerals Encoder', () => {
  expect(solution(4)).toBe('IV')
})

test('Roman Numerals Encoder', () => {
  expect(solution(7)).toBe('VII')
})

test('Roman Numerals Encoder', () => {
  expect(solution(8)).toBe('VIII')
})

test('Roman Numerals Encoder', () => {
  expect(solution(9)).toBe('IX')
})

test('Roman Numerals Encoder', () => {
  expect(solution(10)).toBe('X')
})

test('Roman Numerals Encoder', () => {
  expect(solution(39)).toBe('XXXIX')
})

test('Roman Numerals Encoder', () => {
  expect(solution(40)).toBe('XL')
})

test('Roman Numerals Encoder', () => {
  expect(solution(80)).toBe('LXXX')
})

test('Roman Numerals Encoder', () => {
  expect(solution(207)).toBe('CCVII')
})

test('Roman Numerals Encoder', () => {
  expect(solution(246)).toBe('CCXLVI')
})

test('Roman Numerals Encoder', () => {
  expect(solution(1000)).toBe('M')
})

test('Roman Numerals Encoder', () => {
  expect(solution(1066)).toBe('MLXVI')
})

test('Roman Numerals Encoder', () => {
  expect(solution(1954)).toBe('MCMLIV')
})

test('Roman Numerals Encoder', () => {
  expect(solution(1776)).toBe('MDCCLXXVI')
})

test('Roman Numerals Encoder', () => {
  expect(solution(1990)).toBe('MCMXC')
})

test('Roman Numerals Encoder', () => {
  expect(solution(2007)).toBe('MMVII')
})

test('Roman Numerals Encoder', () => {
  expect(solution(7465)).toBe('MMMMMMMCDLXV')
})
