// HELP:

// export const toCamelCase = str =>
//   str.replace(/[-_]./g, x => x.charAt(1).toUpperCase())

export const toCamelCase = str =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase())
