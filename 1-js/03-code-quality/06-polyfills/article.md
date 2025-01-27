
# Полифили и транспилери

<<<<<<< HEAD
Езикът JavaScript постоянно се развива. Редовно се появяват нови предложения за нововъведения. Те се разгеждат и ако се прецени, че ще са полезни, ги добавят към този списък <https://tc39.github.io/ecma262/> и след това попадат в [specification](http://www.ecma-international.org/publications/standards/Ecma-262.htm).
=======
The JavaScript language steadily evolves. New proposals to the language appear regularly, they are analyzed and, if considered worthy, are appended to the list at <https://tc39.github.io/ecma262/> and then progress to the [specification](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/).
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Екипите, които стоят зад JavaScript енджините, имат собствени идеи какво да имплементират първо. Може да решат да имплементират предложения, които все още са на чернова и да отложат неща, които вече са в спецификациите, защото не са толкова интересни или са по-трудни за имплементиране.

<<<<<<< HEAD
Така че е доста типично е за двигателите да имплементират само част от стандарта.
=======
So it's quite common for an engine to implement only part of the standard.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

<<<<<<< HEAD
Добър ресурс, където може да видите кои свойства на езика се поддържат към настоящия момент е  <https://kangax.github.io/compat-table/es6/> (доста е голям, а ние имаме да учим още много).
=======
A good page to see the current state of support for language features is <https://compat-table.github.io/compat-table/es6/> (it's big, we have a lot to study yet).
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3

Като програмисти, бихме искали да използваме най-новите налични функции. Колкото повече добри неща - толкова по-добре!

<<<<<<< HEAD
От друга страна, как да направим, така че съвременният код да работи на по-стари двигатели, които все още не разбират тези последните функции?
=======
On the other hand, how to make our modern code work on older engines that don't understand recent features yet?
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

Има два инструмента за това:

1. Транспилери.
2. Полифили.

Тук, в тази глава, нашата цел е да разберем същността на това как работят и тяхното място в уеб разработката.

## Транспилери

<<<<<<< HEAD
[Транспилер](https://en.wikipedia.org/wiki/Source-to-source_compiler) е специален софтуер, който може да анализира ("да прочете и разбира") модерен код, и да го презапише използвайки старите синтактични конструкции, така че резултатът да е същият.
=======
A [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) is a special piece of software that translates source code to another source code. It can parse ("read and understand") modern code and rewrite it using older syntax constructs, so that it'll also work in outdated engines.
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

Напр. JavaScript преди 2020 г. не е имал „нулевия условен оператор“ `??`. Така че, ако посетителят използва остарял браузър, то може да не успее да разбере кода `height = height ?? 100`.

Транспилаторът ще анализира нашия код и ще пренапише `height ?? 100` в `(height !== undefined && height !== null) ? height : 100`.

```js
// преди да изпълните транспилера
height = height ?? 100;

// след като изпълните транспилера
height = (height !== undefined && height !== null) ? height : 100;
```

Сега пренаписаният код е подходящ за по-стари JavaScript двигатели.

Обикновено разработчикът стартира транспилера на собствения си компютър и след това изпраща транслирания код на сървъра.

<<<<<<< HEAD
Говорейки за имена, [Babel](https://babeljs.io) е един от най-известните транспилери.

<<<<<<< HEAD
Съвременни системи за изграждане на проекти, като [webpack](http://webpack.github.io/), осигуряват средства за автоматично стартиране на транспилер при всяка промяна на кода, така че е много лесно да се интегрира в процеса на разработка.
=======
Modern project build systems, such as [webpack](https://webpack.js.org/), provide means to run transpiler automatically on every code change, so it's very easy to integrate into development process.
>>>>>>> e2f9e5840737e00846bfd492192d8a3828820c60
=======
Speaking of names, [Babel](https://babeljs.io) is one of the most prominent transpilers out there.

Modern project build systems, such as [webpack](https://webpack.js.org/), provide a means to run a transpiler automatically on every code change, so it's very easy to integrate into the development process.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

## Полифили

Новите функции в езикови могат да включват не само синтаксисни конструкции и оператори, но и вградени функции.

<<<<<<< HEAD
Например, `Math.trunc(n)` е функция която "изрязва" десетичната част от числото, напр. `Math.trunc(1.23) = 1`.
=======
For example, `Math.trunc(n)` is a function that "cuts off" the decimal part of a number, e.g `Math.trunc(1.23)` returns `1`.
>>>>>>> 6ab384f2512902d74e4b0ff5a6be60e48ab52e96

В някои (много остарели) двигатели на JavaScript няма `Math.trunc`, така че такъв код ще се провали.

Тъй като говорим за нови функции, а не за промени в синтаксиса, няма нужда да се транслира нищо тук. Просто трябва да декларираме липсващата функция.

Скрипт, който актуализира / добавя нови функции, се нарича "polyfill" (полифил). То "допълва" празнината и добавя липсващите имплементации.

За този конкретен случай полифилът за `Math.trunc` е скрипт, който се прилага, като този:

```js
if (!Math.trunc) { // ако функцията не съществува
  // имплементираме го
  Math.trunc = function(number) {
    // Math.ceil и Math.floor съществуват дори в древни JavaScript двигатели
    // те са разгледани по-късно в ръководството
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
```

<<<<<<< HEAD
JavaScript е силно динамичен език, скриптовете могат да добавят / модифицират всякакви функции, включително и вградените такива.

Две интересни библиотеки полифили са:
=======
JavaScript is a highly dynamic language. Scripts may add/modify any function, even built-in ones.

Two interesting polyfill libraries are:
- [core js](https://github.com/zloirock/core-js) that supports a lot, allows to include only needed features.
<<<<<<< HEAD
- [polyfill.io](https://polyfill.io/) service that provides a script with polyfills, depending on the features and user's browser.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

- [core js](https://github.com/zloirock/core-js), който поддържа много, позволява да се включват само необходимите функции.
- [polyfill.io](http://polyfill.io) услуга, която предоставя скрипт с полифили, в зависимост от функциите и браузъра на потребителя.
=======
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3

## Обобщение

В тази глава бихме искали да ви мотивираме да изучавате съвременни и дори "ненадеждни" функции на езика, дори ако те все още не са добре поддържани от JavaScript двигателите.

<<<<<<< HEAD
Само не забравяйте да използвате транспилер (ако се използва съвременен синтаксис или оператори) и полифили (за да добавите функции, които биха липсвали). И те ще гарантират, че кодът работи.

<<<<<<< HEAD
Например, по-късно, когато сте запознати с JavaScript, можете да настроите система за изграждане на код, базирана на [webpack](http://webpack.github.io/) с [babel-loader](https://github.com/babel/babel-loader) плъгина.
=======
For example, later when you're familiar with JavaScript, you can setup a code build system based on [webpack](https://webpack.js.org/) with [babel-loader](https://github.com/babel/babel-loader) plugin.
>>>>>>> e2f9e5840737e00846bfd492192d8a3828820c60
=======
Just don't forget to use a transpiler (if using modern syntax or operators) and polyfills (to add functions that may be missing). They'll ensure that the code works.

For example, later when you're familiar with JavaScript, you can setup a code build system based on [webpack](https://webpack.js.org/) with the [babel-loader](https://github.com/babel/babel-loader) plugin.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

<<<<<<< HEAD
Добри ресурси, които показват текущото състояние на поддръжка за различните нови функции:
=======
Good resources that show the current state of support for various features:
- <https://compat-table.github.io/compat-table/es6/> - for pure JavaScript.
- <https://caniuse.com/> - for browser-related functions.
>>>>>>> 34a80e70f8cce5794be259d25f815d7a7db7cbe3

- <https://kangax.github.io/compat-table/es6/> - за чист JavaScript.
- <https://caniuse.com/> - за функции, свързани с браузъра.

Забележка: Браузърът Google Chrome обикновенно е най-актуализирана с функциите на езика, опитайте го ако демо кодът се проваля. Повечето демонстрации на уроци работят с всеки съвременен браузър.
