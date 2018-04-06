// export function pigIt(str) {
//   return str.replace(/\b(\w)(\w+)\b/gi, '$2$1ay')
// }

export function pigIt(str) {
  return str
    .split(' ')
    .map(x => x.slice(1) + x.slice(0, 1) + 'ay')
    .join(' ')
}
