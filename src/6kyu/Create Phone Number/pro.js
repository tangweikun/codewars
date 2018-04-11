export function createPhoneNumber(numbers) {
  let format = '(xxx) xxx-xxxx'
  for (let num of numbers) {
    format = format.replace('x', num)
  }
  return format
}
