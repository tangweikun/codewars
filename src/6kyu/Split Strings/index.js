// export const solution = str => (str.length % 2 ? str + '_' : str).match(/../g)

// export const solution = str =>
//   (str.length % 2 ? str + '_' : str).match(/.{1,2}/g)

export const solution = str => (str + '_').match(/../g)
