export function spinWords(string) {
  return string.replace(/\w{5,}/g, x =>
    x
      .split('')
      .reverse()
      .join(''),
  )
}

// function spinWords(str){
//   return str.split(' ').map(x => x.length > 4 ? x.split('').reverse().join('') : x).join(' ')
// }
