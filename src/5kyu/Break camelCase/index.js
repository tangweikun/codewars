// export function solution(str) {
//   return str.replace(/[A-Z]/g, ' $&')
// }

// export function solution(str) {
//   return str.replace(/([A-Z])/g, ' $1')
// }

export function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2')
}
