export function solution(number) {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  let res = ''
  while (number > 0) {
    for (let a in roman) {
      if (roman[a] <= number) {
        res += a
        number -= roman[a]
        break
      }
    }
  }
  return res
}
