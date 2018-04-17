# Format a string of names like 'Bart, Lisa & Maggie'.

## Description

In this kata you're expected to find the longest consecutive sequence of positive squares that sums up to a number.

E.g,
595 = 62 + 72 + 82 + 92 + 102 + 112 + 122 .

Your task is to write the function longestSequence(n) that either finds the longest consecutive sequence of squares that sums to the number n, or determines that no such sequence exists.

## Example

```js
longestSequence(50) // => [3, 4, 5]
// 9 + 16 + 25 = 50

longestSequence(595) // => [6, 7, 8, 9, 10, 11, 12]

longestSequence(10) // => []
```
