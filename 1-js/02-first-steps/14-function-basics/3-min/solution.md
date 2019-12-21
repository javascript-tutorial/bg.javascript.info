Решение използвайки `if`:

```js
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
```

Решение с оператора `'?'`:

```js
function min(a, b) {
  return a < b ? a : b;
}
```

В случая на равенство `a == b` няма значение какво се връща.
