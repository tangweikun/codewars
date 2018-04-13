// HELP:

export function solution(input, markers) {
  return input.replace(
    new RegExp('\\s?[' + markers.join('') + '].*(\\n)?', 'gi'),
    '$1',
  )
}

export function solution(input, markers) {
  return input
    .split('\n')
    .map(line =>
      markers.reduce((line, marker) => line.split(marker)[0].trim(), line),
    )
    .join('\n')
}
