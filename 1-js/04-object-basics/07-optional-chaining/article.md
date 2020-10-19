
# Поизборна верига '?.'

[recent browser="new"]

<<<<<<< HEAD
Поизборната верига `?.` е доказан начин за защита от грешки при достъп до свойства на вложени обекти, дори ако междинното свойство не съществува.

## Проблемът
=======
The optional chaining `?.` is a safe way to access nested object properties, even if an intermediate property doesn't exist.

## The "non-existing property" problem
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

Ако токущо Ако току-що сте започнали да четете ръководството и да научите JavaScript, може би още не сте се срещнали с проблема, но то е доста често срещан.

<<<<<<< HEAD
Например, някои от нашите потребители имат адреси, но малцина не ги предоставят. Тогава не можем безопасно да четем `user.address.street`:

```js run
let user = {}; // потребителят е без адрес
=======
As an example, consider objects for user data. Most of our users have addresses in `user.address` property, with the street `user.address.street`, but some did not provide them.

In such case, when we attempt to get `user.address.street`, we may get an error:

```js run
let user = {}; // a user without "address" property
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

alert(user.address.street); // Грешка!
```

<<<<<<< HEAD
Или, в уеб разработката, бихме искали да получим информация за елемент от страницата, но то може да не съществува:

```js run
// Грешка, ако резултатът от querySelector(...) е null
let html = document.querySelector('.my-element').innerHTML;
```

Преди `?.` да се появи в езика, операторът `&&` беше използван да работи около това.

Например:
=======
That's the expected result, JavaScript works like this. As `user.address` is `undefined`, the attempt to get `user.address.street` fails with an error. Although, in many practical cases we'd prefer to get `undefined` instead of an error here (meaning "no street").

...And another example. In the web development, we may need the information about an element on the page. The element is returned by `document.querySelector('.elem')`, and the catch is again - that it sometimes doesn't exist:

```js run
// the result of the call document.querySelector('.elem') may be an object or null
let html = document.querySelector('.elem').innerHTML; // error if it's null
```

Once again, we may want to avoid the error in such case.

How can we do this?

The obvious solution would be to check the value using `if` or the conditional operator `?`, before accessing it, like this:

```js
let user = {};

alert(user.address ? user.address.street : undefined);
```

...But that's quite inelegant. As you can see, the `user.address` is duplicated in the code. For more deeply nested properties, that becomes a problem.

E.g. let's try getting `user.address.street.name`.

We need to check both `user.address` and `user.address.street`:

```js
let user = {}; // user has no address

alert(user.address ? user.address.street ? user.address.street.name : null : null);
```

That looks awful.

Before the optional chaining `?.` was added to the language, people used the `&&` operator for such cases:
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

```js run
let user = {}; // потребителят е без адрес

<<<<<<< HEAD
alert( user && user.address && user.address.street ); // undefined (Няма грешка)
```

И целият път до свойството гарантира, че всички компоненти съществуват, но е тромаво за писане.
=======
alert( user.address && user.address.street && user.address.street.name ); // undefined (no error)
```

AND'ing the whole path to the property ensures that all components exist (if not, the evaluation stops), but also isn't ideal.

As you can see, the property names are still duplicated in the code. E.g. in the code above, `user.address` appears three times.

And now, finally, the optional chaining comes to the rescue!
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

## Поизборна верига

Поизборната верига `?.` спира веригата и връща `undefined` ако парчето преди `?.` е `undefined` или `null`.

**По-нататък в тази статия, за краткост, ще кажем, че нещо "съществува" ако не е `null` или `undefined`.**

<<<<<<< HEAD
Ето сигурния начин за достъп `user.address.street`:
=======
Here's the safe way to access `user.address.street` using `?.`:
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

```js run
let user = {}; // потребителят е без адрес

alert( user?.address?.street ); // undefined (Няма грешка)
```

<<<<<<< HEAD
Прочетенето на адреса с `user?.address` работи дори ако не съществува `user` обекта:
=======
The code is short and clean, there's no duplication at all.

Reading the address with `user?.address` works even if `user` object doesn't exist:
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

```js run
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
```

Моля обърнете внимание: синтаксисът `?.` работи точно там, където е поставен, но не повече.

<<<<<<< HEAD
В горния пример, `user?.` позволява само `user` да е `null/undefined`.
=======
In the example above, `user?.address.street` allows only `user` to be `null/undefined`.
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

От друга страна, ако `user` не съществува, тогава то трябва да има свойството `user.address`, иначе `user?.address.street` ще даде грешка след втората точка.

```warn header="Не прекалявайте с поизборната верига"
Трябва да използваме `?.` само когато е добре, че нещо не съществува.

<<<<<<< HEAD
Например, ако според нашата логика в кода, обекта `user` трябва да е там, но `address` е по-избор, тогава `user.address?.street` би било по-добре.

Така че, ако `user` по някаква грешка е `undefined`, ще знаем за това и ще го оправим. Иначе, грешки в кода могат да бъдат заглушени, когато не е подходящо, и ще стават по-трудни за отстраняване.
=======
For example, if according to our coding logic `user` object must exist, but `address` is optional, then we should write `user.address?.street`, but not `user?.address?.street`.

So, if `user` happens to be undefined due to a mistake, we'll see a programming error about it and fix it. Otherwise, coding errors can be silenced where not appropriate, and become more difficult to debug.
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d
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
The variable must be declared (e.g. `let/const/var user` or as a function parameter). The optional chaining works only for declared variables.
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d
````

## Short-circuiting или т.нар Късо съединение

Както беше казано преди, `?.` веднага спира ("късо съединение") изпълнението ако лявата част не съществува.

<<<<<<< HEAD
Така че, ако има допълнителни функции или странични реакции, те не се появяват:
=======
So, if there are any further function calls or side effects, they don't occur.

For instance:
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

```js run
let user = null;
let x = 0;

<<<<<<< HEAD
user?.sayHi(x++); // нищо не се случва
=======
user?.sayHi(x++); // no "sayHi", so the execution doesn't reach x++
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

alert(x); // 0, стойност не се увеличава
```

<<<<<<< HEAD
## Други случаи: ?.(), ?.[]
=======
## Other variants: ?.(), ?.[]
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

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
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

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
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

For example:
```js run
<<<<<<< HEAD
// идеята на кода по-долу е да напишете user.name, ако потребителят съществува
=======
let user = null;
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

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
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

Както виждаме, всички те са лесни и прости за използване. `?.` проверява лявата част за `null/undefined` и позволява изпълнението да продължи, ако не е така.

Врига от `?.` позволява безопасен достъп до вложени свойства.

<<<<<<< HEAD
Все още, трябва да използваме `?.` внимателно, само когато е добре, че лявата част не съществува.

За да не скрие програмните грешки от нас, ако се появят.
=======
Still, we should apply `?.` carefully, only where it's acceptable that the left part doesn't to exist. So that it won't hide programming errors from us, if they occur.
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d
