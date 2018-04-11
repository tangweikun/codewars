// export function maskify(cc) {
//   return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4)
// }

// export function maskify(cc) {
//   return cc.replace(/.(?=....)/g, '#')
// }

export function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, '#')
}
