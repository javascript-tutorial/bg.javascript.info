
# Polyfills and transpilers

Езикът JavaScript постоянно се развива. Редовно се появяват нови предложения за нововъведения. Те се разгеждат и ако се прецени, че ще са полезни, ги добавят към този списък <https://tc39.github.io/ecma262/> и след това попадат в [specification](http://www.ecma-international.org/publications/standards/Ecma-262.htm).

Екипите, които стоят зад JavaScript енджините, имат собствени идеи какво да имплементират първо. Може да решат да имплементират предложения, които все още са на чернова и да отложат неща, които вече са в спека, защото не са толкова интересни или са по-трудни за имплементиране. 

Така че е доста типично зза енджините да имплементират само част от стандарта. 

Добър ресурс, където може да видите кои свойства на езика се поддържат към настоящия момент е  <https://kangax.github.io/compat-table/es6/> (той е голям, ние имаме да учим още много).

As programmers, we'd like to use most recent features. The more good stuff - the better!

<<<<<<< HEAD
Когато използваме модерните свойства на езика, някои енджини може да не поддържат нашия код. Точно както беше споменато, не всички свойства са имплементирани навсякъде. 

Тук на помощ идва Babel.

[Babel](https://babeljs.io) е [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler). Той пренаписва съвременния JavaScript код според предишния стандарт.

Всъщност има две части в Babel:

1. Първо transpiler програма, която пренаписва кода. Програмистът го стартира на своя компютър. Той пренаписва кода по стария стандарт. И после кодът се качва на уебсайта за потребителите. Съвременните системи за създаване на проекти като [webpack](http://webpack.github.io/) осигуряват средства да стартирате transpiler автоматично при всяка промяна в кода, така че е много лесно да се интегрира в процеса на разработка.

2. Второто е polyfill.

    Новите характеристики на езика може да включват нови вградени функции и синтактични конструктори.
    Транспилерът пренаписва кода, трансформирайки синтактичните конструктори в по-стари такива. Но когато се отнася до новите вградени функции, ние трябва да ги имплементираме. JavaScript е много динамичен език, скриптовете може да добавят/променят всяка функция, така че тя да се държи според новия стандарт.

    Скрипт, който модернизира/добавя нови функции, се нарича "polyfill". Той "запълва" празнината и добавя липсващите имплементации.

    Два интересни polyfills са:
    - [core js](https://github.com/zloirock/core-js) поддържа много характеристики, позволява да включите в кода само необходимите.
    - [polyfill.io](http://polyfill.io) услуга, която осигурява polyfills на скрипта, в зависимост от характеристиките и браузъра на потребителя.

Така че ако използваме съвременните свойства на езика, ще имаме нужда от transpiler и polyfill.

## Примери в ръководството

````online
Повечето примери може да се стартират на място ето така:

```js run
alert('Натиснете бутона "Play" в горния десен ъгъл, за да стартирате');
```

Примери, които използват съвременния JS ще работят само ако вашият браузър го поддържа.
````

```offline
Тъй като четете offline версията, примерите в PDF файловете не могат да се стартират. В EPUB някои от е възможно да стартират.
```

Google Chrome обикновено поддържа най-актуалните характеристики на езика, добър е за демо тестове без transpilers, но другите съвременни браузъри също работят добре.
=======
From the other hand, how to make out modern code work on older engines that don't understand recent features yet?

There are two tools for that:

1. Transpilers.
2. Polyfills.

Here, in this chapter, our purpose is to get the gist of how they work, and their place in web development.

## Transpilers

A [transpiler](https://en.wikipedia.org/wiki/Source-to-source_compiler) is a special piece of software that can parse ("read and understand") modern code, and rewrite it using older syntax constructs, so that the result would be the same.

E.g. JavaScript before year 2020 didn't have the "nullish coalescing operator" `??`. So, if a visitor uses an outdated browser, it may fail to understand the code like `height = height ?? 100`.

A transpiler would analyze our code and rewrite `height ?? 100` into `(height !== undefined && height !== null) ? height : 100`.

```js
// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;
```

Now the rewritten code is suitable for older JavaScript engines.

Usually, a developer runs the transpiler on their own computer, and then deploys the transpiled code to the server.

Speaking of names, [Babel](https://babeljs.io) is one of the most prominent transpilers out there. 

Modern project build systems, such as [webpack](http://webpack.github.io/), provide means to run transpiler automatically on every code change, so it's very easy to integrate into development process.

## Polyfills

New language features may include not only syntax constructs and operators, but also built-in functions.

For example, `Math.trunc(n)` is a function that "cuts off" the decimal part of a number, e.g `Math.trunc(1.23) = 1`.

In some (very outdated) JavaScript engines, there's no `Math.trunc`, so such code will fail.

As we're talking about new functions, not syntax changes, there's no need to transpile anything here. We just need to declare the missing function.

A script that updates/adds new functions is called "polyfill". It "fills in" the gap and adds missing implementations.

For this particular case, the polyfill for `Math.trunc` is a script that implements it, like this:

```js
if (!Math.trunc) { // if no such function
  // implement it
  Math.trunc = function(number) {
    // Math.ceil and Math.floor exist even in ancient JavaScript engines
    // they are covered later in the tutorial
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  };
}
```

JavaScript is a highly dynamic language, scripts may add/modify any functions, even including built-in ones. 

Two interesting libraries of polyfills are:
- [core js](https://github.com/zloirock/core-js) that supports a lot, allows to include only needed features.
- [polyfill.io](http://polyfill.io) service that provides a script with polyfills, depending on the features and user's browser.


## Summary

In this chapter we'd like to motivate you to study modern and even "bleeding-edge" langauge features, even if they aren't yet well-supported by JavaScript engines.

Just don't forget to use transpiler (if using modern syntax or operators) and polyfills (to add functions that may be missing). And they'll ensure that the code works.

For example, later when you're familiar with JavaScript, you can setup a code build system based on [webpack](http://webpack.github.io/) with [babel-loader](https://github.com/babel/babel-loader) plugin.

Good resources that show the current state of support for various features:
- <https://kangax.github.io/compat-table/es6/> - for pure JavaScript.
- <https://caniuse.com/> - for browser-related functions.

P.S. Google Chrome is usually the most up-to-date with language features, try it if a tutorial demo fails. Most tutorial demos work with any modern browser though.

>>>>>>> c56e6a57ac3497aab77128c5bfca13513980709b
