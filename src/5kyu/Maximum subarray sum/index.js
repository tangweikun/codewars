export const maxSequence = function(nums) {
  let currentSum = 0
  let maxSum = 0

  for (let elem of nums) {
    const nextSum = currentSum + elem
    maxSum = Math.max(maxSum, nextSum)
    currentSum = Math.max(nextSum, 0)
  }

  return maxSum
}
