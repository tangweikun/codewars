// export const binaryArrayToNumber = arr => parseInt(arr.join(''), 2)

export const binaryArrayToNumber = arr => arr.reduce((acc, b) => (acc << 1) | b)
