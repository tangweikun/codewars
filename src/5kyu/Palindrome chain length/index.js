export const palindromeChainLength = n => {
  let res = 0
  while (!isPalindrome(n)) {
    res++
    n += +('' + n).split``.reverse().join``
  }
  return res
}

const isPalindrome = n => {
  let i = 0
  let str = '' + n
  while (i++ <= str.length / 2) {
    if (str[i] !== str[str.length - 1 - i]) return false
  }
  return true
}
