# Function expressions (Функционални изрази)

В JavaScript, функцията не е "магическа езикова структура", а специфичен вид стойност.

Синтаксисът, който използвахме преди, се нарича *Function Declaration* (деклариране на функция):

```js
function sayHi() {
  alert( "Здравей" );
}
```

Има и друг синтаксис за създаване на функция, наречен *Function Expression*.

<<<<<<< HEAD
<<<<<<< HEAD
Той изглежда така:
=======
It allows to create a new function in the middle of any expression.
=======
It allows us to create a new function in the middle of any expression.
>>>>>>> e2f9e5840737e00846bfd492192d8a3828820c60

For example:
>>>>>>> c5358c59494b53efb832c81a5338e0a23b22c269

```js
let sayHi = function() {
  alert( "Здравей" );
};
```

<<<<<<< HEAD
Тук, функцията се създава и присвоява на променливата експлицитно, като всяка друга стойност. Без значение как е дефинирана функцията, тя е просто стойност, записана в променливата `sayHi`.

Значението на тези примери код е едно и също: "създай функция и  я запиши в променливата `sayHi`".
=======
Here we can see a variable `sayHi` getting a value, the new function, created as `function() { alert("Hello"); }`.

As the function creation happens in the context of the assignment expression (to the right side of `=`), this is a *Function Expression*.

Please note, there's no name after the `function` keyword. Omitting a name is allowed for Function Expressions.

Here we immediately assign it to the variable, so the meaning of these code samples is the same: "create a function and put it into the variable `sayHi`".

In more advanced situations, that we'll come across later, a function may be created and immediately called or scheduled for a later execution, not stored anywhere, thus remaining anonymous.

## Function is a value

<<<<<<< HEAD
Let's reiterate: no matter how the function is created, a function is a value. Both examples above store a function is `sayHi` variable.
>>>>>>> c5358c59494b53efb832c81a5338e0a23b22c269
=======
Let's reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the `sayHi` variable.
>>>>>>> a6fdfda09570a8ce47bb0b83cd7a32a33869cfad

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
2. Ред `(2)` копира я в променливата `func`. Забележете че няма скоби след `sayHi`. Ако имаше, тогава `func = sayHi()` щеше да изпише *резултата от извикването* на `sayHi()` във `func`, не *кода на самата функция* `sayHi`.
3. Сега функцията може да бъде извикана по двата начина `sayHi()` и `func()`.

<<<<<<< HEAD
Също така можеше да използваме Function Expression (функционален израз) за да декларираме `sayHi`, на първия ред:

```js
let sayHi = function() {
  alert( "Здравей" );
=======
We could also have used a Function Expression to declare `sayHi`, in the first line:

```js
let sayHi = function() { // (1) create
  alert( "Hello" );
>>>>>>> c5358c59494b53efb832c81a5338e0a23b22c269
};

let func = sayHi;  //(2)
// ...
```

Всичко работи по същия начин.


<<<<<<< HEAD
````smart header="Защо има точка и запетая в края?"
Може би се чудите, защо Функционалните изрази имат точка и запетая `;` в края, а декларацията на функцията няма:
=======
````smart header="Why is there a semicolon at the end?"
You might wonder, why do Function Expressions have a semicolon `;` at the end, but Function Declarations do not:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

```js
function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
}*!*;*/!*
```

<<<<<<< HEAD
Отговорът е прост:
- Няма нужда от `;` в края на блока от код и синтактични структури, които ги използват, като `if { ... }`, `for {  }`, `function f { }` и др.
- Функционалният израз се използва вътре в инструкцията: `let sayHi = ...;`, като стойност. Това не е блок от код, а по-скоро присвояване на стойност. Знакът точка и запетая `;` е препоръчително да се ползва в края на инструкциите, без значение каква е стойността. Така че точката и запетаята не е свързана с функционалния израз. Тя маркира края на инструкцията.
=======
The answer is simple: a Function Expression is created here as `function(…) {…}` inside the assignment statement: `let sayHi = …;`. The semicolon `;` is recommended at the end of the statement, it's not a part of the function syntax.

The semicolon would be there for a simpler assignment, such as `let sayHi = 5;`, and it's also there for a function assignment.
>>>>>>> c5358c59494b53efb832c81a5338e0a23b22c269
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

Функцията ще зададе въпроса `question` и в зависимост от отговора на потребителя, ще извика `yes()` или `no()`:

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

<<<<<<< HEAD
В действителност такива функции са доста полезни. Основната разлика между задаването на `въпроси` в реалния живот и примера горе е, че функциите в реалния живот използват много по-сложни начини за взаимодействие с потребителя, вместо обикновеното `потвърди`. В браузъра тази функционалност обикновено извикава добре изглеждащ прозорец с въпрос. Но това е друга история.
=======
In practice, such functions are quite useful. The major difference between a real-life `ask` and the example above is that real-life functions use more complex ways to interact with the user than a simple `confirm`. In the browser, such functions usually draw a nice-looking question window. But that's another story.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

**Аргументите `showOk` и `showCancel` на `ask` се наричат *callback functions* (функции за обратно извикване) или просто *callbacks*.**

Идеята е, че подаваме функция и очакваме тя да бъде "повикана обратно" по-късно ако е необходимо. В нашия случай `showOk` става callback при отговор "да", а `showCancel` за отговор "не".

<<<<<<< HEAD
Може да използваме функционални изрази да напишем съшата функция много по-кратко:
=======
We can use Function Expressions to write an equivalent, shorter function:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

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

<<<<<<< HEAD
- *Декларация на функция:* функция, декларирана като отделна инструкция в основния код.
=======
- *Function Declaration:* a function, declared as a separate statement, in the main code flow:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

    ```js
    // Декларация на функция
    function sum(a, b) {
      return a + b;
    }
    ```
<<<<<<< HEAD
- *Функционален израз:* функция, създадена вътре в израз или вътре в друг синтактичен конструкт. Тук функцията е създадена от дясната страна на "израза за присвояване на стойсност" `=`:
=======
- *Function Expression:* a function, created inside an expression or inside another syntax construct. Here, the function is created on the right side of the "assignment expression" `=`:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

    ```js
    // Функционален израз
    let sum = function(a, b) {
      return a + b;
    };
    ```

По-сложна е разликата *кога* функцията се създава от JavaScript машината.

**Функционалeн израз се създава когато изпълненинето на кода го достигне и се използва само оттук нататък.**

След като изпълнението на кода стигне до дясната страна на `let sum = function…` -- функцията се създава и може да се използва (да се подава като стойност, да се извиква и др. ) от тук нататък.

Функционалните декларации са различни.

**Декларацията на функцията може да се извика преди функцията да е дефинирана**

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

Декларацията на функцията `sayHi` е създадена когато JavaScript се подготвя да стартира скрипта и се вижда навсякъде в него.

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

Друга специална черта на Декларациите на функциите е техният обхват (block scope).

**В стриктния режим (strict mode), когато декларацията на функцията е в блок от код, тя се вижда навсякъде в този блок, но не и извън него.**

Например да си представим че трябва да декларираме функция `welcome()` , която зависи от променливата `age`. Стойността на променливата получаваме по време на изпълнение на кода. След като декларираме функцията, ще я извикаме на по-късен етап. 

Ако използваме функционална декларация, кодът няма да работи както искаме:

```js run
let age = prompt("Каква е вашата възраст?", 18);

// условно деклариране на функция
if (age < 18) {

  function welcome() {
    alert("Здравейте!");
  }

} else {

  function welcome() {
    alert("Поздравленияs!");
  }

}

// ...използваме я по-късно
*!*
welcome(); // Грешка: welcome не е дефинирана
*/!*
```

Това е защото функционалната декларация е видима само е блока от код, където е дефинирана.

Ето друг пример:

```js run
let age = 16; // вземи 16 като пример

if (age < 18) {
*!*
  welcome();                    // \   (стартира)
*/!*
<<<<<<< HEAD
                                //  |
  function welcome() {          //  |  
    alert("Здравейте!");        //  |  Функционалната декларация е достъпна
  }                             //  |  навсякъде в блока, където е декларирана
                                //  |
=======
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
*!*
  welcome();                    // /   (стартира)
*/!*

} else {

<<<<<<< HEAD
  function welcome() {    
    alert("Поздравления!");
=======
  function welcome() {
    alert("Greetings!");
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
  }
}

// Тук сме извън къдравите скоби,
// така че не виждаме функционалните декларации, направени вътре в тях.

*!*
welcome(); // Грешка: welcome не е дефиниран
*/!*
```

Как да направим `welcome` видим извън `if`?

Правилният подход е да използваме функционален израз и да запишем `welcome` в променливата, която е декларирана извън `if` и има подходяща видимост.

Този код работи правилно:

```js run
let age = prompt("Каква е вашата възраст?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Здравейте!");
  };

} else {

  welcome = function() {
    alert("Поздравления!");
  };

}

*!*
welcome(); // ok now
*/!*
```

Или може да опростим кода допълнително като използваме тернарен оператор  `?`:

```js run
let age = prompt("Каква е вашата възраст?", 18);

let welcome = (age < 18) ?
  function() { alert("Здравейте!"); } :
  function() { alert("Поздравления!"); };

*!*
welcome(); // сега кодът е наред
*/!*
```


<<<<<<< HEAD
```smart header="Кога да използваме функционални декларации и кога функционални изрази?"
По принцип когато трябва да декларираме функция първо проверяваме дали може да използваме Функционалната декларация. Нейният синтаксис дава повече свобода при организирането на кода, тъй като можем да извикаме тези функции преди да са декларирани. 
=======
```smart header="When to choose Function Declaration versus Function Expression?"
As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Те също така улесняват четимостта на кода тъй като е по-лесно да погледнем `function f(…) {…}` в кода, вместо `let f = function(…) {…};`. Функционалните декларации "хващат окото" по-лесно.

...Но ако по някаква причина функционалните декларации не са подходящи в конкретния случай, или имаме нужда от условна декларация (както в примера), тогава трябва да се използва функционален израз.
```

## Обобщение

- Функциите са стойности. Те могат да се присвояват, копират или декларират навсякъде в кода.
- Ако функцията е декларирана като отделна инструкция в кода, това се нарича "Function Declaration" (функционално деклариране).
- Ако функцията е декларирана като част от израз, тя се нарича "Function Expression" (функционален израз).
- Функционалните декларации се обработват преди да се изпълни блока от код. Те са видими навсякъде в блока от код.
- Функционалните изрази се създават, когато изпълнението на програмата ги достигне.

В повечето случаи когато трябва да декларираме функция, се препоръчва функционалната декларация, защото така функцията е видима преди нейното деклариране. Това позволява повече гъвкавост при организацията на кода и обикновено го прави по-четим.

Желателно е да използваме функционални изрази само когато функционалната декларация не е подходяща за конкретната задача. Видяхме няколко примера за това в тази глава и ще срещаме още в бъдеще. 
