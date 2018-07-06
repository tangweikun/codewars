// https://www.codewars.com/kata/checking-groups/solutions/javascript

function groupCheck(s) {
  const regex = /\{\}|\[\]|\(\)/
  while (regex.test(s)) s = s.replace(regex, '')
  return !s.length
}
