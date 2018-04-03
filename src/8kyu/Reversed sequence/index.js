// export const reverseSeq = n =>
//   Array(n)
//     .fill(0)
//     .map((e, i) => n - i)

export const reverseSeq = n => Array.from({ length: n }, () => n--)
