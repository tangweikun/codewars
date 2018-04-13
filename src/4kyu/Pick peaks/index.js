export function pickPeaks(arr) {
  let pos = []
  let peaks = []
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      if (arr[i] > arr[i + 1]) {
        pos.push(i)
        peaks.push(arr[i])
      } else if (arr[i] === arr[i + 1]) {
        let temp = i
        while (arr[i] === arr[temp]) i++
        if (arr[temp] > arr[i]) {
          pos.push(temp)
          peaks.push(arr[temp])
        }
      }
    }
  }

  return { pos, peaks }
}
