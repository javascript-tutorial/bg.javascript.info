
# Поизборна верига '?.'

[recent browser="new"]

<<<<<<< HEAD
Поизборната верига `?.` е доказан начин за защита от грешки при достъп до свойства на вложени обекти, дори ако междинното свойство не съществува.

## Проблемът
=======
The optional chaining `?.` is a safe way to access nested object properties, even if an intermediate property doesn't exist.

## The "non-existing property" problem
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

Ако токущо Ако току-що сте започнали да четете ръководството и да научите JavaScript, може би още не сте се срещнали с проблема, но то е доста често срещан.

<<<<<<< HEAD
Например, някои от нашите потребители имат адреси, но малцина не ги предоставят. Тогава не можем безопасно да четем `user.address.street`:

```js run
let user = {}; // потребителят е без адрес
=======
As an example, let's say we have `user` objects that hold the information about our users. 

Most of our users have addresses in `user.address` property, with the street `user.address.street`, but some did not provide them.

In such case, when we attempt to get `user.address.street`, and the user happens to be without an address, we get an error:

```js run
let user = {}; // a user without "address" property
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

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
That's the expected result. JavaScript works like this. As `user.address` is `undefined`, an attempt to get `user.address.street` fails with an error. 

In many practical cases we'd prefer to get `undefined` instead of an error here (meaning "no street").

...And another example. In the web development, we can get an object that corresponds to a web page element using a special method call, such as `document.querySelector('.elem')`, and it returns `null` when there's no such element.

```js run
// document.querySelector('.elem') is null if there's no element
let html = document.querySelector('.elem').innerHTML; // error if it's null
```

Once again, if the element doesn't exist, we'll get an error accessing `.innerHTML` of `null`. And in some cases, when the absence of the element is normal, we'd like to avoid the error and just accept `html = null` as the result.

How can we do this?

The obvious solution would be to check the value using `if` or the conditional operator `?`, before accessing its property, like this:

```js
let user = {};

alert(user.address ? user.address.street : undefined);
```

It works, there's no error... But it's quite inelegant. As you can see, the `"user.address"` appears twice in the code. For more deeply nested properties, that becomes a problem as more repetitions are required.

E.g. let's try getting `user.address.street.name`.

We need to check both `user.address` and `user.address.street`:

```js
let user = {}; // user has no address

alert(user.address ? user.address.street ? user.address.street.name : null : null);
```

That's just awful, one may even have problems understanding such code. 

Don't even care to, as there's a better way to write it, using the `&&` operator:
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

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

As you can see, property names are still duplicated in the code. E.g. in the code above, `user.address` appears three times.

That's why the optional chaining `?.` was added to the language. To solve this problem once and for all!
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

## Поизборна верига

<<<<<<< HEAD
Поизборната верига `?.` спира веригата и връща `undefined` ако парчето преди `?.` е `undefined` или `null`.
=======
The optional chaining `?.` stops the evaluation if the part before `?.` is `undefined` or `null` and returns that part.
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

**По-нататък в тази статия, за краткост, ще кажем, че нещо "съществува" ако не е `null` или `undefined`.**

<<<<<<< HEAD
Ето сигурния начин за достъп `user.address.street`:
=======
In other words, `value?.prop`:
- is the same as `value.prop` if `value` exists,
- otherwise (when `value` is `undefined/null`) it returns that `value`.

Here's the safe way to access `user.address.street` using `?.`:
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

```js run
let user = {}; // потребителят е без адрес

alert( user?.address?.street ); // undefined (Няма грешка)
```

<<<<<<< HEAD
Прочетенето на адреса с `user?.address` работи дори ако не съществува `user` обекта:
=======
The code is short and clean, there's no duplication at all.

Reading the address with `user?.address` works even if `user` object doesn't exist:
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

```js run
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
```

Моля обърнете внимание: синтаксисът `?.` работи точно там, където е поставен, но не повече.

<<<<<<< HEAD
В горния пример, `user?.` позволява само `user` да е `null/undefined`.

От друга страна, ако `user` не съществува, тогава то трябва да има свойството `user.address`, иначе `user?.address.street` ще даде грешка след втората точка.
=======
E.g. in `user?.address.street.name` the `?.` allows `user` to be `null/undefined`, but it's all it does. Further properties are accessed in a regular way. If we want some of them to be optional, then we'll need to replace more `.` with `?.`.
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

```warn header="Не прекалявайте с поизборната верига"
Трябва да използваме `?.` само когато е добре, че нещо не съществува.

<<<<<<< HEAD
Например, ако според нашата логика в кода, обекта `user` трябва да е там, но `address` е по-избор, тогава `user.address?.street` би било по-добре.

Така че, ако `user` по някаква грешка е `undefined`, ще знаем за това и ще го оправим. Иначе, грешки в кода могат да бъдат заглушени, когато не е подходящо, и ще стават по-трудни за отстраняване.
=======
For example, if according to our coding logic `user` object must exist, but `address` is optional, then we should write `user.address?.street`, but not `user?.address?.street`.

So, if `user` happens to be undefined due to a mistake, we'll see a programming error about it and fix it. Otherwise, coding errors can be silenced where not appropriate, and become more difficult to debug.
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d
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
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d
````

## Short-circuiting или т.нар Късо съединение

Както беше казано преди, `?.` веднага спира ("късо съединение") изпълнението ако лявата част не съществува.

<<<<<<< HEAD
Така че, ако има допълнителни функции или странични реакции, те не се появяват:
=======
So, if there are any further function calls or side effects, they don't occur.

For instance:
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

```js run
let user = null;
let x = 0;

<<<<<<< HEAD
user?.sayHi(x++); // нищо не се случва
=======
user?.sayHi(x++); // no "sayHi", so the execution doesn't reach x++
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

alert(x); // 0, стойност не се увеличава
```

<<<<<<< HEAD
## Други случаи: ?.(), ?.[]
=======
## Other variants: ?.(), ?.[]
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

Поизборната верига `?.` не е оператор, но специална синтаксична конструкция,който също работи с функции и квадратни скоби.

Например, `?.()` се използва за извикване на функция, която може да не съществува.

В кода по-долу, някои от нашите потребители имат функция `admin`, а някои нямат:

```js run
let userAdmin = {
  admin() {
    alert("Аз съм админ");
  }
};

let userGuest = {};

*!*
<<<<<<< HEAD
user1.admin?.(); // Аз съм админ
user2.admin?.();
*/!*
```

Тук и в двата реда първо използваме точката `.`, за да получим свойство `admin`, тъй като потребителският обект трябва да съществува, така че да е безопасно да се чете от него.

Тогава `?.()` проверява лявата част: ако админ функцията съществува, тогава я тече (`user1`). Иначе (`user2`) изпълнението спира без грешки.
=======
userAdmin.admin?.(); // I am admin
*/!*

*!*
userGuest.admin?.(); // nothing (no such method)
*/!*
```

Here, in both lines we first use the dot (`user1.admin`) to get `admin` property, because the user object must exist, so it's safe read from it.

Then `?.()` checks the left part: if the admin function exists, then it runs (that's so for `user1`). Otherwise (for `user2`) the evaluation stops without errors.
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

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
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

For example:
```js run
<<<<<<< HEAD
// идеята на кода по-долу е да напишете user.name, ако потребителят съществува
=======
let user = null;
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

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
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d

Както виждаме, всички те са лесни и прости за използване. `?.` проверява лявата част за `null/undefined` и позволява изпълнението да продължи, ако не е така.

Врига от `?.` позволява безопасен достъп до вложени свойства.

<<<<<<< HEAD
Все още, трябва да използваме `?.` внимателно, само когато е добре, че лявата част не съществува.

За да не скрие програмните грешки от нас, ако се появят.
=======
Still, we should apply `?.` carefully, only where it's acceptable that the left part doesn't to exist. So that it won't hide programming errors from us, if they occur.
>>>>>>> dccca58f268ad6d5a6f2160613a8ea3c5cd53a2d
