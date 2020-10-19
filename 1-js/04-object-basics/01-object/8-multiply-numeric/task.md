Важност: 3

---

<<<<<<< HEAD
# Умножете числовите свойства с 2

Създайте функция `multiplyNumeric(obj)` който умножава всички числови свойства на `obj` по `2`.
=======
# Multiply numeric property values by 2

Create a function `multiplyNumeric(obj)` that multiplies all numeric property values of `obj` by `2`.
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

Например:

```js
// преди извикването на функцията
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// след извикването на функцията
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
```

Моля, имайте предвид, че `multiplyNumeric` не е необходимо да връща нещо. Той трябва да модифицира обекта на място.

Забележка: Използвайте `typeof` за да проверите дали свойството е число.


