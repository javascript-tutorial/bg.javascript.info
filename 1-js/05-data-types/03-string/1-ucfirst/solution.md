Не можем "да заменим" първият знак, защото низовете в JavaScript са неизменни.

Но можем да направим нов низ, базиран на съществуващия, като първата буква направен на голяма:

```js
let newStr = str[0].toUpperCase() + str.slice(1);
```

Има обаче малък проблем. Ако `str` е празно, тогава `str[0]` е `undefined`, и като `undefined` няма `toUpperCase()` метод, ще получим грешка.

<<<<<<< HEAD
Тук има два варианта:

1. Да използваме `str.charAt(0)`, тъй като винаги връща низ (или празен такъв).
2. Да добавим тест за празен низ.

Ето 2-рия вариант:
=======
The easiest way out is to add a test for an empty string, like this:
>>>>>>> bf7d8bb1af3b416d393af1c15b03cb1352da1f9c

```js run demo
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

alert( ucFirst("john") ); // John
```
