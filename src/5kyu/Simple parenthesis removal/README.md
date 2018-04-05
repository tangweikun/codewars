# Simple parenthesis removal

## Description

In this Kata, you will be given a mathematical string and your task will be to remove all braces as follows:

```js
solve("x-(y+z)") = "x-y-z"
solve("x-(y-z)") = "x-y+z"
solve("u-(v-w-(x+y))-z") = "u-v+w+x+y-z"
solve("x-(-y-z)") = "x+y+z"
```

There are no spaces in the expression. Only two operators are given: "+" or "-".
