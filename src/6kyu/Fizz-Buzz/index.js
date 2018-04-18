export function solution(number) {
  let [fizz, buzz, fizzBuzz] = [0, 0, 0]
  while (number-- > 1) {
    if (number % 3 === 0 && number % 5 === 0) fizzBuzz++
    else if (number % 3 === 0) fizz++
    else if (number % 5 === 0) buzz++
  }

  return [fizz, buzz, fizzBuzz]
}
