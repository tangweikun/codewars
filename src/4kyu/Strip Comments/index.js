export function solution(input, markers) {
  let res = ''
  let flag = true
  for (let x of input) {
    if (markers.includes(x)) {
      flag = false
      res = res.replace(/\s+$/, '')
    } else if (x === '\n') {
      flag = true
    }
    if (flag) res += x
  }
  return res
}
