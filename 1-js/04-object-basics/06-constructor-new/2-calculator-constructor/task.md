importance: 5

---

# Създайте нов калкулатор

Създайте функция за конструктора `Calculator` което създава обекти с 3 метода:

<<<<<<< HEAD
- `read()` попитайте за две стойности като използвате `prompt` и ги запаметявайте в свойствата на обекта.
- `sum()` връща сбора от тези свойства.
- `mul()` връща произведението на тези свойства.
=======
- `read()` prompts for two values and saves them as object properties with names `a` and `b` respectively.
- `sum()` returns the sum of these properties.
- `mul()` returns the multiplication product of these properties.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Например:

```js
let calculator = new Calculator();
calculator.read();

alert( "Сбор =" + calculator.sum() );
alert( "Произведение =" + calculator.mul() );
```

[demo]
