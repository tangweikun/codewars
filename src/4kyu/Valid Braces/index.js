export function validBraces(braces) {
  const hash = { '(': 1, ')': -1, '[': 10, ']': -10, '{': 100, '}': -100 }
  const stack = []

  for (let x of braces) {
    if (hash[x] < 0) {
      if (stack.pop() + hash[x] !== 0) return false
    } else {
      stack.push(hash[x])
    }
  }

  return stack.length === 0
}
