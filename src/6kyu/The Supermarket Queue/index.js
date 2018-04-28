export function queueTime(customers, n) {
  const checkoutCounter = Array(n).fill(0)
  for (let queue of customers) {
    let minIndex = checkoutCounter.indexOf(Math.min(...checkoutCounter))
    checkoutCounter[minIndex] += queue
  }

  return Math.max(...checkoutCounter)
}
