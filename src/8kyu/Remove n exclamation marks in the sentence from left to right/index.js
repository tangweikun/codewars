// export function remove(s, n) {
//   return s.replace(/!/g, c => n-- > 0 ? "" : c)
// }

export function remove(s, n) {
  return n > 0 ? remove(s.replace('!', ''), n - 1) : s
}
