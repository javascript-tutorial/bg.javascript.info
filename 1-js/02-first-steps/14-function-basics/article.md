# Функции

Често ни се налага да извършваме сходни действия на много места в нашия код.

Например, искаме да покажем добре изглеждащо съобщение, когато визитор се логне, излезе или може би някъде другаде.
Функциите са главните "строителни блокове" на програмата. Те позволяват кода да бъде изпълнен много пъти без повторение.

Вече видяхме примери за вградени функции като `alert(message)`, `prompt(message, default)` и `confirm(question)`. Но ние също можем да създаваме функции.

## Декларация на функция

За да създадем функция използваме _декларация на функция_.

Изглежда така:

```js
function showMessage() {
  alert("Здравейте всички!");
}
```

Ключовата дума `function` е първа, следвана от името _на функцията_, след това лист от _параметри_ между скобите (разделени от запетаи, празно в примера по-горе) и най-накрая кода на функцията, познат още като "тяло на функцията", между "{}" скобите.

```js
function name(parameters) {
  ...body...
}
```

Нашата нова функция може да бъде извикана по име: `showMessage()`.

Например:

```js run
function showMessage() {
  alert( 'Здравейте всички' );
}

*!*
showMessage();
showMessage();
*/!*
```

Името на функцията `showMessage()` изпълнява кода. Тук ще видим съобщението два пъти.

Примерът ясно демонстрира една от главните цели на функцията: да избегнем дупликации на кода.

Ако някога трябва да сменим съобщението или начина по който се показва, достатъчно е да сменим кода на едно място: функцията, която го изпълнява.

## Локални вариации

Вариация декларирана във функцияата е видима единствено вътре във функцията.

Като например:

```js run
function showMessage() {
*!*
  let message = "Здравей, аз съм JavaScript!"; // локална вариация
*/!*

  alert( message );
}

showMessage(); // Здравей, аз съм JavaScript!

alert( message ); // <-- Грешка! Вариацията е локална във функцията
```

## Външни вариации

Функцията също може да има достъп до външна вариация, като например:

```js run no-beautify
let *!*userName*/!* = 'Джон';

function showMessage() {
  let message = 'Здравей, ' + *!*userName*/!*;
  alert(message);
}

showMessage(); // Здравей, Джон
```

Функцията има пълен достъп до външната вариация. Също така може да я модифицира.

Като например:

```js run
let *!*userName*/!* = 'Джон';

function showMessage() {
  *!*userName*/!* = "Боб"; // (1) промени външната вариация

  let message = 'Здравей, ' + *!*userName*/!*;
  alert(message);
}

alert( userName ); // *!*Джон*/!* преди изпълнението на функцията

showMessage();

alert( userName ); // *!*Боб*/!*, стойността беше модифицирана от функцията
```

Външната вариация се изпълнява само, ако няма локална такава.

Ако вариация със същото име е декларирана във функцията, то тогава _засенчва_ външната. Като например, в кода по-долу функцията използва локалната `userName`. Външната е игнорирана:

```js run
let userName = 'Джон';

function showMessage() {
*!*
  let userName = "Боб"; // декларира локална вариация
*/!*

  let message = 'Hello, ' + userName; // *!*Боб*/!*
  alert(message);
}

// Функцията ще създаде и използва своя собствена userName
showMessage();

alert( userName ); // *!*Джон*/!*, непроменена, функцията нямаше достъп до външната вариация
```

```smart header="Глобални вариации"
Вариации декларирани извън функции, като външната `userName` в кода по-горе, се наричат *глобални*.

Глобалните вариации са видими от всички функции (ако не са засенчени от локалните вариации).

Добра практика е да се миниманизира използването на глобални вариации. Модерният код има малко на брой глобални вариации или те въобще отсъстват. Повечето вариации са декларирани в свои собствени функции. Понякога обаче, те могат да са полезни да сухраняват проекционни данни.
```

## Параметри

Мовжем да задаваме своеобразна дата на функции изполвайки параметри (наричани също _функционални аргументи_) .

В примера по-долу, фукнцията има два параметъра: `from` и `text`.

```js run
function showMessage(*!*from, text*/!*) { // аргументи: from, text
  alert(from + ': ' + text);
}

*!*
showMessage('Ани', 'Здравей!'); // Ани: Здравей! (*)
showMessage('Ани', "Как е?"); // Ани: Как е? (**)
*/!*
```

Когато функцията е изпълнена в редовете `(*)` и `(**)`, дадените стойности са копирани в локалните вариации `from` и `text`. Функцията ги използва.

Ето още един пример: имаме вариация `from` и я предаваме на функцията. Забележи: функцията променя `from`, но промяната не е видима извън нея, защото функцията винаги получава копие от стойността:

```js run
function showMessage(from, text) {

*!*
  from = '*' + from + '*'; // прави "from" да изглежда по-добре
*/!*

  alert( from + ': ' + text );
}

let from = "Ани";

showMessage(from, "Здравей"); // *Ани*: Здравей

// стойността на "from" е същата, функцията модифицира локалното копие
alert( from ); // Ани
```

## Стойности по подразбиране

Ако не е предоставен параметър, то тогава неговата стойност става `undefined`.

Като например, познатата ни вече функция `showMessage(from, text)` може да бъде извикана с един единствен аргумент:

```js
showMessage("Анн");
```

Това не е грешка. Подобно изпълнение ще покаже `"Анн: undefined"`. Няма `text`, затова се предполага че `text === undefined`.

Ако искаме да използваме `text` по подразбиране в този случай, то тогава можем да го посочим след `=`:

```js run
function showMessage(from, *!*text = "не е зададен текст"*/!*) {
  alert( from + ": " + text );
}

showMessage("Ann"); // Анн: не е зададен текст
```

Сега ако параметърът на `text` не е зададен, ще получи стойността `"не е зададен текст"`

Тук `"не е зададен текст"` е стринг, но може да бъде по-сложен израз, който е единствено изчислен и възложен ако параматърът. Така че, това също е възможно:

```js run
function showMessage(from, text = anotherFunction()) {
  // anotherFunction() изпълнява се само, ако не е зададен текст
  // резултатът му става стойността на text
}
```

```smart header="Оценяване на параметрите по подразбиране"
При JavaScript, параметър по подразбиране се оценява всеки път, когато функцията е извикана без ресяективния параметър.

В примера по-горе, `anotherFunction()` се извиква всеки път, когато `showMessage()` е извикана без `text` параметър.
```

````smart header="Старомодни параметри по подразбиране"
Старите версии на JavaScript не поддържат параметри по подразбиране. Така че има алтернативен начин да се поддържат, които могат да бъдат намерени главно в стари кодове.

Например, изрична проверка на `undefined`:

```js
function showMessage(from, text) {
*!*
  if (text === undefined) {
    text = 'не е зададен';
  }
*/!*

  alert( from + ": " + text );
}
```

...Или `||` оператора:

```js
function showMessage(from, text) {
  // ако текста е неверен получава "default" стойност
  text = text || 'не е зададен';
  ...
}
```


````

## Връщане на стойност

Функция може да върне стойност в кода на извикване като резултат.

Най-простия пример би бил функция, която събира две стойности:

```js run no-beautify
function sum(a, b) {
  *!*return*/!* a + b;
}

let result = sum(1, 2);
alert( result ); // 3
```

Директивата `return` може да бъде на всяко място във функцията. Когато функцията я достигне, функцията спира и стойността се връща в кода на повикване (зададена на `result` по-горе).

Възможно е да има много повторения на `return` в една единствена функция. Например:

```js run
function checkAge(age) {
  if (age > 18) {
*!*
    return true;
*/!*
  } else {
*!*
    return confirm('Имаш ли разрешение от родителите?');
*/!*
  }
}

let age = prompt('На колко години си?', 18);

if ( checkAge(age) ) {
  alert( 'Получен достъп' );
} else {
  alert( 'Отказан достъп' );
}
```

Възможно е да използваме `return` без стойност. Това кара да излезем от функцията веднага.

Например:

```js
function showMovie(age) {
  if ( !checkAge(age) ) {
*!*
    return;
*/!*
  }

  alert( "Показва ти филма" ); // (*)
  // ...
}
```

В кода по-горе, ако `checkAge(age)` върне `false`, тогава `showMovie` няма да продължи към `alert`.

``smart header="Функция с празен `return` или с липсващ такъв връща `undefined`"
Ако функция не върне стойност, е същото ако върне `undefined`:

```js run
function doNothing() {
  /* празно */
}

alert(doNothing() === undefined); // true
```

Празен `return` е също като `return undefined`:

```js run
function doNothing() {
  return;
}

alert(doNothing() === undefined); // true
```

`````

````warn header="Никога не слагай нов ред между `return` и стойността"
При дълъг израз в `return`, може да е изкушаващо да го разделим на отделен ред, ето така:

```js
return
 (some + long + expression + or + whatever * f(a) + f(b))
```
That doesn't work, because JavaScript assumes a semicolon after `return`. That'll work the same as:

```js
return*!*;*/!*
 (some + long + expression + or + whatever * f(a) + f(b))
```

So, it effectively becomes an empty return.

If we want the returned expression to wrap across multiple lines, we should start it at the same line as `return`. Or at least put the opening parentheses there as follows:

```js
return (
  some + long + expression
  + or +
  whatever * f(a) + f(b)
  )
```
And it will work just as we expect it to.
`````

## Naming a function [#function-naming]

Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.

For instance, functions that start with `"show"` usually show something.

Function starting with...

- `"get…"` -- return a value,
- `"calc…"` -- calculate something,
- `"create…"` -- create something,
- `"check…"` -- check something and return a boolean, etc.

Examples of such names:

```js no-beautify
showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false
```

With prefixes in place, a glance at a function name gives an understanding what kind of work it does and what kind of value it returns.

```smart header="One function -- one action"
A function should do exactly what is suggested by its name, no more.

Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).

A few examples of breaking this rule:

- `getAge` -- would be bad if it shows an `alert` with the age (should only get).
- `createForm` -- would be bad if it modifies the document, adding a form to it (should only create it and return).
- `checkPermission` -- would be bad if it displays the `access granted/denied` message (should only perform the check and return the result).

These examples assume common meanings of prefixes. You and your team are free to agree on other meanings, but usually they're not much different. In any case, you should have a firm understanding of what a prefix means, what a prefixed function can and cannot do. All same-prefixed functions should obey the rules. And the team should share the knowledge.
```

```smart header="Ultrashort function names"
Functions that are used *very often* sometimes have ultrashort names.

For example, the [jQuery](http://jquery.com) framework defines a function with `$`. The [Lodash](http://lodash.com/) library has its core function named `_`.

These are exceptions. Generally functions names should be concise and descriptive.
```

## Functions == Comments

Functions should be short and do exactly one thing. If that thing is big, maybe it's worth it to split the function into a few smaller functions. Sometimes following this rule may not be that easy, but it's definitely a good thing.

A separate function is not only easier to test and debug -- its very existence is a great comment!

For instance, compare the two functions `showPrimes(n)` below. Each one outputs [prime numbers](https://en.wikipedia.org/wiki/Prime_number) up to `n`.

The first variant uses a label:

```js
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i); // a prime
  }
}
```

The second variant uses an additional function `isPrime(n)` to test for primality:

```js
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    *!*if (!isPrime(i)) continue;*/!*

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
```

The second variant is easier to understand, isn't it? Instead of the code piece we see a name of the action (`isPrime`). Sometimes people refer to such code as _self-describing_.

So, functions can be created even if we don't intend to reuse them. They structure the code and make it readable.

## Summary

A function declaration looks like this:

```js
function name(parameters, delimited, by, comma) {
  /* code */
}
```

- Values passed to a function as parameters are copied to its local variables.
- A function may access outer variables. But it works only from inside out. The code outside of the function doesn't see its local variables.
- A function can return a value. If it doesn't, then its result is `undefined`.

To make the code clean and easy to understand, it's recommended to use mainly local variables and parameters in the function, not outer variables.

It is always easier to understand a function which gets parameters, works with them and returns a result than a function which gets no parameters, but modifies outer variables as a side-effect.

Function naming:

- A name should clearly describe what the function does. When we see a function call in the code, a good name instantly gives us an understanding what it does and returns.
- A function is an action, so function names are usually verbal.
- There exist many well-known function prefixes like `create…`, `show…`, `get…`, `check…` and so on. Use them to hint what a function does.

Functions are the main building blocks of scripts. Now we've covered the basics, so we actually can start creating and using them. But that's only the beginning of the path. We are going to return to them many times, going more deeply into their advanced features.
