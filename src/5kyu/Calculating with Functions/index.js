// HELP:

const f = digit => op => (op ? op(digit) : digit)

export const zero = f(0)
export const one = f(1)
export const two = f(2)
export const three = f(3)
export const four = f(4)
export const five = f(5)
export const six = f(6)
export const seven = f(7)
export const eight = f(8)
export const nine = f(9)

export const plus = r => l => l + r

export const minus = r => l => l - r

export const times = r => l => l * r

export const dividedBy = r => l => l / r
