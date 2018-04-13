import { add } from '.'

describe('Functional Addition', () => {
  for (let i = 0; i < 10; i++) {
    const num1 = Math.floor(Math.random() * 101) - 10
    const num2 = Math.floor(Math.random() * 101) - 10
    test(`add(${num1})(${num2})`, () => {
      expect(add(num1)(num2)).toBe(num1 + num2)
    })
  }
})
