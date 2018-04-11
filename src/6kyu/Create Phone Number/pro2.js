export function createPhoneNumber(numbers) {
  return numbers.reduce((acc, c) => acc.replace('x', c), '(xxx) xxx-xxxx')
}
