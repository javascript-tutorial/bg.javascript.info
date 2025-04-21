# Променливи

В повечето време, JavaScript приложенията им потрябва да работят с информация. Ето ви два примера:

1. Онлайн магазин -- информацията може да съдържа продадени продукти и количка с продукти.
2. Чат приложение -- информацията може да съдържа потребители, съобщения и много други.

Променливите се използвт да запазват информацията.

## Променливата

[Променливата](https://bg.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D0%BC%D0%B5%D0%BD%D0%BB%D0%B8%D0%B2%D0%B0_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%B0%D0%BD%D0%B5)) e "наименувана памет" за данни. Можем да използваме променливите за да съхраним We can use variables to store лакомства, посетители и други подобни данни.

За да създадем променлива в JavaScript, използвайте ключовата дума `let`.

Изразът по-долу създава (с други думи: *декларира*) променлива с име "message":

```js
let message;
```

Сега можем да сложим някакви данни в нея като използваме оператор за присвояване `=`:

```js
let message;

*!*
message = 'Hello'; // съхраняваме стринг в променливата message
*/!*
```

Стрингът вече е записан в област на паметта (в нашата RAM памет) свързан с променливата. Можем да го достъпим с името на променливата:

```js run
let message;
message = 'Hello!';

*!*
alert(message); // показва съдържанието на променливата
*/!*
```

За да сме кратки, можем да комбинираме декларирането и присвояването на променливата в една линия:

```js run
let message = 'Hello!'; // декларираме променлива и присвояваме стойност

alert(message); // Hello!
```

Също можем да декларираме няколко променливи в една линия:

```js no-beautify
let user = 'John', age = 25, message = 'Hello';
```

Това може да ви се види по-кратко, но ние не ви го препоръчваме. За по-добра четимост, моля използвайте един ред на променлива.

Многоредовия вариант е малко по-дълъг, но е много по-лесен за четене:

```js
let user = 'John';
let age = 25;
let message = 'Hello';
```

<<<<<<< HEAD
Някои хора също дефинират няколко променливи с този многоредов стил:
=======
Some people also define multiple variables in this multiline style:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

```js no-beautify
let user = 'John',
  age = 25,
  message = 'Hello';
```

...Даже и с "comma-first" стил :

```js no-beautify
let user = 'John'
  , age = 25
  , message = 'Hello';
```

Технически, всички тези варианти правят едно и също нещо. Така че, това е въпрос на личен вкус и естетика.

````smart header="`var` вместо `let`"
В по-стари скриптове, можете да намерите и друга ключова дума: `var` вместо `let`:

```js
*!*var*/!* message = 'Hello';
```

<<<<<<< HEAD
Ключовата дума `var` е почти същото като на `let`. То също декларира променлива, но е малко по-различен, от стила на "старата школа".

Има тънки различия между `let` и `var`, но засега те не ни засягат. Ще ги разгледаме подробно в главата <info:var>.
=======
The `var` keyword is *almost* the same as `let`. It also declares a variable but in a slightly different, "old-school" way.

There are subtle differences between `let` and `var`, but they do not matter to us yet. We'll cover them in detail in the chapter <info:var>.
>>>>>>> 540d753e90789205fc6e75c502f68382c87dea9b
````

## Аналогия в реалния живот

Лесно можем да схванем концепцията на "променливата", ако я представим като "кутия" с данни, с уникално именуван стикер върху нея.

<<<<<<< HEAD
Например, променливата `message` можем да си въобразим като кутия, наименуван като `"message"`, със стойност  `"Hello!"` в нея:
=======
For instance, the variable `message` can be imagined as a box labelled `"message"` with the value `"Hello!"` in it:
>>>>>>> 540d753e90789205fc6e75c502f68382c87dea9b

![ ](variable.svg)

Можем да сложим всякаква стойност в кутията.

Също така, можем и да променим стойността колкото пъти си искаме:

<<<<<<< HEAD
=======
We can also change it as many times as we want:

>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
```js run
let message;

message = 'Hello!';

message = 'World!'; // променяме стойност

alert(message);
```

Когато променим стойността, старите данни се премахват от променливата:

![ ](variable-change.svg)

Също така, можем да декларираме две променливи и да копираме данните от единия в другия.

```js run
let hello = 'Hello world!';

let message;

*!*
// копираме стойността 'Hello world' от променливата hello в message
message = hello;
*/!*

// сега двете променливи съдържат еднакви данни
alert(hello); // Hello world!
alert(message); // Hello world!
```

````warn header="Декларирането два пъти задейства грешка"
Променливата трябва да бъде декларирана само веднъж.

Повторната декларация на една и същата променлива е грешка:

```js run
let message = "This";

// повторното 'let' води до грешка
let message = "That"; // SyntaxError: 'message' has already been declared
```
Така че, трябва да декларираме променливата веднъж и след това да я реферираме без `let`.
````

<<<<<<< HEAD
```smart header="Функционални езици"
Интересно е да бележим, че съществува [функционални](https://bg.wikipedia.org/wiki/%D0%A4%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%BD%D0%BE_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%B8%D1%80%D0%B0%D0%BD%D0%B5) програмни езици, като [Scala](http://www.scala-lang.org/) или [Erlang](http://www.erlang.org/), които забраняват промяната на стойностите на променливите.
=======
```smart header="Functional languages"
<<<<<<< HEAD
It's interesting to note that there exist [functional](https://en.wikipedia.org/wiki/Functional_programming) programming languages, like [Scala](https://www.scala-lang.org/) or [Erlang](https://www.erlang.org/) that forbid changing variable values.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
=======
It's interesting to note that there exist so-called [pure functional](https://en.wikipedia.org/wiki/Purely_functional_programming) programming languages, such as [Haskell](https://en.wikipedia.org/wiki/Haskell), that forbid changing variable values.
>>>>>>> 285083fc71ee3a7cf55fd8acac9c91ac6f62105c

При такива езици, веднъж когато стойността е запазена "в кутията", то е завинаги там. Ако се наложи да запазим нещо друго, езика ни принуждава да създадем нова кутия (да декларираме нова променлива). Не можем да използваме старата.

<<<<<<< HEAD
От пръв поглед може да ви се види малко странно, но тези езици са способни на доста сериозни разработки. Повече от това, има области като паралелни изчисления, където това ограничение носи определени ползи. Изучаване на подобен език (дори ако не планирате да го използвате скоро) се препоръчва, за да разширите знанията си.
=======
Though it may seem a little odd at first sight, these languages are quite capable of serious development. More than that, there are areas like parallel computations where this limitation confers certain benefits.
>>>>>>> 285083fc71ee3a7cf55fd8acac9c91ac6f62105c
```

## Именуване на променливи [#variable-naming]

Съществува две ограничения при наименуванието на променливите в JavaScript:

1. Името трябва да съдържа само букви, цифри или символите `$` и `_`.
2. Първата буква не трябва да е цифра.

Примери на валидни имена:

```js
let userName;
let test123;
```

Когато името съдържа много думи, предимно се използва [camelCase](https://en.wikipedia.org/wiki/CamelCase). Това, camelCase, е практика на писане на фрази като думите се пишат едно след други слято като всяка дума освен първата започва на главна буква: `многоДълъгИзразОтДумиКатоТози`.

Какво е интересното тук -- символа `'$'` и долната черта `'_'` също могат да се използват в имената. Те са обикновенни символи, също като буквите, без никакво специално значение.

Тези имена са валидни:

```js run untrusted
let $ = 1; // променлива с име "$"
let _ = 2; // променлива с име "_"

alert($ + _); // 3

Примери с некоректни имена:

```js no-beautify
let 1a; // неможе да започне с цифра

let my-name; // тиретата "-" не са разрешени в името
```

<<<<<<< HEAD
```smart header="Главните и малките букви са от значение"
Променливите `apple` и `AppLE` са две различни променливи.
```

````smart header="Нелатинските букви са разрешени, но не се препоръчват"
Възможно е да използвате всякакъв език, включително кирилица или даже йероглифи, като тези:
=======
```smart header="Case matters"
Variables named `apple` and `APPLE` are two different variables.
```

````smart header="Non-Latin letters are allowed, but not recommended"
<<<<<<< HEAD
It is possible to use any language, including cyrillic letters, Chinese logograms and so on, like this:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
=======
It is possible to use any language, including Cyrillic letters, Chinese logograms and so on, like this:
>>>>>>> 540d753e90789205fc6e75c502f68382c87dea9b

```js
let имя = '...';
let 我 = '...';
```

<<<<<<< HEAD
Технически няма грешка тука, такива имена са позволени, но има международна традиция да се използва английския език при писане на имена на променливи. Дори ако пишем малък скрипт, това може да има дълъг живот за напред. На хората от други страни може да им се наложи да ги прочетат някое време.
=======
Technically, there is no error here. Such names are allowed, but there is an international convention to use English in variable names. Even if we're writing a small script, it may have a long life ahead. People from other countries may need to read it sometime.
>>>>>>> 540d753e90789205fc6e75c502f68382c87dea9b
````

````warn header="Запазени имена"
Това е [лист с резервирани думи](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords), които не могат да се използват като имена на променливи, защото са използвани от самия език.

Например: `let`, `class`, `return`, и `function` са резервирани.

Следния код дава грешка при синтаксиса:

```js run no-beautify
let let = 5; // неможе да именуваме променлива "let", грешка!
let return = 5; // също неможе да наименуваме с "return", грешка!
```
````

````warn header="Задание без 'use strict'"

Обикновенно ние трябва да дефинираме променливата преди да я използваме. Но в минали времена, то беше техническо възможно да създадем променливи чрез просто възлагане на стойността без да използваме `let`. Това все още работи ако не си сложим `use strict` в нашия скрипт, за да поддържаме съвместимост със стари скриптове.

```js run no-strict
// Забележка: няма "use strict" в този пример

num = 5; // променливата "num" е създаденa ако не съществува

alert(num); // 5
```

Това е лоша практика и може да причини грешки в стрикния режим:

```js
"use strict";

*!*
num = 5; // грешка: променливата "num" не е декларирана
*/!*
````

## Константи

За да декларираме константа (неизменяема) променлива, използвайте `const` вместо `let`:

```js
const myBirthday = '18.04.1982';
```

Променливите декларирани със `const` се наричат "константи". Стойността им не могат да се променят в последствие. При опит за промяна на стойността би довело до грешка:

```js run
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // грешка,  стойността не може да се промени
```

<<<<<<< HEAD
<<<<<<< HEAD
Когато програмистите са сигурни в това, че стойността на променливата никога няма да се промени, тогава те могат да ги декларират с `const` за да са гарантирани в това и ясно да съобщават този факт с всички.

### Константи с главна буква
=======
When a programmer is sure that a variable will never change, they can declare it with `const` to guarantee and clearly communicate that fact to everyone.
=======
When a programmer is sure that a variable will never change, they can declare it with `const` to guarantee and communicate that fact to everyone.
>>>>>>> 540d753e90789205fc6e75c502f68382c87dea9b

### Uppercase constants
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

<<<<<<< HEAD
Има широко разпространена практика да се използват константи като псевдоними за трудно запомнящи се стойности, които са известни преди изпълнението.
=======
There is a widespread practice to use constants as aliases for difficult-to-remember values that are known before execution.
>>>>>>> 540d753e90789205fc6e75c502f68382c87dea9b

Такива константи се назовават с главни букви и подчертаване.

Например, нека направим константи за цветове в така наречения "уеб" (шестнадесетичен) формат:

```js run
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...когато трябва да изберем цвят
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

Ползи:

- `COLOR_ORANGE` е много по-лесно да се запомни от `"#FF7F00"`.
- Много по-лесно е да въведете неправилно `"#FF7F00"` отколкото `COLOR_ORANGE`.
- Когато четете кода, `COLOR_ORANGE` е много по-смислен от `#FF7F00`.

Кога трябва да използваме главни букви за константа и кога трябва да я наименуваме нормално? Нека да поясним това.

<<<<<<< HEAD
Това, че "константа", просто означава, че стойността на променливата никога не се променя. Но има константи, които са известни с приоритет преди изпълнението (като шестнадесетична стойност за червено) и има константи, които се *изчисляват* по време на изпълнение, по време на екзекуция на скрипта, но не се променят след първоначалното им присвояване.
=======
Being a "constant" just means that a variable's value never changes. But some constants are known before execution (like a hexadecimal value for red) and some constants are *calculated* in run-time, during the execution, but do not change after their initial assignment.
>>>>>>> 540d753e90789205fc6e75c502f68382c87dea9b

<<<<<<< HEAD
Например:
=======
For instance:

>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
```js
const pageLoadTime = /* времето, което се е заредил уеб страницата */;
```

<<<<<<< HEAD
Стойността на „pageLoadTime“ не е известна преди зареждането на страницата, така че се наименуван нормално. Но тя все още е константа, защото не се променя след присвояването.
=======
The value of `pageLoadTime` is not known before the page load, so it's named normally. But it's still a constant because it doesn't change after the assignment.
>>>>>>> 540d753e90789205fc6e75c502f68382c87dea9b

<<<<<<< HEAD
С други думи, константи наименувани с главна буква се използват само като псевдоними за "hard-coded" (или кодирани ръчно) стойности.
=======
In other words, capital-named constants are only used as aliases for "hard-coded" values.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

## Наименувайте нещата правилно

Говорейки за променливи, има още едно изключително важно нещо.

Името на променливата трябва да има чисто и  очевидно значение, описващо данните, което съхранява.

<<<<<<< HEAD
Наименуването на променливите е едно от най-важните и сложни умения в програмирането. Бърз поглед към имената на променливите може да разкрие кой код е написан от начинаещ или опитен разработчик.

В реален проект по-голямата част от времето се изразходва за модифициране и разширяване на съществуваща кодова база, а не за писане на нещо напълно отделно от нулата. Когато се върнем към някакъв код, след като направим нещо друго за известно време, е много по-лесно да намерим информация, която е добре етикетирана. Или с други думи, когато променливите имат добри имена.
=======
Variable naming is one of the most important and complex skills in programming. A glance at variable names can reveal which code was written by a beginner versus an experienced developer.

In a real project, most of the time is spent modifying and extending an existing code base rather than writing something completely separate from scratch. When we return to some code after doing something else for a while, it's much easier to find information that is well-labelled. Or, in other words, when the variables have good names.
>>>>>>> 540d753e90789205fc6e75c502f68382c87dea9b

Моля, отделете време за размисъл за правилното име за променливата, преди да я декларирате. Ако направите това, ще ви се отплати щедро.

Някои добри правила за да следваме са:

<<<<<<< HEAD
- Използвайте лесно четими имена за човека като `userName` или `shoppingCart`.
- Стойте далеч от съкращения или кратки имена като `a`, `b`, `c`, освен ако наистина знаеш какво правиш.
- Направете имената максимално описателни и кратки. Примери за лоши имена са `data` и `value`. Такива имена не казват нищо. Добре е да ги използвате само ако контекстът на кода прави изключително очевидно към кои данни или стойности реферират променливите.
- Съгласете се за условията в рамките на вашия екип и в собствения си ум. Ако посетителят на сайта се нарича `user`, тогава трябва да назовем подобни променливи `currentUser` или `newUser` вместо `currentVisitor` или `newManInTown`.
=======
- Use human-readable names like `userName` or `shoppingCart`.
- Stay away from abbreviations or short names like `a`, `b`, and `c`, unless you know what you're doing.
- Make names maximally descriptive and concise. Examples of bad names are `data` and `value`. Such names say nothing. It's only okay to use them if the context of the code makes it exceptionally obvious which data or value the variable is referencing.
- Agree on terms within your team and in your mind. If a site visitor is called a "user" then we should name related variables `currentUser` or `newUser` instead of `currentVisitor` or `newManInTown`.
>>>>>>> 540d753e90789205fc6e75c502f68382c87dea9b

Звучи просто? Наистина е така, но създаването на описателни и кратки имена на променливи на практика не е така. Пробвайте го.

```smart header="Ново или старо?"
И последната забележка. Има някои мързеливи програмисти, които вместо да декларират нови променливи, са склонни да използват отново вече съществуващите.

И като резултат на това техните променливи са като кутии, в които хората хвърлят различни неща, без да сменят стикерите си. Какво има вътре в кутията сега? Кой знае? Трябва да се приближим и да проверим.

Такива програмисти спестяват малко от декларарането на променливи , но губят десет пъти повече при отстраняване на грешки.

Допълнителната променлива е добро, а не зло.

Съвременните JavaScript минификатори и браузъри оптимизират кода достатъчно добре, така че да не създават проблеми с производителността. Използването на различни променливи за различни стойности може дори да помогне на двигателя да оптимизира вашия код.
```

## Обобщение

Можем да декларираме променливи, за да съхраненим данни, като използваме ключовите думи `var`, `let` или `const`.

- `let` -- е модерния начин за декларация на променлива.
- `var` -- е деклариране по стила на "старата школа". Обикновено ние изобщо не го използваме, но ще покрием фините разлики от `let` в глава <info:var>, само в случай, че имате нужда от тях.
- `const` -- е като `let`, но стойността й не може да се промени.

Променливите трябва да бъдат назовавани по начин, който ни позволява лесно да разберем какво има вътре в тях.
