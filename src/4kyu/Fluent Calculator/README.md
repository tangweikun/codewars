# Fluent Calculator

## Description

Your task is to implement a simple calculator with fluent syntax

FluentCalculator should be separated in two, the Values and the Operations, one can call the other, but cannot call one of his own.

* A Value can call an Operation, but cannot call a value

```js
FluentCalculator.one.plus

// undefined, if you may.
FluentCalculator.one.one
```

* An Operation can call a Value, but cannont call a operation

```js
// this should have a value of 3
FluentCalculator.one.plus.two

// If you replace 'one' with 'c', I could allow it. (undefined as well)
FluentCalculator.one.plus.plus
```

* Pairs of Value and Operation should be stackable to infinity

```js
// Should be -1
FluentCalculator.one.plus.two.plus.three.minus.one.minus.two.minus.four
```

* A Value should resolve to a primitive integer

```js
FluentCalculator.one.plus.ten - 10 // Should be 1
```
