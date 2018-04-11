export function validBraces(braces) {
  while (/\(\)|\[\]|\{\}/g.test(braces)) {
    braces = braces.replace(/\(\)|\[\]|\{\}/g, '')
  }
  return braces.length === 0
}
