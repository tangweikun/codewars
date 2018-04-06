export function humanReadable(seconds) {
  const oneMinute = 60
  const oneHour = oneMinute * 60
  const H = ('0' + Math.floor(seconds / oneHour)).slice(-2)
  const M = ('0' + Math.floor(seconds / oneMinute) % 60).slice(-2)
  const S = ('0' + seconds % 60).slice(-2)
  return `${H}:${M}:${S}`
}
