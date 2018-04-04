export function snail(arr) {
  if (arr[0].length === 0) return []

  const len = arr.length
  let res = []
  dfs(0)
  return res

  function dfs(n) {
    if (n < len / 2) {
      for (let r = n; r < len - n; r++) res.push(arr[n][r]) // move right

      for (let d = n + 1; d < len - n; d++) res.push(arr[d][len - 1 - n]) // move down

      for (let l = len - 2 - n; l >= n; l--) res.push(arr[len - 1 - n][l]) // move left

      for (let u = len - 2 - n; u >= n + 1; u--) res.push(arr[u][n]) // move up

      dfs(n + 1)
    }
  }
}
