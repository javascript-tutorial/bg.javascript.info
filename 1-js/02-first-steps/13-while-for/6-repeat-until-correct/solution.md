
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
>>>>>>> ff152b126ec70a9de919bfdc1913215539d37187

Забележка: Ако `num` е `null` тогава `num <= 100` е `true`, така че без втората проверка цикълът няма да спре, ако потребителят натисне CANCEL. И двете проверки са задължителни.
