export function doneOrNot(board) {
  for (let i = 0; i < 9; i++) {
    if (
      isNotDone(board[i]) ||
      isNotDone(Array.from({ length: 9 }, (_, row) => board[row][i]))
    )
      return 'Try again!'
  }

  for (let i = 1; i < 8; i += 3) {
    for (let j = 1; j < 8; j += 3) {
      const box = []
      for (let m = i - 1; m < i + 2; m++) {
        for (let n = j - 1; n < j + 2; n++) {
          box.push(board[m][n])
        }
      }
      if (isNotDone(box)) return 'Try again!'
    }
  }

  return 'Finished!'
}

function isNotDone(arr) {
  return (
    arr
      .slice(0)
      .sort()
      .toString() != Array.from({ length: 9 }, (_, index) => index + 1)
  )
}
