// HELP:

export const FluentCalculator = function() {
  const operators = {
    plus: (a, b) => a + b,
    minus: (a, b) => a - b,
    times: (a, b) => a * b,
    dividedBy: (a, b) => a / b,
  }
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
  ]
  let value = 0
  Object.keys(operators).forEach(op => {
    const operatorFunction = operators[op]
    const operatorObject = {}

    numbers.forEach((num, index) => {
      Object.defineProperty(operatorObject, num, {
        get: () => (value = operatorFunction(value, index)),
      })
    })

    Number.prototype[op] = operatorObject
  })

  numbers.forEach((num, index) => {
    Object.defineProperty(this, num, {
      get: () => {
        value = index
        return Number(index)
      },
    })
  })
}
