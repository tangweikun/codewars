// export const capitalizeWord = word => word[0].toUpperCase() + word.slice(1)

// export const capitalizeWord = word =>
//   word.replace(/^[\w]/, l => l.toUpperCase())

export const capitalizeWord = word =>
  word.replace(word[0], word[0].toUpperCase())
