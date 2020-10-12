
# Поизборна верига '?.'

[recent browser="new"]

<<<<<<< HEAD
Поизборната верига `?.` е доказан начин за защита от грешки при достъп до свойства на вложени обекти, дори ако междинното свойство не съществува.

## Проблемът
=======
The optional chaining `?.` is a safe way to access nested object properties, even if an intermediate property doesn't exist.

## The "non-existing property" problem
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779

Ако токущо Ако току-що сте започнали да четете ръководството и да научите JavaScript, може би още не сте се срещнали с проблема, но то е доста често срещан.

<<<<<<< HEAD
Например, някои от нашите потребители имат адреси, но малцина не ги предоставят. Тогава не можем безопасно да четем `user.address.street`:

```js run
let user = {}; // потребителят е без адрес
=======
As an example, let's consider objects for user data. Most of our users have addresses in `user.address` property, with the street `user.address.street`, but some did not provide them. 

In such case, when we attempt to get `user.address.street`, we'll get an error:

```js run
let user = {}; // the user without "address" property
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779

alert(user.address.street); // Грешка!
```

<<<<<<< HEAD
Или, в уеб разработката, бихме искали да получим информация за елемент от страницата, но то може да не съществува:
=======
That's the expected result, JavaScript works like this, but many practical cases we'd prefer to get `undefined` instead of an error (meaning "no street").

...And another example. In the web development, we may need to get an information about an element on the page, that sometimes doesn't exist:
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779

```js run
// Грешка, ако резултатът от querySelector(...) е null
let html = document.querySelector('.my-element').innerHTML;
```

Преди `?.` да се появи в езика, операторът `&&` беше използван да работи около това.

Например:

```js run
let user = {}; // потребителят е без адрес

alert( user && user.address && user.address.street ); // undefined (Няма грешка)
```

<<<<<<< HEAD
И целият път до свойството гарантира, че всички компоненти съществуват, но е тромаво за писане.
=======
AND'ing the whole path to the property ensures that all components exist (if not, the evaluation stops), but is cumbersome to write.
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779

## Поизборна верига

Поизборната верига `?.` спира веригата и връща `undefined` ако парчето преди `?.` е `undefined` или `null`.

**По-нататък в тази статия, за краткост, ще кажем, че нещо "съществува" ако не е `null` или `undefined`.**

Ето сигурния начин за достъп `user.address.street`:

```js run
let user = {}; // потребителят е без адрес

alert( user?.address?.street ); // undefined (Няма грешка)
```

Прочетенето на адреса с `user?.address` работи дори ако не съществува `user` обекта:

```js run
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
```

Моля обърнете внимание: синтаксисът `?.` работи точно там, където е поставен, но не повече.

В горния пример, `user?.` позволява само `user` да е `null/undefined`.

От друга страна, ако `user` не съществува, тогава то трябва да има свойството `user.address`, иначе `user?.address.street` ще даде грешка след втората точка.

```warn header="Не прекалявайте с поизборната верига"
Трябва да използваме `?.` само когато е добре, че нещо не съществува.

Например, ако според нашата логика в кода, обекта `user` трябва да е там, но `address` е по-избор, тогава `user.address?.street` би било по-добре.

<<<<<<< HEAD
Така че, ако `user` по някаква грешка е `undefined`, ще знаем за това и ще го оправим. Иначе, грешки в кода могат да бъдат заглушени, когато не е подходящо, и ще стават по-трудни за отстраняване.
=======
So, if `user` happens to be undefined due to a mistake, we'll see a programming error about it and fix it. Otherwise, coding errors can be silenced where not appropriate, and become more difficult to debug.
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779
```

````warn header="Променливата преди `?.` трябва да съществува!"
Ако не съществуваше променлива `user`, тогава `user?.anything` задейства грешка:

```js run
// ReferenceError: user is not defined
// Грешка при рефериране: user не съществува
user?.address;
```
<<<<<<< HEAD

Поизборната верига работи само с **декларираните** променливи!
=======
There must be a declaration (e.g. `let/const/var user`). The optional chaining works only for declared variables.
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779
````

## Short-circuiting или т.нар Късо съединение

Както беше казано преди, `?.` веднага спира ("късо съединение") изпълнението ако лявата част не съществува.

<<<<<<< HEAD
Така че, ако има допълнителни функции или странични реакции, те не се появяват:
=======
So, if there are any further function calls or side effects, they don't occur.

For instance:
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779

```js run
let user = null;
let x = 0;

<<<<<<< HEAD
user?.sayHi(x++); // нищо не се случва
=======
user?.sayHi(x++); // no "sayHi", so the execution doesn't reach x++
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779

alert(x); // 0, стойност не се увеличава
```

<<<<<<< HEAD
## Други случаи: ?.(), ?.[]
=======
## Other variants: ?.(), ?.[]
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779

Поизборната верига `?.` не е оператор, но специална синтаксична конструкция,който също работи с функции и квадратни скоби.

Например, `?.()` се използва за извикване на функция, която може да не съществува.

В кода по-долу, някои от нашите потребители имат функция `admin`, а някои нямат:

```js run
let user1 = {
  admin() {
    alert("Аз съм админ");
  }
}

let user2 = {};

*!*
user1.admin?.(); // Аз съм админ
user2.admin?.();
*/!*
```

<<<<<<< HEAD
Тук и в двата реда първо използваме точката `.`, за да получим свойство `admin`, тъй като потребителският обект трябва да съществува, така че да е безопасно да се чете от него.

Тогава `?.()` проверява лявата част: ако админ функцията съществува, тогава я тече (`user1`). Иначе (`user2`) изпълнението спира без грешки.
=======
Here, in both lines we first use the dot (`user1.admin`) to get `admin` property, because the user object must exist, so it's safe read from it.

Then `?.()` checks the left part: if the admin function exists, then it runs (that's so for `user1`). Otherwise (for `user2`) the evaluation stops without errors.
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779

Синтаксиса `?.[]`също работи, ако искаме да използваме скоби `[]` за достъп до свойства вместо точка `.`. Подобно на предишните случаи, то позволява безопасно да чете свойство от обект, който може да не съществува.

```js run
let user1 = {
  firstName: "John"
};

let user2 = null; // Представете си, не можахме да упълномощим потребителя

let key = "firstName";

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined

alert( user1?.[key]?.something?.not?.existing); // undefined
```

Също така можем да използваме `?.` с `delete`:

```js run
delete user?.name; // Изтриваме свойството user.name ако user съществува
```

<<<<<<< HEAD
```warn header="Можем да използваме `?.` за безопасно четене и изтриване, но не и писане"
Поизборната верига `?.` няма употреба в лявата част на заданието:
=======
````warn header="We can use `?.` for safe reading and deleting, but not writing"
The optional chaining `?.` has no use at the left side of an assignment.
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779

For example:
```js run
<<<<<<< HEAD
// идеята на кода по-долу е да напишете user.name, ако потребителят съществува
=======
let user = null;
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779

user?.name = "John"; // Грешка, не работи
// защото undefined = "John"
```

<<<<<<< HEAD
## Обобщение

Синтаксисът `?.` име три форми:

1. `обект?.свойство` -- връща свойството `обект.свойство` ако `обект` съществува, в противен случай `undefined`.
2. `обект?.[свойство]` -- връща свойството `обект[свойство]` ако `обект` съществува, в противен случай `undefined`.
3. `обект?.функция()` -- извиква функцията `обект.функция()` ако `обект` съществува, в противен случай връща `undefined`.
=======
It's just not that smart.
````

## Summary

The optional chaining `?.` syntax has three forms:

1. `obj?.prop` -- returns `obj.prop` if `obj` exists, otherwise `undefined`.
2. `obj?.[prop]` -- returns `obj[prop]` if `obj` exists, otherwise `undefined`.
3. `obj.method?.()` -- calls `obj.method()` if `obj.method` exists, otherwise returns `undefined`.
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779

Както виждаме, всички те са лесни и прости за използване. `?.` проверява лявата част за `null/undefined` и позволява изпълнението да продължи, ако не е така.

Врига от `?.` позволява безопасен достъп до вложени свойства.

<<<<<<< HEAD
Все още, трябва да използваме `?.` внимателно, само когато е добре, че лявата част не съществува.

За да не скрие програмните грешки от нас, ако се появят.
=======
Still, we should apply `?.` carefully, only where it's acceptable that the left part doesn't to exist. So that it won't hide programming errors from us, if they occur.
>>>>>>> 0599d07b3c13ee25f583fc091cead3c17a7e7779
