export function formatDuration(n) {
  if (n < 1) return 'now'

  const oneMinute = 60
  const oneHour = oneMinute * 60
  const oneDay = oneHour * 24
  const oneYear = oneDay * 365

  const years = ~~(n / oneYear)
  const days = ~~((n % oneYear) / oneDay)
  const hours = ~~((n % oneDay) / oneHour)
  const minutes = ~~((n % oneHour) / oneMinute)
  const seconds = n % oneMinute

  const strY = numToStr(years, 'year')
  const strD = numToStr(days, 'day')
  const strH = numToStr(hours, 'hour')
  const strM = numToStr(minutes, 'minute')
  const strS = numToStr(seconds, 'second')
  const arr = (strY + strD + strH + strM + strS).trim().split(' ')

  const res = []
  arr.forEach((x, i) => {
    if (i % 2 === 0 && i !== 0) res.push(i === arr.length - 2 ? 'and' : ',')
    res.push(x)
  })

  return res.join(' ').replace(/\s,/g, ',')
}

const qualifier = num => (num > 1 ? 's' : '')

const numToStr = (num, unit) =>
  num > 0 ? ` ${num} ${unit}${qualifier(num)}` : ''
