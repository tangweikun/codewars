export const palindromeChainLength = function(n) {
  const reversed = +('' + n).split``.reverse().join``
  if (n !== reversed) {
    return 1 + palindromeChainLength(n + reversed)
  }
  return 0
}
