export const palindromeChainLength = function(n) {
  const reversed = +(n + '').split``.reverse().join``
  return n - reversed && 1 + palindromeChainLength(reversed + n)
}
