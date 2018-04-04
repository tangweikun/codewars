export function formatDuration(n) {
  if (n < 1) return 'now'

  const oneMinute = 60
  const oneHour = oneMinute * 60
  const oneDay = oneHour * 24
  const oneYear = oneDay * 365

  const times = {
    year: ~~(n / oneYear),
    day: ~~((n % oneYear) / oneDay),
    hour: ~~((n % oneDay) / oneHour),
    minute: ~~((n % oneHour) / oneMinute),
    second: n % oneMinute,
  }

  let str = ''
  for (let [key, value] of Object.entries(times)) {
    str += numToStr(times[key], key)
  }
  const arr = str.trim().split(' ')

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
