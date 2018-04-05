export function solve(s) {
  let stack = []
  let lastSign = '+'

  for (let c of s) {
    if (c === '(' || c === ')') {
      lastSign = stack[stack.length - 1] || '+'
    } else if (c === '+') {
      if (stack[stack.length - 1] !== '-' && stack[stack.length - 1] !== '+') {
        stack.push(lastSign)
      }
    } else if (c === '-') {
      if (lastSign === '-') {
        if (stack[stack.length - 1] === '-') stack.pop()
        stack.push('+')
      } else {
        if (stack[stack.length - 1] === '+') stack.pop()
        stack.push('-')
      }
    } else {
      stack.push(c)
    }
  }
  return stack.join('').replace(/^\+/, '')
}
