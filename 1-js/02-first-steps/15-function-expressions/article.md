# Function expressions (Функционални изрази)

В JavaScript, функцията не е "магическа езикова структура", а специфичен вид стойност.

Синтаксисът, който използвахме преди, се нарича *Function Declaration* (деклариране на функция):

```js
function sayHi() {
  alert( "Здравей" );
}
```

Има и друг синтаксис за създаване на функция, наречен *Function Expression*.

Той изглежда така:

```js
let sayHi = function() {
  alert( "Здравей" );
};
```

Тук, функцията се създава и присвоява на променливата експлицитно, като всяка друга стойност. Без значение как е дефинирана функцията, тя е просто стойност, записана в променливата `sayHi`.

Значението на тези примери код е едно и също: "създай функция и  я запиши в променливата `sayHi`".

Ние дори можем да отпечатаме тази стойност посредством `alert`:

```js run
function sayHi() {
  alert( "Здравей" );
}

*!*
alert( sayHi ); // показва кода на функцията
*/!*
```

Забележете, че последната линия от кода не стартира функцията, тъй като няма скоби след `sayHi`. Има програмни езици, в които всяко споменаване името на функцията предизвиква нейното изпълнение, но в JаvaScript не е така.

В JavaScript, функцията е стойност, така че можем да я третираме като стойност. Горният код показва стринговата репрезентация, която е сорс кода.

Естествено функцията е специална стойност и в този смисъл можем да я извикаме така `sayHi()`.

Но все пак е стойност. Така че можем да работим с нея, както и с другите видове стойности.

Можем да копираме функцията в друга променлива:

```js run no-beautify
function sayHi() {   // (1) създаване на функцията
  alert( "Здравей" );
}

let func = sayHi;    // (2) копиране на функцията в променлива

func(); // Здравей     // (3) стартирай копието (работи)!
sayHi(); // Здравей    //     този код също работи (защо да не работи)
```

Ето какво се случва в кода в детайли:

1. Декларацията на функцията `(1)` създава функцията и я записва в променлива, на име `sayHi`.
2. Ред `(2)` копира я в променливата `func`. Забележете че няма скоби след `sayHi`. Ако имаше, тогава `func = sayHi()` щеше да изпише *резултата от извикването* `sayHi()` във `func`, не *кода на самата функция* `sayHi`.
3. Сега функцията може да бъде извикана по двата начина `sayHi()` и `func()`.

Също така можеше да използваме Function Expression за да декларираме `sayHi`, на първия ред:

```js
let sayHi = function() {
  alert( "Здравей" );
};

let func = sayHi;
// ...
```

Всичко работи по същия начин.


````smart header="Защо има точка и запетая в края?"
Може да се чудите, защо Функционалните изрази имат точка и запетая `;` в края, а декларацията на функцията няма:

```js
function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
}*!*;*/!*
```

Отговорът е прост:
- Няма нужда от `;` в края на блока от код и синтактични структури, които ги използват, като `if { ... }`, `for {  }`, `function f { }` и др.
- Функционалният израз се използва вътре в инструкцията: `let sayHi = ...;`, като стойност. Това не е блок от код, а по-скоро присвояване на стойност. Точката и запетаята `;` е препоръчително да се ползва в края на инструкциите, без значение каква е стойността. Така че точката и запетаята не е свързана с функционалния израз. Тя маркира краят на инструкцията.
````

## Функции за обратно извикване

Нека видим още примери за подаване на функции като стойности и използването на функционални изрази. 

Ще напишем функция `ask(question, yes, no)` с 3 параметъра:

`question`
: Текст на въпроса

`yes`
: Функция, която да се изпълни ако отговорът е "Да"

`no`
: Функция, която да се изпълни ако отговорът е "Не"

Фънкцията ще зададе въпроса `question` и в зависимост от отговора на потребителя, ще извика `yes()` или `no()`:

```js run
*!*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
*/!*

function showOk() {
  alert( "Вие се съгласихте." );
}

function showCancel() {
  alert( "Вие прекратихте изпълнението." );
}

// употреба: функции като showOk, showCancel се подават като аргументи за да питаме
("Съгласни ли сте?", showOk, showCancel);
```

В действителност такива функции са доста полезни. Основната разлика между задаването на `въпроси` в реалния живот и примера горе е, че функциите в реалния живот използват много по-сложни начини да взаимодействат с потребителя, вместо обикновено `потвърди`. В браузъра тази функционалност обикновено извикава добре-изглеждащ прозорец с въпрос. Но това е друга история.

**Аргументите `showOk` и `showCancel` на `ask` се наричат *callback functions* (функции за обратно извикване) или просто *callbacks*.**

Идеята е че подаваме функция и очакваме тя да бъде "повикана обратно" по-късно ако е необходимо. В нашия случай, `showOk` става callback при отговор "да", а `showCancel` за отговор "не".

Може да използваме функционални изрази да напишем съшата функция много по-кратко:

```js run no-beautify
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

*!*
ask(
  "Съгласен ли сте?",
  function() { alert("Вие се съгласихте."); },
  function() { alert("Вие прекратихте изпълнението."); }
);
*/!*
```

Тук функциите са декларирани направо в `ask(...)` извикването. Те нямат име и се наричат *анонимни*. Такива функции не са достъпни извън `ask` (защото не са записани в променливи), но точно това искаме тук.

Такъв код се появява в нашите скриптове съвсем естествено. Това е в духа на JavaScript.

```smart header="Функцията е стойност, която представлява \"действие\""
Обикновени стойности като стрингове или числа представляват *данни*.

Функцията може да се възприеме като *действие*.

Може да я подадем между стойности и да я стартираме когато искаме.
```


## Функционален израз и декларация на функция

Нека формулираме основните разлики между декларацията на функция и функционалните изрази.

Първо, синтаксисът: как да ги разграничаваме в кода.

- *Декларация на функция:* функция, декларирана като отделна инструкция в основния код.

    ```js
    // Декларация на функция
    function sum(a, b) {
      return a + b;
    }
    ```
- *Функционален израз:* функция, създадена вътре в израз или вътре в друг синтактичен конструкт. Тук, функцията е създадена от дясната страна на "израза за присвояване на стойсност" `=`:

    ```js
    // Функционален израз
    let sum = function(a, b) {
      return a + b;
    };
    ```

По-сложна е разликата *кога* функцията е създадена от JavaScript машината.

**Функционалeн израз се създава когато изпълненинето на кода го достигне и се използва само оттук нататък.**

След като изпълнението на кода стигне до дясната страна на `let sum = function…` -- функцията се създава и може да се използва (да се подава като стойност, да се извиква т.н. ) от тук нататък.

Функционалните декларации са различни.

**Декларацията на функцията може да се извика преди да е дефинирана**

Например глобална декларация на функция е видима в целия скрипт без значение къде е.

Това е заради вътрешните алгоритми. Когато JavaScript се приготви да стартира скрипта, той първо търси глобално декларирани функции в него и създава функциите. Може да разглеждаме това като "етап на инициализация".

И след като всички декларации на функции са обработени, кодът се изпълнява. Така има достъп до тези функции.

Например това работи:

```js run refresh untrusted
*!*
sayHi("John"); // Здравей, John
*/!*

function sayHi(name) {
  alert( `Здравей, ${name}` );
}
```

Декларацията на функцията `sayHi` е създадеба когато JavaScript се подготвя да стартира скрипта и се вижда навсякъде в него.

...Ако това беше функционален израз, тогава нямаше да работи:

```js run refresh untrusted
*!*
sayHi("John"); // грешка!
*/!*

let sayHi = function(name) {  // (*) край на магията
  alert( `Здравей, ${name}` );
};
```

Функционалните изрази се създават когато изпълнението на кода ги достигне. Това ще се случи само на ред `(*)`. Твърде късно.

Another special feature of Function Declarations is their block scope.

**In strict mode, when a Function Declaration is within a code block, it's visible everywhere inside that block. But not outside of it.**

For instance, let's imagine that we need to declare a function `welcome()` depending on the `age` variable that we get during runtime. And then we plan to use it some time later.

If we use Function Declaration, it won't work as intended:

```js run
let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ...use it later
*!*
welcome(); // Error: welcome is not defined
*/!*
```

That's because a Function Declaration is only visible inside the code block in which it resides.

Here's another example:

```js run
let age = 16; // take 16 as an example

if (age < 18) {
*!*
  welcome();               // \   (runs)
*/!*
                           //  |
  function welcome() {     //  |  
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
*!*
  welcome();               // /   (runs)
*/!*

} else {

  function welcome() {    
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

*!*
welcome(); // Error: welcome is not defined
*/!*
```

What can we do to make `welcome` visible outside of `if`?

The correct approach would be to use a Function Expression and assign `welcome` to the variable that is declared outside of `if` and has the proper visibility.

This code works as intended:

```js run
let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

*!*
welcome(); // ok now
*/!*
```

Or we could simplify it even further using a question mark operator `?`:

```js run
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

*!*
welcome(); // ok now
*/!*
```


```smart header="When to choose Function Declaration versus Function Expression?"
As a rule of thumb, when we need to declare a function, the first to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That's also better for readability, as it's easier to look up `function f(…) {…}` in the code than `let f = function(…) {…};`. Function Declarations are more "eye-catching".

...But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we've just seen an example), then Function Expression should be used.
```

## Summary

- Functions are values. They can be assigned, copied or declared in any place of the code.
- If the function is declared as a separate statement in the main code flow, that's called a "Function Declaration".
- If the function is created as a part of an expression, it's called a "Function Expression".
- Function Declarations are processed before the code block is executed. They are visible everywhere in the block.
- Function Expressions are created when the execution flow reaches them.

In most cases when we need to declare a function, a Function Declaration is preferable, because it is visible prior to the declaration itself. That gives us more flexibility in code organization, and is usually more readable.

So we should use a Function Expression only when a Function Declaration is not fit for the task. We've seen a couple of examples of that in this chapter, and will see more in the future.
