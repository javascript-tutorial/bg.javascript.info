importance: 5

---

# Какво не е наред с теста?

Какво не е наред с теста за повдигане на степен `pow` долу?

```js
it("Повдига x на n-та степен", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});
```

P.S. Синтаксисът на теста е правилен и то минава.
