# Nullish coalescing operator - Нулев условен оператор '??'

[recent browser="new"]

<<<<<<< HEAD
Тук, в тази статия, ще си кажем, че ще използваме израз "дефиниран" когато нещо не е `null` нито `undefined`.

Нулевия условен оператор се пише с двойни въпросителни знака `??`.

Резултатът от `a ?? b` е:

- Ако `a` е дефиниран, тогава е `a`
- Ако `a` не е дефиниран, тогава е `b`.

Или с други думи, `??` връща първия аргумент, което не е `null/undefined`. В противен случай, връща втория.
=======
The nullish coalescing operator is written as two question marks `??`.

As it treats `null` and `undefined` similarly, we'll use a special term here, in this article. We'll say that an expression is "defined" when it's neither `null` nor `undefined`.

The result of `a ?? b` is:
- if `a` is defined, then `a`,
- if `a` isn't defined, then `b`.

In other words, `??` returns the first argument if it's not `null/undefined`. Otherwise, the second one.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

Нулевия условен оператор не е нещо напълно ново. Просто хубав синтаксис за получаване на първата "дефинирана" стойност от две или няколко стойности.

Можем да пренапишем `result = a ?? b` като използваме операторите, които вече познаваме, по този начин:

```js
result = (a !== null && a !== undefined) ? a : b;
```

<<<<<<< HEAD
Често използваният случай на `??` е да предостави стойност по подразбиране за потенциално недефинирана променлива.

Например, тук показваме `Anonymous` ако `user` не е дефиниран:
=======
Now it should be absolutely clear what `??` does. Let's see where it helps.

The common use case for `??` is to provide a default value for a potentially undefined variable.

For example, here we show `user` if defined, otherwise `Anonymous`:
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

```js run
let user;

alert(user ?? "Anonymous"); // Anonymous (user not defined)
```

<<<<<<< HEAD
Разбира се, ако `user` има някаква стойност освен `null/undefined`, тогава ще го видим вместо това:
=======
Here's the example with `user` assigned to a name:
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

```js run
let user = "John";

alert(user ?? "Anonymous"); // John (user defined)
```

Можем да използваме и последователност от `??` за да изберем първата стойност от списък, който стойности не са `null/undefined`.

<<<<<<< HEAD
Представете си, че ние имаме потребители и те имат променливите `firstName`, `lastName` и `nickName` за тяхното първо име, фамилно име и прякор.Всички те могат да бъдат `undefined`, ако потребителят реши да не въвежда никаква стойност.

Бихме искали да покажем потребителското име: една от тези три променливи или да покажем „Anonymous“, ако никоя от тях не е зададено.
=======
Let's say we have a user's data in variables `firstName`, `lastName` or `nickName`. All of them may be not defined, if the user decided not to enter a value.

We'd like to display the user name using one of these variables, or show "Anonymous" if all of them aren't defined.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

Нека използваме `??` оператора, за да изберете първия дефиниран:

```js run
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// показва първата стойност, която не е нулева или неопределена
*!*
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
*/!*
```

## Сравнение с ||

ИЛИ `||` операторът може да се използва по същия начин като `??`, както е описано и в [предишната глава](info:logical-operators#or-finds-the-first-truthy-value).

Например, в горния код бихме могли да заменим `??` с `||` и все пак получавате същия резултат:

```js run
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// показва първата стойност, която не е нулева или неопределена:
*!*
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
*/!*
```

<<<<<<< HEAD
ИЛИ `||` операторът съществува от началото на JavaScript, така че разработчиците го използваха за такива цели дълго време.
=======
Historically, the OR `||` operator was there first. It exists since the beginning of JavaScript, so developers were using it for such purposes for a long time.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

От друга страна, нулевият условен оператор `??` е добавен към JavaScript едва наскоро, и причината за това беше, че хората не бяха съвсем доволни с `||`.

Важната разлика е в това:

- `||` връща първата *вярна* стойност.
- `??` връща първата *дефинирана* стойност.

От друга страна, `||` не прави разлика между `false`, `0`, празен стринг `""` и `null/undefined`. Те са еднакви -- неправилни стойности. Ако някой от тях е първият аргумент на `||`, тогава ще получим втория аргумент като резултат.

На практика обаче, може да искаме да използваме стойността по подразбиране само когато променливата е `null/undefined`. Тоест, когато стойността е наистина неизвестна / не е зададена.

Например, помислете за това:

```js run
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

<<<<<<< HEAD
- `height || 100` проверява `height` дали е неправилна стойност, и то наистина е така.
    - така че резултатът е вторият аргумент, `100`.
- `height ?? 100` проверява `height` дали е `null/undefined`, и то не е,
    - затова връща `height`, което е `0`.

Ако нулата е валидна стойност за `height`, тогава не би трябвало да се заменя с този с подразбиране, което означава че `??` работи правилно.
=======
- The `height || 100` checks `height` for being a falsy value, and it's `0`, falsy indeed.
    - so the result of `||` is the second argument, `100`.
- The `height ?? 100` checks `height` for being `null/undefined`, and it's not,
    - so the result is `height` "as is", that is `0`.

In practice, the zero height is often a valid value, that shouldn't be replaced with the default. So `??` does just the right thing.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

## Предимства

<<<<<<< HEAD
Предимствата на оператора `??` са доста ниски: `5` в [MDN таблицата](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table). Така `??` се оценява преди `=` и `?`,но след повечето други операции, като `+`, `*`.
=======
The precedence of the `??` operator is about the same as `||`, just a bit lower. It equals `5` in the [MDN table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table), while `||` is `6`.

That means that, just like `||`, the nullish coalescing operator `??` is evaluated before `=` and `?`, but after most other operations, such as `+`, `*`.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

Ако трябва да изберем стойност с `??` в сложен израз или израз с други оператори, помислете за добавяне на скоби:

```js run
let height = null;
let width = null;

// важно:използвайте скоби
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

Иначе,ако пропуснем скоби, `*` има по-голямото предимство от `??` и ще се изпълни пръв и ще води до грешни резултати.

```js
// без скоби
let area = height ?? 100 * width ?? 50;

// ...работи по същия начин като този (вероятно не е това, което искаме):
let area = height ?? (100 * width) ?? 50;
```

### Използване ?? с && или ||

Поради причините за безопасността, JavaScriptзабранява използването `??` заедно с операторите `&&` и `||`, освен ако приоритетът не е изрично посочен със скоби.

Кодът по-долу задейства синтаксична грешка:

```js run
let x = 1 && 2 ?? 3; // Синтаксична грешка
```

<<<<<<< HEAD
Ограничението със сигурност е спорно, защото беше добавен към спецификацията на езика с цел да се избегнат грешки в програмирането, тъй като хората започнаха да преминават към `??` от `||`.
=======
The limitation is surely debatable, it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch from `||` to `??`.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

Използвайте изрични скоби, за да го заобиколите:

```js run
*!*
let x = (1 && 2) ?? 3; // Работи
*/!*

alert(x); // 2
```

## Обобщение

- Нулевия условен оператор `??` предоставя кратък начин за избор на първата "дефиниранина" променлива от даден лист.

    Използва се за задаване на стойности по подразбиране на променливи:

    ```js
    // задава height=100, ако height е null или undefined
    height = height ?? 100;
    ```

- Операторът `??` има много ниско предимство, малко по-висока от `?` и `=`, така че по-добре е да добавяте скоби, когато го използвате в израз.
- Забранено е използването му с `||` или `&&` без изрични скоби.
