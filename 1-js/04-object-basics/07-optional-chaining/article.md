
# Поизборна верига '?.'

[recent browser="new"]

Поизборната верига `?.` е доказан начин за защита от грешки при достъп до свойства на вложени обекти, дори ако междинното свойство не съществува.

## Проблемът на "несъществуващото свойство"

Ако току-що сте започнали да четете ръководството и да научите JavaScript, може би още не сте се срещнали с проблема, но то е доста често срещан.

Като пример, нека да кажем, че имаме обекти `user`, които държат информация относно нашите потребители.

Повечето от нашите потребители са адресирани в свойството `user.address`, с улица`user.address.street`, но някои от тях не са ги предоставили.

При подобно ситуация, когато опитаме да вземем стойността от `user.address.street`, и се окаже, че потребителят е без адрес, ние ще получим грешка:

```js run
let user = {}; // обекта `user` без свойството "address"

alert(user.address.street); // Грешка!
```

Това е очакваният резултат. JavaScript работи така. Като `user.address` е `undefined`, при опит за взимане стойността на `user.address.street` се проваля с грешка.

В много практически случаи бихме предпочели да получим `undefined` вместо грешка тук (означаващ "няма улица").

<<<<<<< HEAD
...И още един пример. В Уеб разработката, можем да получим обект, който съответства на елемент от уеб страницата, чрез извикване със специален метод, като `document.querySelector('.elem')`, която изисква аргумент за намиране на дадения елемент, и ще връща `null` когато този елемент не е намерен или несъществува.
=======
...and another example. In Web development, we can get an object that corresponds to a web page element using a special method call, such as `document.querySelector('.elem')`, and it returns `null` when there's no such element.
>>>>>>> e2f9e5840737e00846bfd492192d8a3828820c60

```js run
// document.querySelector('.elem') е `null` ако няма такъв елемент
let html = document.querySelector('.elem').innerHTML; // грешка ако то е `null`
```

<<<<<<< HEAD
Още веднъж, ако елементът не съществува, ще получим грешка при опит за достъп свойстово `.innerHTML` на `null` обект. И в някои случаи, когато отсъствието на елемента е нормално, бихме искали да избегнем грешката и просто да приемем `html = null` като резултат.
=======
Once again, if the element doesn't exist, we'll get an error accessing `.innerHTML` property of `null`. And in some cases, when the absence of the element is normal, we'd like to avoid the error and just accept `html = null` as the result.
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

Как бихме могли да направим това?

Очевидното решение би било да се провери стойността с помощта `if` или условния оператор `?`, преди да осъществим достъп до свойството, подобно на това:

```js
let user = {};

alert(user.address ? user.address.street : undefined);
```

<<<<<<< HEAD
Работи, няма грешки... Но е доста неелегантно. Както виждате, `"user.address"` се появява два пъти в кода. За по-дълбоко вложени свойства това се превръща в проблем, тъй като се изискват повече повторения.

Напр. нека опитаме да получим `user.address.street.name`.

Трябва да проверим `user.address` и `user.address.street`:
=======
It works, there's no error... But it's quite inelegant. As you can see, the `"user.address"` appears twice in the code.

Here's how the same would look for `document.querySelector`:

```js run
let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;
```

We can see that the element search `document.querySelector('.elem')` is actually called twice here. Not good.

For more deeply nested properties, it becomes even uglier, as more repetitions are required.

E.g. let's get `user.address.street.name` in a similar fashion.
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

```js
let user = {}; // `user` няма адрес

alert(user.address ? user.address.street ? user.address.street.name : null : null);
```

Това е просто ужасно, дори някои могат да имат проблеми с разбирането на такъв код.

<<<<<<< HEAD
Всъщност не ни пука, тъй като има по-добър начин да го напишем използвайки оператора `&&`:
=======
There's a little better way to write it, using the `&&` operator:
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

```js run
let user = {}; // потребителят е без адрес

alert( user.address && user.address.street && user.address.street.name ); // undefined (Няма грешка)
```

Целият път до свойството гарантира, че всички компоненти съществуват (ако не, условието спира), но също така и това не е идеалния начин.

Както виждате, имената на свойствата все още се дублират в кода. Например в горния код, `user.address` се появява 3 пъти.

Ето защо поизборна верига `?.` бе добавен към езика. За да разрешите този проблем веднъж завинаги!

## Поизборна верига

<<<<<<< HEAD
Поизборната верига `?.` спира веригата, ако парчето преди `?.` е `undefined` или `null` и връща тази част.
=======
The optional chaining `?.` stops the evaluation if the value before `?.` is `undefined` or `null` and returns `undefined`.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

**По-нататък в тази статия, за краткост, ще кажем, че нещо "съществува" ако не е `null` или `undefined`.**

<<<<<<< HEAD
С други думи, `value?.prop`:
=======
In other words, `value?.prop`:
- works as `value.prop`, if `value` exists,
- otherwise (when `value` is `undefined/null`) it returns `undefined`.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

- е същото като `value.prop` ако `value` съществува,
- иначе (когато `value` е `undefined/null`) връща `undefined`.

Ето ви сигурния начин за достъп до `user.address.street` използвайки `?.`:

```js run
let user = {}; // потребителят е без адрес

alert( user?.address?.street ); // undefined (Няма грешка)
```

Кодът е кратък и изчистен, общо взето няма дублиране.

<<<<<<< HEAD
Прочетенето на адреса с `user?.address` работи дори ако не съществува `user` обект:
=======
Here's an example with `document.querySelector`:

```js run
let html = document.querySelector('.elem')?.innerHTML; // will be undefined, if there's no element
```

>>>>>>> ac7daa516fa8e687427eac51186af97154748afa
Reading the address with `user?.address` works even if `user` object doesn't exist:

```js run
let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined
```

Моля обърнете внимание: синтаксисът `?.` работи точно там, където е поставен, но не повече.

<<<<<<< HEAD
Например в `user?.address.street.name` операторът `?.` позволява обекта `user` да бъде `null/undefined`, и това е всичко, което прави.Достъпът до други свойства се извършва по обикновения начин.Ако искаме някои от тях да са по избор, тогава ще трябва да замените още `.` с оператора `?.`.
=======
E.g. in `user?.address.street.name` the `?.` allows `user` to safely be `null/undefined` (and returns `undefined` in that case), but that's only for `user`. Further properties are accessed in a regular way. If we want some of them to be optional, then we'll need to replace more `.` with `?.`.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

```warn header="Не прекалявайте с поизборната верига"
Трябва да използваме `?.` само когато е добре, че нещо не съществува.

<<<<<<< HEAD
Например, ако според нашата логика в кода, обекта `user` трябва да е там, но `address` е по-избор, тогава `user.address?.street` би било по-добре.

Така че, ако `user` по някаква грешка е `undefined`, ще знаем за това и ще го оправим. Иначе, грешки в кода могат да бъдат заглушени, когато не е подходящо, и ще стават по-трудни за отстраняване.
=======
For example, if according to our code logic `user` object must exist, but `address` is optional, then we should write `user.address?.street`, but not `user?.address?.street`.

Then, if `user` happens to be undefined, we'll see a programming error about it and fix it. Otherwise, if we overuse `?.`, coding errors can be silenced where not appropriate, and become more difficult to debug.
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa
```

````warn header="Променливата преди `?.` трябва да съществува!"
Ако не съществуваше променлива `user`, тогава `user?.anything` задейства грешка:

```js run
// ReferenceError: user is not defined
// Грешка при рефериране: user не съществува
user?.address;

```

Променливата трябва да бъде декларирана (например `let/const/var user` или като параметър на функция). Поизборната верига работи само с **декларираните** променливи!
````

## Short-circuiting или т.нар Късо съединение

Както беше казано преди, `?.` веднага спира ("късо съединение") изпълнението ако лявата част не съществува.

<<<<<<< HEAD
Така че, ако има допълнителни функции или странични реакции, те не се появяват.
=======
So, if there are any further function calls or operations to the right of `?.`, they won't be made.
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

Например:

```js run
let user = null;
let x = 0;

<<<<<<< HEAD
user?.sayHi(x++); // несъществува "sayHi", така изпълнението не достига `x++`
=======
user?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

alert(x); // 0, стойност не се увеличава
```

## Други случаи: ?.(), ?.[]

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
userAdmin.admin?.(); // Аз съм админ
userGuest.admin?.(); // нищо (няма подобен метод)
*/!*
```

<<<<<<< HEAD
Тук и в двата реда първо използваме точката (`userAdmin.admin`) за да вземем свойството `admin`, защото обекта на потребителя трябва да съществува, така че то да е безопасно за четене от него.

Тогава `?.()` проверява лявата част: ако съществува функция `admin`, я изпълнява (това е така и за `userGuest`). Иначе (за `userGuest`) изпълнението спира без грешки.
=======
Here, in both lines we first use the dot (`userAdmin.admin`) to get `admin` property, because we assume that the user object exists, so it's safe read from it.
=======
userAdmin.admin?.(); // I am admin
*/!*

*!*
userGuest.admin?.(); // nothing happens (no such method)
*/!*
```

Here, in both lines we first use the dot (`userAdmin.admin`) to get `admin` property, because we assume that the `user` object exists, so it's safe read from it.
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

<<<<<<< HEAD
Then `?.()` checks the left part: if the admin function exists, then it runs (that's so for `userAdmin`). Otherwise (for `userGuest`) the evaluation stops without errors.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328
=======
Then `?.()` checks the left part: if the `admin` function exists, then it runs (that's so for `userAdmin`). Otherwise (for `userGuest`) the evaluation stops without errors.
>>>>>>> 206485fc3a5465f961608b6e7303fae2e1a0e0b5

Синтаксиса `?.[]`също работи, ако искаме да използваме скоби `[]` за достъп до свойства вместо точка `.`. Подобно на предишните случаи, то позволява безопасно да четем свойство от обект, който може да не съществува.

```js run
let key = "firstName";

let user1 = {
  firstName: "John"
};

<<<<<<< HEAD
<<<<<<< HEAD
let user2 = null; // Представете си, не можахме да упълномощим потребителя

let key = "firstName";
=======
let user2 = null; 
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328
=======
let user2 = null;
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined
```

Също така можем да използваме `?.` с `delete`:

```js run
delete user?.name; // Изтриваме свойството user.name ако user съществува
```

<<<<<<< HEAD
````warn header="Можем да използваме `?.` за безопасно четене и изтриване, но не за писане"
Поизборната верига `?.` няма употреба в лявата част на заданието:
=======
````warn header="We can use `?.` for safe reading and deleting, but not writing"
The optional chaining `?.` has no use on the left side of an assignment.
>>>>>>> 206485fc3a5465f961608b6e7303fae2e1a0e0b5

Например:
```js run
let user = null;

<<<<<<< HEAD
user?.name = "John"; // Грешка, не работи
// защото undefined = "John"
```
Просто не работи толкова умно.
=======
user?.name = "John"; // Error, doesn't work
// because it evaluates to: undefined = "John"
```

>>>>>>> ac7daa516fa8e687427eac51186af97154748afa
````

## Обобщение

Синтаксисът `?.` име три форми:

1. `обект?.свойство` -- връща свойството `обект.свойство` ако `обект` съществува, в противен случай `undefined`.
2. `обект?.[свойство]` -- връща свойството `обект[свойство]` ако `обект` съществува, в противен случай `undefined`.
3. `обект?.функция()` -- извиква функцията `обект.функция()` ако `обект` съществува, в противен случай връща `undefined`.

Както виждаме, всички те са лесни и прости за използване. `?.` проверява лявата част за `null/undefined` и позволява изпълнението да продължи, ако не е така.

Верига от `?.` позволява безопасен достъп до вложени свойства.

<<<<<<< HEAD
<<<<<<< HEAD
Все още, трябва да използваме `?.` внимателно, само когато е допустимо, че лявата част на извикването не съществува, за да не скрие програмните грешки от нас, ако се появят.
=======
Still, we should apply `?.` carefully, only where it's acceptable that the left part doesn't exist. So that it won't hide programming errors from us, if they occur.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328
=======
Still, we should apply `?.` carefully, only where it's acceptable, according to our code logic, that the left part doesn't exist. So that it won't hide programming errors from us, if they occur.
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa
