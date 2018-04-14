import { binaryArrayToNumber } from '.'

describe("One's and Zero's", () => {
  const rand = () => Math.round(Math.random())
  const solution = arr => parseInt(arr.join(''), 2)

  it('Works with random tests', () => {
    let testCases = []
    for (let i = 0; i < 50; i++) {
      let temp = []
      for (let i = 0; i < 4; i++) temp.push(rand())
      testCases.push(temp)
    }

    testCases.map(x => {
      expect(binaryArrayToNumber(x)).toBe(solution(x))
    })
  })
})
