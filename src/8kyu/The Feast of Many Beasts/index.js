export function feast(beast, dish) {
  return (
    beast.charAt(0) === dish.charAt(0) && beast.slice(-1) === dish.slice(-1)
  )
}
