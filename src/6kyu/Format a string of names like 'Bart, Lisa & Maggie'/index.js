// export function list(names) {
//   return names
//     .map(x => x.name)
//     .join(', ')
//     .replace(/,([^,]*)$/, ' &$1')
// }

// export function list(names) {
//   const foo = names.map(p => p.name)
//   const bar = foo.pop() || ''
//   return foo.length > 0 ? foo.join(', ') + ' & ' + bar : bar
// }

// export const list = names =>
//   names
//     .map(x => x.name)
//     .join(', ')
//     .replace(/(.*),(.*)$/, '$1 &$2')

export function list(names) {
  return names
    .map(o => o.name)
    .join(', ')
    .replace(/^(.*)(, )(.*)$/, '$1 & $3')
}
