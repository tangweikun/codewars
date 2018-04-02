export function chromosomeCheck(sperm) {
  return `Congratulations! You're going to have a ${
    sperm === 'XY' ? 'son' : 'daughter'
  }.`
}
