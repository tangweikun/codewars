export const createSequence = regex => {
  let seq = ''
  for (let i = 0; i < 256; i++) {
    if (regex.test(String.fromCharCode(i))) {
      seq += String.fromCharCode(i)
    }
  }
  return seq
}