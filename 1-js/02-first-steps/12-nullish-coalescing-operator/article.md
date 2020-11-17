# Nullish coalescing operator - Нулев условен оператор '??'

[recent browser="new"]

<<<<<<< HEAD
Нулевия условен оператор `??` осигурява кратък синтаксис за избор на първата "дефиниранина" променлива от дадения лист.

Резултатът от `a ?? b` е:
- `a` ако не е `null` или `undefined`,
- `b`, в противен случай.

Така, `x = a ?? b` е кратък еквивалент на:
=======
Here, in this article, we'll say that an expression is "defined" when it's neither `null` nor `undefined`.

The nullish coalescing operator is written as two question marks `??`.

The result of `a ?? b` is:
- if `a` is defined, then `a`,
- if `a` isn't defined, then `b`.


In other words, `??` returns the first argument if it's not `null/undefined`. Otherwise, the second one.

The nullish coalescing operator isn't anything completely new. It's just a nice syntax to get the first "defined" value of the two.

We can rewrite `result = a ?? b` using the operators that we already know, like this:
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058

```js
result = (a !== null && a !== undefined) ? a : b;
```

<<<<<<< HEAD
Ето един по-дълъг пример.

Представете си, че ние имаме потребители и те имат променливите `firstName`, `lastName` и `nickName` за тяхното първо име, фамилно име и прякор.Всички те могат да бъдат `undefined`, ако потребителят реши да не въвежда никаква стойност.

Бихме искали да покажем потребителското име: една от тези три променливи или да покажем „Anonymous“, ако нищо не е зададено.

Нека използваме `??` оператора, за да изберете първия дефиниран:
=======
The common use case for `??` is to provide a default value for a potentially undefined variable.

For example, here we show `Anonymous` if `user` isn't defined:

```js run
let user;

alert(user ?? "Anonymous"); // Anonymous
```

Of course, if `user` had any value except `null/undefined`, then we would see it instead:

```js run
let user = "John";

alert(user ?? "Anonymous"); // John
```

We can also use a sequence of `??` to select the first value from a list that isn't `null/undefined`.

Let's say we have a user's data in variables `firstName`, `lastName` or `nickName`. All of them may be undefined, if the user decided not to enter a value.

We'd like to display the user name using one of these variables, or show "Anonymous" if all of them are undefined.

Let's use the `??` operator for that:
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058

```js run
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

<<<<<<< HEAD
// показва първата ненулева / неопределена стойност
=======
// shows the first defined value:
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058
*!*
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
*/!*
```

## Сравнение с ||

<<<<<<< HEAD
ИЛИ `||` операторът може да се използва по същия начин като `??`. Всъщност можем да заменим `??` с `||` в кода по-горе и да получим същия резултат, както беше описано в [предишната глава](info:logical-operators#or-finds-the-first-truthy-value).

Важната разлика е в това:
- `||` връща първия *вярна* стойност.
- `??` връща първия *дефинирана* стойност.

Това е много важно, когато искаме да сравним `null/undefined` от `0`.

Например, помислете за това:
=======
The OR `||` operator can be used in the same way as `??`, as it was described in the [previous chapter](info:logical-operators#or-finds-the-first-truthy-value).

For example, in the code above we could replace `??` with `||` and still get the same result:

```js run
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058

// shows the first truthy value:
*!*
alert(firstName || lastName || nickName || "Anonymous"); // Supercoder
*/!*
```

<<<<<<< HEAD
Това определя `height` на `100` ако то не е дефиниран.

Нека го сравним с `||`:
=======
The OR `||` operator exists since the beginning of JavaScript, so developers were using it for such purposes for a long time.

On the other hand, the nullish coalescing operator `??` was added to JavaScript only recently, and the reason for that was that people weren't quite happy with `||`.

The important difference between them is that:
- `||` returns the first *truthy* value.
- `??` returns the first *defined* value.

In other words, `||` doesn't distinguish between `false`, `0`, an empty string `""` and `null/undefined`. They are all the same -- falsy values. If any of these is the first argument of `||`, then we'll get the second argument as the result.

In practice though, we may want to use default value only when the variable is `null/undefined`. That is, when the value is really unknown/not set.

For example, consider this:
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058

```js run
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0
```

<<<<<<< HEAD
Тук, `height || 100` третира нулевата височина като неустановена, също като `null`, `undefined` или всяка друга невярна стойност. Така нулата става `100`.

Кодът `height ?? 100` връща `100` само ако `height` е точно `null` или `undefined`. Така че нулата остава "както си е".

Кое поведение е по-добре зависи от конкретния случай на употреба. Когато нулевата височина е валидна стойност, което не трябва да пипаме, тогава `??` е за предпочитане.
=======
- The `height || 100` checks `height` for being a falsy value, and it really is.
    - so the result is the second argument, `100`.
- The `height ?? 100` checks `height` for being `null/undefined`, and it's not,
    - so the result is `height` "as is", that is `0`.

If the zero height is a valid value, that shouldn't be replaced with the default, then `??` does just the right thing.
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058

## Предимства

<<<<<<< HEAD
Предимствата на оператора `??` са доста ниски: `5` в [MDN таблицата](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table).

Така `??` се оценява след повечето други операции, но преди `=` и `?`.

Ако трябва да изберем стойност с `??` в сложен израз, помислете за добавяне на скоби:
=======
The precedence of the `??` operator is rather low: `5` in the [MDN table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table). So `??` is evaluated before `=` and `?`, but after most other operations, such as `+`, `*`.

So if we'd like to choose a value with `??` in an expression with other operators, consider adding parentheses:
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058

```js run
let height = null;
let width = null;

// важно:използвайте скоби
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
```

<<<<<<< HEAD
Иначе,ако пропуснем скоби, `*` има по-голямото предимство от `??` и ще се изпълни пръв.

Това би било същото като:

```js
// вероятно не е правилно
let area = height ?? (100 * width) ?? 50;
```

Има и свързани ограничения на ниво език.

**Поради причини по безопасността, забранено е да се използва `??` заедно с операторите `&&` и `||`.**
=======
Otherwise, if we omit parentheses, then as `*` has the higher precedence than `??`, it would execute first, leading to incorrect results.

```js
// without parentheses
let area = height ?? 100 * width ?? 50;

// ...works the same as this (probably not what we want):
let area = height ?? (100 * width) ?? 50;
```

### Using ?? with && or ||

Due to safety reasons, JavaScript forbids using `??` together with `&&` and `||` operators, unless the precedence is explicitly specified with parentheses.
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058

Кодът по-долу задейства синтаксична грешка:

```js run
let x = 1 && 2 ?? 3; // Синтаксична грешка
```

<<<<<<< HEAD
Ограничението със сигурност е спорно, защото беше добавен към спецификацията на езика с цел да се избегнат грешки в програмирането, тъй като хората започнаха да преминават към `??` от `||`.
=======
The limitation is surely debatable, but it was added to the language specification with the purpose to avoid programming mistakes, when people start to switch to `??` from `||`.
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058

Използвайте изрични скоби, за да го заобиколите:

```js run
*!*
let x = (1 && 2) ?? 3; // Работи
*/!*

alert(x); // 2
```

## Обобщение

<<<<<<< HEAD
- Нулевия условен оператор `??` предоставя кратък начин за избор на "дефиниранина" променлива от даден лист.
=======
- The nullish coalescing operator `??` provides a short way to choose the first "defined" value from a list.
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058

    Използва се за задаване на стойности по подразбиране на променливи:

    ```js
    // задава height=100, ако height е null или undefined
    height = height ?? 100;
    ```

<<<<<<< HEAD
- Операторът `??` има много ниско предимство, малко по-висока от `?` и `=`.
- Забранено е използването му с `||` или `&&` без изрични скоби.
=======
- The operator `??` has a very low precedence, only a bit higher than `?` and `=`, so consider adding parentheses when using it in an expression.
- It's forbidden to use it with `||` or `&&` without explicit parentheses.
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058
