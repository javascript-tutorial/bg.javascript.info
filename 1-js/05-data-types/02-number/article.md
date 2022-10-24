# Числа

В модерния JavaScript, има два вида числа:

<<<<<<< HEAD
1. Обикновенните числа в JavaScript се запазват в 64-битов фирмат [IEEE-754](https://en.wikipedia.org/wiki/IEEE_754-2008_revision), също познати като "двойно прецизни числа с плаваща запетая". TТова са числа, които ще използваме през повечето време и ще говорим за тях в тази глава.

<<<<<<< HEAD
2. Числото BigInt представлява цели числа с произволна дължина. Те понякога са необходими, защото редовното число не могат да надвишават <code>2<sup>53</sup></code> или да бъдат по-малко от <code>-2<sup>53</sup></code>. Числата от bigint тип се използват в няколко специални области, ние им посвещаваме специална глава <info:bigint>.
=======
2. BigInt numbers, to represent integers of arbitrary length. They are sometimes needed, because a regular number can't safely exceed <code>2<sup>53</sup></code> or be less than <code>-2<sup>53</sup></code>. As bigints are used in few special areas, we devote them a special chapter <info:bigint>.
>>>>>>> 4d01fc20d4d82358e61518a31efe80dec9bb2602
=======
1. Regular numbers in JavaScript are stored in 64-bit format [IEEE-754](https://en.wikipedia.org/wiki/IEEE_754), also known as "double precision floating point numbers". These are numbers that we're using most of the time, and we'll talk about them in this chapter.

2. BigInt numbers represent integers of arbitrary length. They are sometimes needed because a regular integer number can't safely exceed <code>(2<sup>53</sup>-1)</code> or be less than <code>-(2<sup>53</sup>-1)</code>, as we mentioned earlier in the chapter <info:types>. As bigints are used in few special areas, we devote them a special chapter <info:bigint>.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Така че тук ще говорим за обикновените числа. Нека разширим познанията си за тях.

## Начини при писане число

Представете си, че трябва да пишем 1 милиард. Очевидният начин е:

```js
let billion = 1000000000;
```

<<<<<<< HEAD
Но в реалния живот, обикновено избягваме да пишем дълъг низ от нули, тъй като е лесно да въведем неправилно. Също така, ние сме мързеливи. Обикновено ще напишем нещо от рода `"1 млрд."` за милиард или `"7.3 млрд."` за 7 милиарда и 300 милиона. Същото важи и за повечето големи числа.

В JavaScript, съкращаваме число, като добавяме буквата `"e"` към числото и определяме броя на нулите:
=======
We also can use underscore `_` as the separator:

```js
let billion = 1_000_000_000;
```

Here the underscore `_` plays the role of the "[syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)", it makes the number more readable. The JavaScript engine simply ignores `_` between digits, so it's exactly the same one billion as above.

In real life though, we try to avoid writing long sequences of zeroes. We're too lazy for that. We'll try to write something like `"1bn"` for a billion or `"7.3bn"` for 7 billion 300 million. The same is true for most large numbers.

In JavaScript, we can shorten a number by appending the letter `"e"` to it and specifying the zeroes count:
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

```js run
let billion = 1e9;  // 1 милиард, буквално: 1 и 9 нули

<<<<<<< HEAD
alert( 7.3e9 );  // 7.3 милиарда (7,300,000,000)
```

С други думи, `"e"` умножава числото по `1` с даденя брой нули.
=======
alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)
```

In other words, `e` multiplies the number by `1` with the given zeroes count.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

```js
1e3 === 1 * 1000; // e3 means *1000
1.23e6 === 1.23 * 1000000; // e6 means *1000000
```

Сега нека напишем нещо много малко. Да речем, 1 микросекунда (един милион част от секундата):

```js
let mсs = 0.000001;
```

<<<<<<< HEAD
Точно както преди, използването на `"e"` може да помогне. Ако бихме искали да избегнем изписването на нулите експлицитно, можем да кажем:
=======
Just like before, using `"e"` can help. If we'd like to avoid writing the zeroes explicitly, we could write the same as:
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

```js
<<<<<<< HEAD
<<<<<<< HEAD
let ms = 1e-6; // шест нули вляво от 1
=======
let mcs = 1e-6; // six zeroes to the left from 1
>>>>>>> a6fdfda09570a8ce47bb0b83cd7a32a33869cfad
=======
let mcs = 1e-6; // five zeroes to the left from 1
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
```

<<<<<<< HEAD
Ако броим нулите в `0.000001`, те са 6. Така че естествено е`1e-6`.  
=======
If we count the zeroes in `0.000001`, there are 6 of them. So naturally it's `1e-6`.
>>>>>>> 4d01fc20d4d82358e61518a31efe80dec9bb2602

С други думи, отрицателно число след `"e"` означава разделение на 1 с дадения брой нули:

```js
<<<<<<< HEAD
// -3 разделения 1 с 3 нули
1e-3 = 1 / 1000 (=0.001)

// -6 разделения 1 с 6 нули
1.23e-6 = 1.23 / 1000000 (=0.00000123)
=======
// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123
<<<<<<< HEAD
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de
=======

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
```

### Шестнадесетично, двоични и осмични числа

Числата от [Шестнайсетичната бройна система](https://bg.wikipedia.org/wiki/%D0%A8%D0%B5%D1%81%D1%82%D0%BD%D0%B0%D0%B9%D1%81%D0%B5%D1%82%D0%B8%D1%87%D0%BD%D0%B0_%D0%B1%D1%80%D0%BE%D0%B9%D0%BD%D0%B0_%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0) са широко използвани в JavaScript за представяне на цветове, кодирани знаци, и за много други неща.Така че естествено съществува по-кратък начин да ги напишете: `0x` и след това числото.

Например:

```js run
alert( 0xff ); // 255
alert( 0xFF ); // 255 (големи и малки букви са едно)
```

Двоичните и осмичните бройни системи рядко се използват, но също така се поддържа с помощта на представки `0b` и `0o`:


```js run
let a = 0b11111111; // двоична форма на 255
let b = 0o377; // осмична форма на 255

alert( a == b ); // true, числото 255 и от двете страни
```

Има само 3 цифрови системи с такава поддръжка. За други цифрови системи,трябва да използваме функцията `parseInt` (което ще видим по-късно в тази глава).

## Функцията toString(base)

Функцията `num.toString(base)` връща низ, което представяне `num` в числовата система с даден основа `base`.

Например:
```js run
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111
```

Основата `base` може да варира от `2` до `36`. По подразбиране е `10`.

Често срещани случаи за употреба са:

- **base=16** се използва за шестнадесети цветове, кодиране на символи и т.н., цифрите могат да бъдат `0..9` или `A..F`.
- **base=2** е най-вече за отстраняване на грешки в побитовите операции, цифрите могат да бъдат `0` или `1`.
- **base=36** е максимумът, цифрите могат да бъдат `0..9` или `A..Z`. Цялата латинска азбука се използва за представяне на число. Забавен, но полезен случай на `36` е, когато трябва да превърнем дълъг цифров идентификатор в нещо по-кратко, например да направите кратък URL адрес. Може просто да го представя в числовата система с основа `36`:

    ```js run
    alert( 123456..toString(36) ); // 2n9c
    ```

```warn header="Две точки за извикване на фунцкии"
Моля, обърнете внимание, че двете точки в `123456..toString(36)` не е печатна грешка.Ако искаме да извикаме метод директно на число, като `toString` в по-горния пример, тогава трябва да поставим две точки `..` след него.

Ако поставим една точка: `123456.toString(36)`, тогава ще имаме грешка, защото JavaScript синтаксисът предполага десетичната част след първата точка. И ако поставим още една точка, тогава JavaScript знае, че десетичната част е празна и извиква метода.

<<<<<<< HEAD
Също така можем да пишем `(123456).toString(36)`.
=======
Also could write `(123456).toString(36)`.

>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de
```

## Закръгляне

Една от най-използваните операции при работа с числа е закръглянето.

Има няколко вградени функции за закръгляне:

`Math.floor`
: закръгля надолу: `3.1` става `3`, и `-1.1` става `-2`.

`Math.ceil`
: закръгля нагоре: `3.1` става `4`, и `-1.1` става `-1`.

`Math.round`
<<<<<<< HEAD
: закръгля до най-близко цяло число: `3.1` става `3`, `3.6` става `4` и `-1.1` става `-1`.
=======
: Rounds to the nearest integer: `3.1` becomes `3`, `3.6` becomes `4`, the middle case: `3.5` rounds up to `4` too.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

`Math.trunc` (не се поддържа от Internet Explorer)
: Премахва всичко след десетичната запетая без закръгляне: `3.1` става `3`, `-1.1` става `-1`.

Ето таблицата, за да обобщим разликите между тях:

|   | `Math.floor` | `Math.ceil` | `Math.round` | `Math.trunc` |
|---|---------|--------|---------|---------|
|`3.1`|  `3`    |   `4`  |    `3`  |   `3`   |
|`3.6`|  `3`    |   `4`  |    `4`  |   `3`   |
|`-1.1`|  `-2`    |   `-1`  |    `-1`  |   `-1`   |
|`-1.6`|  `-2`    |   `-1`  |    `-2`  |   `-1`   |


Тези функции обхващат всички възможни начини за справяне с десетичната част на числото. Но какво ще стане, ако искаме да закръглим числото `n` числа след десетичната запетая?

Например да имаме числото `1.2345` и сега го искаме да закръгляме до 2 цифри, за да получавам само `1.23`.

Има два начина да го направите:

1. Умножавай-и-разделяй.

<<<<<<< HEAD
    Например, за да закръгляме числото до 2-ра цифра след десетичната запетая, можем да го умножим по `100` (или по-голяма степен на 10) и да извикаме функцията за закръгляне и след това я разделяме обратно.
=======
    For example, to round the number to the 2nd digit after the decimal, we can multiply the number by `100`, call the rounding function and then divide it back.
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa
    ```js run
    let num = 1.23456;

<<<<<<< HEAD
    alert( Math.floor(num * 100) / 100 );
    // Първо се изчислява 1.23456 * 100 и получаваме 123.456 вътре в Math.floor
    // След това Math.floor(123.456) -> 123
    // След това делим: 123 / 100 -> 1.23
=======
    alert( Math.round(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23
>>>>>>> 6ab384f2512902d74e4b0ff5a6be60e48ab52e96
    ```

2. Функцията [toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) закръгля числото до `n` числа след точката и връща низ представящ резултата.

    ```js run
    let num = 12.34;
    alert( num.toFixed(1) ); // "12.3"
    ```

    Това закръгля нагоре или надолу до най-близката стойност, подобно на `Math.round`:

    ```js run
    let num = 12.36;
    alert( num.toFixed(1) ); // "12.4"
    ```

<<<<<<< HEAD
   Моля, обърнете внимание на този резултат от `toFixed`. Ако десетичната част е по-къса от изискваната, нулите се добавят към края:
=======
    Please note that the result of `toFixed` is a string. If the decimal part is shorter than required, zeroes are appended to the end:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

    ```js run
    let num = 12.34;
    alert( num.toFixed(5) ); // "12.34000", добавени са нули, за да стане точно 5 числа след десетичната запетая
    ```

<<<<<<< HEAD
    Можем да го преобразуваме в число, използвайки единичния плюс или чрез извикване на функцията `Number()`: `+num.toFixed(5)`.
=======
    We can convert it to a number using the unary plus or a `Number()` call, e.g write `+num.toFixed(5)`.
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

## Неточни изчисления

<<<<<<< HEAD
Вътрешно, числата са представени в 64-битов формат [IEEE-754](https://en.wikipedia.org/wiki/IEEE_754-2008_revision), така че има точно 64 бита за да запазят число: 52 от тях се използват за съхранение на цифрите, 11 от тях съхраняват позицията на десетичната запетая (те са нула за цели числа), и 1 бит е за знака пред числото (положителен/отрицателен).
=======
Internally, a number is represented in 64-bit format [IEEE-754](https://en.wikipedia.org/wiki/IEEE_754), so there are exactly 64 bits to store a number: 52 of them are used to store the digits, 11 of them store the position of the decimal point, and 1 bit is for the sign.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

<<<<<<< HEAD
Ако числото е твърде голямо, тя ще препълни 64-битовата памет, като потенциално би давал безкрайност:
=======
If a number is really huge, it may overflow the 64-bit storage and become a special numeric value `Infinity`:
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

```js run
alert( 1e500 ); // Infinity : Безкрайност
```

Това, което може да е малко по-малко очевидно, но се случва доста често, е загубата на точност.

<<<<<<< HEAD
Обмислете този (false!) тест:
=======
Consider this (falsy!) equality test:
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

```js run
alert( 0.1 + 0.2 == 0.3 ); // *!*false*/!*
```

Точно така, ако проверим дали сумата от `0.1` и `0.2` е `0.3`, получаваме `false`.

Странно! Какво е тогава, ако не `0.3`?

```js run
alert( 0.1 + 0.2 ); // 0.30000000000000004
```

<<<<<<< HEAD
Ох! Тук има повече последствия от неправилно сравнение. Представете си, че правите сайт за електронно пазаруване и посетителят поставя стоки за `$0.10` и `$0.20` в количката им. Общата стойност на поръчката ще бъде `$0.30000000000000004`. Това би изненадало всеки.
=======
Ouch! Imagine you're making an e-shopping site and the visitor puts `$0.10` and `$0.20` goods into their cart. The order total will be `$0.30000000000000004`. That would surprise anyone.
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

Но защо се случва това?

Числото се съхранява в паметта в двоичния му вид, последователност от битове - нули и единици. Но дроб като `0.1`, `0.2` които изглеждат прости в десетичната цифрова система, всъщност са безкрайни дроби в своята двоична форма.

<<<<<<< HEAD
С други думи, какво е `0.1`? Той е разделението на десет `1/10`, една-десета. В десетичната система такива числа са лесно представими.Сравнете го с една трета: `1/3`. Става безкраен дроб `0.33333(3)`.
=======
What is `0.1`? It is one divided by ten `1/10`, one-tenth. In decimal numeral system such numbers are easily representable. Compare it to one-third: `1/3`. It becomes an endless fraction `0.33333(3)`.
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

И така, разделение по степен `10` гарантира, че ще работи добре в десетичната система, но не и разделянето по `3`. По същата причина, в двоичната цифрова система, разделянето по степен на `2` гарантирано ще работи, но `1/10` става безкрайна двоична фракция.

Просто няма начин да се съхранява *точно 0.1* или *точно 0.2* при използването на двоичната система, точно както няма начин да се съхранява една трета като десетична дроб.

Цифровият формат IEEE-754 решава това чрез закръгляне до най-близкото възможно число. Тези правила за закръгляване обикновено не ни позволяват да видим тази „малка загуба на точност“, но тя съществува.

Това можем да видим в действие:
```js run
alert( 0.1.toFixed(20) ); // 0.10000000000000000555
```

И когато сумираме две числа, загубите им на "точност" се сумират.

Ето защо `0.1 + 0.2` не е точно `0.3`.

```smart header="Не е само в JavaScript"
Същият проблем съществува и в много други програмни езици.

PHP, Java, C, Perl, Ruby дават абсолютно същия резултат, тъй като те са базирани на един и същ цифров формат.
```

Можем ли да заобиколим проблема? Със сигурност най-надеждният метод е да се закръгли резултатът с помощта на метод [toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed):

```js run
let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // "0.30"
```

Моля, имайте предвид, че `toFixed` винаги връща низ. Той гарантира, че има 2 числа след десетичната запетая. Това всъщност е удобно, ако имаме електронно пазаруване и трябва да покажем `$0.30`. За други случаи можем да използваме единичния плюс, за да го превърнем в число:

```js run
let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3
```

Също така можем временно да умножим числата по 100 (или по-голям число) за да ги превърнем в цели числа, да направим математиката, и след това да разделим обратно. След това, докато правим математика с цели числа, грешката донякъде намалява, но все пак я получаваме при разделяне:

```js run
alert( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3
alert( (0.28 * 100 + 0.14 * 100) / 100); // 0.4200000000000001
```

Така че подходът за умножение / деление намалява грешката, но не я премахва напълно.

Понякога бихме могли да се опитаме да избегнем дробите изобщо. Всякаш имаме работа в магазин, и съхраняваме цените в центове вместо в долари. Но какво ще стане, ако приложим отстъпка от 30%? На практика рядко е възможно напълно избягване на дробите. Просто ги закръглете, за да им изрежете "опашките" когато е необходимо.

````smart header="Смешното"
Опитайте да стартирате това:

```js run
// Здравей! Аз съм самонарастващо се число!
alert( 9999999999999999 ); // показва 10000000000000000
```

Това страда от същия проблем: загуба на точност. Има 64 бита за числото, 52 от тях могат да се използват за съхранение на цифри,но това не е достатъчно. Така изчезват най-малко значимите цифри.

JavaScript не задейства грешка при такива събития. Той прави всичко възможно, за да впише номера в желания формат, но за съжаление този формат не е достатъчно голям.
````

```smart header="Двете нули"
Друго забавно последствие от вътрешното представяне на числата е наличието на две нули: `0` и `-0`.

Това е така, защото знакът е представен от един бит, така че то може да бъде зададен или не за всяко число, включително нула.

В повечето случаи разликата е незабележима, тъй като операторите са подходящи да ги третират като еднакви.
```

## Тестване: isFinite и isNaN

Запомнете тези две специални числови стойности:

- `Infinity` (и `-Infinity`) е специална числова стойност, която е по-голяма или по-малка от всичко.
- `NaN` (Not a Number) представлява грешка.

Те принадлежат към типа `number`, но не са "нормални" числа, така че има специални функции за проверка за тях:


- `isNaN(value)` преобразува аргумента си в число и след това го тества да ли е `NaN`:

    ```js run
    alert( isNaN(NaN) ); // true
    alert( isNaN("str") ); // true
    ```

<<<<<<< HEAD
    Нуждаем ли се обаче от тази функция? Не можем ли просто да използваме сравнението `=== NaN`? За съжаление, отговорът е не. Стойността `NaN` е уникален по това, че не е равна на нищо, включително себе си:
=======
    But do we need this function? Can't we just use the comparison `=== NaN`? Unfortunately not. The value `NaN` is unique in that it does not equal anything, including itself:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

    ```js run
    alert( NaN === NaN ); // false
    ```

- `isFinite(value)` преобразува аргумента си в число и връща `true` ако е обикновенно число, а не `NaN/Infinity/-Infinity`:

    ```js run
    alert( isFinite("15") ); // true
    alert( isFinite("str") ); // false, защото е специална стойност: NaN
    alert( isFinite(Infinity) ); // false, защото е специална стойност: Infinity
    ```

Понякога `isFinite` се използва за валидиране дали стойността на низ е обикновенно число:


```js run
let num = +prompt("Enter a number", '');

// ще бъде вярно, докато не се въведе Infinity, -Infinity или NaN
alert( isFinite(num) );
```

<<<<<<< HEAD
Моля, обърнете внимание, че празният или само празен низ се третира като `0` във всички цифрови функции, включително `isFinite`.  
=======
Please note that an empty or a space-only string is treated as `0` in all numeric functions including `isFinite`.
>>>>>>> 4d01fc20d4d82358e61518a31efe80dec9bb2602

<<<<<<< HEAD
```smart header="Сравнение с `Object.is`"

Има специален вграден метод [`Object.is`](mdn:js/Object/is) който сравнява стойности като `===`,но е по-надежден за два крайни случая:

1. Работи с `NaN`: `Object.is(NaN, NaN) === true`, това е добро нещо.
2. Стойностите `0` и `-0` са различни: `Object.is(0, -0) === false`, техническо това е вярно, защото вътрешно числото има битов знак, който може да е различен, дори ако всички останали битове са нули.
=======
````smart header="`Number.isNaN` and `Number.isFinite`"
[Number.isNaN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN) and [Number.isFinite](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite) methods are the more "strict" versions of `isNaN` and `isFinite` functions. They do not autoconvert their argument into a number, but check if it belongs to the `number` type instead.

- `Number.isNaN(value)` returns `true` if the argument belongs to the `number` type and it is `NaN`. In any other case it returns `false`.

    ```js run
    alert( Number.isNaN(NaN) ); // true
    alert( Number.isNaN("str" / 2) ); // true

    // Note the difference:
    alert( Number.isNaN("str") ); // false, because "str" belongs to the string type, not the number type
    alert( isNaN("str") ); // true, because isNaN converts string "str" into a number and gets NaN as a result of this conversion
    ```

- `Number.isFinite(value)` returns `true` if the argument belongs to the `number` type and it is not `NaN/Infinity/-Infinity`. In any other case it returns `false`.

    ```js run
    alert( Number.isFinite(123) ); // true
    alert( Number.isFinite(Infinity) ); // false
    alert( Number.isFinite(2 / 0) ); // false

    // Note the difference:
    alert( Number.isFinite("123") ); // false, because "123" belongs to the string type, not the number type
    alert( isFinite("123") ); // true, because isFinite converts string "123" into a number 123
    ```

In a way, `Number.isNaN` and `Number.isFinite` are simpler and more straightforward than `isNaN` and `isFinite` functions. In practice though, `isNaN` and `isFinite` are mostly used, as they're shorter to write.
````

```smart header="Comparison with `Object.is`"
There is a special built-in method `Object.is` that compares values like `===`, but is more reliable for two edge cases:

1. It works with `NaN`: `Object.is(NaN, NaN) === true`, that's a good thing.
2. Values `0` and `-0` are different: `Object.is(0, -0) === false`, technically that's correct, because internally the number has a sign bit that may be different even if all other bits are zeroes.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Във всички останали случаи, `Object.is(a, b)` е същото като `a === b`.

<<<<<<< HEAD
Този начин на сравнение често се използва при спецификациите на JavaScript. Когато един вътрешен алгоритъм трябва да сравни две стойности, за да бъдат абсолютно еднакви, той използва `Object.is` (вътрешно извиква [SameValue](https://tc39.github.io/ecma262/#sec-samevalue)).
=======
We mention `Object.is` here, because it's often used in JavaScript specification. When an internal algorithm needs to compare two values for being exactly the same, it uses `Object.is` (internally called [SameValue](https://tc39.github.io/ecma262/#sec-samevalue)).
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
```


## parseInt и parseFloat

Числово преобразуване с помощта на плюс `+` или `Number()` е точно. Ако стойността не е точно число, тя се проваля:

```js run
alert( +"100px" ); // NaN
```

Единственото изключение са интервалите в началото или в края на низа, тъй като те се игнорират.

Но в реалния живот често имаме стойности в единици, като `"100px"` или `"12pt"` в CSS. В много страни символът на валутата е след сумата, така че ако имаме `"19€"` бихме искали да извлечем числова стойност от това.

При такива ситуации идват на помощ `parseInt` и `parseFloat`.

Те "четат" число от низ, докато не провалят. В случай на грешка, събраното число се връща. Функцията `parseInt` връща цяло число, докато `parseFloat` ще върне число с плаваща запетая:

```js run
alert( parseInt('100px') ); // 100
alert( parseFloat('12.5em') ); // 12.5

alert( parseInt('12.3') ); // 12, само цяло число се връща
alert( parseFloat('12.3.4') ); // 12.3, втората точка спира четенето
```

Има ситуации, когато `parseInt/parseFloat` ще връщат `NaN`. Случва се, когато не могат да бъдат прочетени цифри:

```js run
alert( parseInt('a123') ); // NaN, първият символ спира процеса
```

````smart header="Вторият аргумент на `parseInt(str, radix)`"
Функцията `parseInt()` има незадължителен втори параметър. Той посочва основата на системата с цифри, така че `parseInt` също може да анализира низове от шестнадесетични числа, двоични числа и т.н.:

```js run
alert( parseInt('0xff', 16) ); // 255
alert( parseInt('ff', 16) ); // 255, без 0x също работи

alert( parseInt('2n9c', 36) ); // 123456
```
````

## Други математически функции

JavaScript има вграден [Math](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math) обект която съдържа малка библиотека с математически функции и константи.

Ето няколко примера:

`Math.random()`
<<<<<<< HEAD
: Връща произволно число от 0 до 1 (без да включва 1)
=======
: Returns a random number from 0 to 1 (not including 1).
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

    ```js run
    alert( Math.random() ); // 0.1234567894322
    alert( Math.random() ); // 0.5435252343232
    alert( Math.random() ); // ... (произволни числа)
    ```

<<<<<<< HEAD
`Math.max(a, b, c...)` / `Math.min(a, b, c...)`
: Връща най-големия / най-малкия число от подадените аргументи.
=======
`Math.max(a, b, c...)` and `Math.min(a, b, c...)`
: Returns the greatest and smallest from the arbitrary number of arguments.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

    ```js run
    alert( Math.max(3, 5, -10, 0, 1) ); // 5
    alert( Math.min(1, 2) ); // 1
    ```

`Math.pow(n, power)`
<<<<<<< HEAD
: Връща `n` повдигната на дадената степен
=======
: Returns `n` raised to the given power.
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

    ```js run
    alert( Math.pow(2, 10) ); // 2 на степен 10 = 1024
    ```

Има и други фунцкии и константи в `Math` обекта, включително тригонометрията, която можете да намерите в [документите за математиката](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math) object.

## Обобщение

За да напишете числа с много нули:

- Добавете `"e"` с броя нули след числото. Като: `123e6` е същото като `123` с 6 нули `123000000`.
- Отрицателно число след `"e"` причинява числото да бъде разделено на 1 с дадени нули. Или `123e-6` означава `0.000123`.

За различни цифрови системи:

- Може да записваме числата директно в HEX (`0x`), осмична (`0o`) и двоична (`0b`) система.
- `parseInt(str, base)` връща низа `str` превърнато в цяло число от дадената числова система `base`, `2 ≤ base ≤ 36`.
- `num.toString(base)` преобразува числото в низ от числова система дадено с `base`.

<<<<<<< HEAD
За конвертиране на стойности като `12pt` и `100px` към числа:
=======
For regular number tests:

- `isNaN(value)` converts its argument to a number and then tests it for being `NaN`
- `Number.isNaN(value)` checks whether its argument belongs to the `number` type, and if so, tests it for being `NaN`
- `isFinite(value)` converts its argument to a number and then tests it for not being `NaN/Infinity/-Infinity`
- `Number.isFinite(value)` checks whether its argument belongs to the `number` type, and if so, tests it for not being `NaN/Infinity/-Infinity`

For converting values like `12pt` and `100px` to a number:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

- Използвайте `parseInt/parseFloat` за "гъвкаво" преобразуване. То чете число от низ и след това връща стойността, която е успял да прочете преди грешката.

За дробните числа:

- Закръглете с `Math.floor`, `Math.ceil`, `Math.trunc`, `Math.round` или `num.toFixed(precision)`.
- Не забравяйте да запомните, че има загуба на точност при работа с дробни числа.

Повече математически функции:

- Погледнете в [Math](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math) обекта когато са ви нужни. Библиотеката е много малка, но може да покрие основните ви нужди.
