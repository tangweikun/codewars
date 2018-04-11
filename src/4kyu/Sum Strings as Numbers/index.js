export function sumStrings(a, b) {
  let carry = 0
  let res = ''
  while (a.length > 0 && b.length > 0) {
    const foo = +a.slice(-1) + +b.slice(-1) + carry
    res = foo % 10 + res
    carry = Math.floor(foo / 10)
    a = a.slice(0, -1)
    b = b.slice(0, -1)
  }

  return (+a + +b + carry + res).replace(/^0*/, '')
}
