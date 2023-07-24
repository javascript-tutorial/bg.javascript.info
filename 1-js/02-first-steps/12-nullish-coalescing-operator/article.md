# Нулев условен оператор '??'

[recent browser="new"]

Нулевия условен оператор се пише с двойни въпросителни знака `??`.

<<<<<<< HEAD
То третира `null` и `undefined` по-подобен начин, ще използваме специален термин тук, в тази статия. Ще кажем, че изразът е "дефиниран" там където нито е `null` нито `undefined`.
=======
As it treats `null` and `undefined` similarly, we'll use a special term here, in this article. For brevity, we'll say that a value is "defined" when it's neither `null` nor `undefined`.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Резултатът от `a ?? b` е:

- Ако `a` е дефиниран, тогава е `a`
- Ако `a` не е дефиниран, тогава е `b`.

Или с други думи, `??` връща първия аргумент, което не е `null/undefined`. В противен случай, връща втория.

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

The common use case for `??` is to provide a default value.

For example, here we show `user` if its value isn't `null/undefined`, otherwise `Anonymous`:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

```js run
let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)
```

Ето и примера с `user` присвоено на име:

```js run
let user = "John";

alert(user ?? "Anonymous"); // John (user is not null/undefined)
```

Можем да използваме и последователност от `??` за да изберем първата стойност от списък, който стойности не са `null/undefined`.

<<<<<<< HEAD
Представете си, че ние имаме потребители и те имат променливите `firstName`, `lastName` и `nickName` за тяхното първо име, фамилно име и прякор.Всички те могат да бъдат `undefined`, ако потребителят реши да не въвежда никаква стойност.

Бихме искали да покажем потребителското име: една от тези три променливи или да покажем „Anonymous“, ако никоя от тях не е зададено.
=======
Let's say we have a user's data in variables `firstName`, `lastName` or `nickName`. All of them may be not defined, if the user decided not to fill in the corresponding values.

We'd like to display the user name using one of these variables, or show "Anonymous" if all of them are `null/undefined`.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

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

От друга страна, нулевият условен оператор `??` е добавен към JavaScript едва наскоро, и причината за това беше, че хората не бяха съвсем доволни с `||`.
=======
Historically, the OR `||` operator was there first. It's been there since the beginning of JavaScript, so developers were using it for such purposes for a long time.
>>>>>>> d694e895efe89922a109702085b6ca1efeffea10

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

- `height || 100` проверява `height` дали е неправилна стойност, и то наистина е така.
    - така че резултатът е вторият аргумент, `100`.
- `height ?? 100` проверява `height` дали е `null/undefined`, и то не е,
    - затова връща `height`, което е `0`.

Ако нулата е валидна стойност за `height`, тогава не би трябвало да се заменя с този с подразбиране, което означава че `??` работи правилно.

## Предимства

<<<<<<< HEAD
<<<<<<< HEAD
Предимството на оператора `??` е доста ниска: `5` в [MDN таблицата](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table), докато на `||` е `6`.
=======
The precedence of the `??` operator is the same as `||`. They both equal `4` in the [MDN table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table).
>>>>>>> e2f9e5840737e00846bfd492192d8a3828820c60
=======
The precedence of the `??` operator is the same as `||`. They both equal `3` in the [MDN table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table).
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Това означава, че както оператора ИЛИ `||`, нулевия условен оператор `??` се оценява преди `=` и `?`,но след повечето други операции, като `+`, `*`.

<<<<<<< HEAD
Ако трябва да изберем стойност с `??` в сложен израз или израз с други оператори, помислете за добавяне на скоби:
=======
So we may need to add parentheses in expressions like this:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

```js run
let height = null;
let width = null;

// важно:използвайте скоби
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

Иначе, ако пропуснем скоби, `*` има по-голямото предимство от `??` и ще се изпълни пръв и ще води до грешни резултати.

```js
// без скоби
let area = height ?? 100 * width ?? 50;

<<<<<<< HEAD
// ...работи по същия начин като този (вероятно не е това, което искаме):
=======
// ...works this way (not what we want):
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
let area = height ?? (100 * width) ?? 50;
```

### Използване ?? с && или ||

Поради причините за безопасността, JavaScript забранява използването `??` заедно с операторите `&&` и `||`, освен ако приоритетът не е изрично посочен със скоби.

Кодът по-долу задейства синтаксична грешка:

```js run
let x = 1 && 2 ?? 3; // Синтаксична грешка
```

Ограничението със сигурност е спорно, защото беше добавен към спецификацията на езика с цел да се избегнат грешки в програмирането, тъй като хората започнаха да преминават от `||` към `??`.

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
