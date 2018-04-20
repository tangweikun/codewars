export const isValidIP = str =>
  str.split('.').filter(x => x === +x + '' && +x < 256).length === 4
