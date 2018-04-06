// export function duplicateCount(text) {
//   return (
//     text
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('')
//       .match(/([^])\1+/g) || []
//   ).length
// }

// export function duplicateCount(text) {
//   return [
//     ...new Set(
//       [...text.toLowerCase()].sort().filter((c, p, a) => c === a[p - 1]),
//     ),
//   ].length
// }

export const duplicateCount = text =>
  (text.match(/(\w)(?=(?!.*\1.*\1).*\1)/gi) || []).length
