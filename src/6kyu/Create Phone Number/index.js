export const createPhoneNumber = numbers =>
  numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3')
