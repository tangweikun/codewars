export function sc(floor) {
  if (floor <= 1) return ''
  return 'Aa~ '.repeat(floor - 1) + 'Pa!' + (floor <= 6 ? ' Aa!' : '')
}
