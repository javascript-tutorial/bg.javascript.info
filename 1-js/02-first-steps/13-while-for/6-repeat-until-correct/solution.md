
```js run demo
let num;

do {
  num = prompt("Моле въведете число по-голямо от 100?", 0);
} while (num <= 100 && num);
```

Цикълът `do..while` повтаря, докато и двете проверки са верни:

<<<<<<< HEAD
1. Проверка за `num <= 100` -- тоест въведената стойност все още не е по-голяма от `100`.
2. Проверка за `&& num` е невярно когато `num` е `null` или празен стринг. Тогава `while` цикълът спира също.
=======
1. The check for `num <= 100` -- that is, the entered value is still not greater than `100`.
2. The check `&& num` is false when `num` is `null` or an empty string. Then the `while` loop stops too.
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

Забележка: Ако `num` е `null` тогава `num <= 100` е `true`, така че без втората проверка цикълът няма да спре, ако потребителят натисне CANCEL. И двете проверки са задължителни.
