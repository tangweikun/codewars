export function solve(s) {
  let stack = []
  let sign = 1
  let res = ''

  for (let c of s) {
    switch (c) {
      case '(':
        stack.push(sign)
        sign = 1
        break
      case ')':
        stack.pop()
        sign = 1
        break
      case '-':
        sign = -1
        break
      case '+':
        sign = 1
        break
      default:
        res +=
          (stack.reduce((acc, v) => acc * v, 1) * sign === 1 ? '+' : '-') + c
    }
  }

  return res.replace(/^\+/, '')
}
