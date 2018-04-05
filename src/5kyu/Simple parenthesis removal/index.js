export function solve(s) {
  let stack = []
  let lastSign = '+'

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === ')') {
      lastSign = stack[stack.length - 1] || '+'
    } else if (s[i] === '+') {
      if (stack[stack.length - 1] !== '-' && stack[stack.length - 1] !== '+') {
        stack.push(lastSign)
      }
    } else if (s[i] === '-') {
      if (lastSign === '-') {
        if (stack[stack.length - 1] === '-') stack.pop()
        stack.push('+')
      } else {
        if (stack[stack.length - 1] === '+') stack.pop()
        stack.push('-')
      }
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('').replace(/^\+/, '')
}
