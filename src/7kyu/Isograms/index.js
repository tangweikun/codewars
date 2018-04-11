// export const isIsogram = str => !/(\w).*\1/i.test(str)

// export const isIsogram = str =>
//   str.length === new Set([...str.toLowerCase()]).size

// export const isIsogram = str => !str.match(/([a-z]).*\1/i)

export const isIsogram = str => !str.match(/(.).*\1/i)
