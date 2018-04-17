// HELP:

export const add = n => {
  const fn = x => add(n + x)
  fn.valueOf = () => n
  return fn
}
