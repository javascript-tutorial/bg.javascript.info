# Типове данни

<<<<<<< HEAD
В JavaScript, една променлива  може да съдържа всякакъв вид данни, в един момент може да съхранява стрингов тип, а в следващ числен.
=======
A value in JavaScript is always of a certain type. For example, a string or a number.

There are eight basic data types in JavaScript. Here, we'll cover them in general and in the next chapters we'll talk about each of them in detail.

We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31

```js
// no error
let message = "hello";
message = 123456;
```

<<<<<<< HEAD
Програмните езици, които позволяват такова поведение се наричат "динамично типизирани", което означава, че има типове данни, но самите променливите не биват обвързвани с тях.

В JavaScript има седем основни типове данни, като в тази глава ще се запознаем по-общо с тях, а в следващите глави, ще разгледаме всеки тип по отделно и в детайл.
=======
Programming languages that allow such things, such as JavaScript, are called "dynamically typed", meaning that there exist data types, but variables are not bound to any of them.
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31

## Числен

```js
let n = 123;
n = 12.345;
```

*Численият* тип обхваща целите числа, както и тези с "плаваща запетая".

Има много видове операции с числа като: умножение `*`, деление `/`, събиране `+`, изваждане `-` и така нататък.

Освен обикновените числа, съществуват и така наречените "специални числени стойности", които принадлежат към числовият тип данни, това са: `Infinity`, `-Infinity` и `NaN`.

- `Infinity` е еквивалент на математическият термин [Безкрайност](https://bg.wikipedia.org/wiki/%D0%91%D0%B5%D0%B7%D0%BA%D1%80%D0%B0%D0%B9%D0%BD%D0%BE%D1%81%D1%82) ∞. Това е специална стойност, по-голяма от всяко число.

    Може да получим тази стойност, като резултат от операция с делене на нула:

    ```js run
    alert( 1 / 0 ); // Infinity
    ```

    Или ако директно реферираме стойността:

    ```js run
    alert( Infinity ); // Infinity
    ```
- `NaN` представлява изчислителна грешка. Тя е резултат от грешна или неидентифицирана математическа операция, като:

    ```js run
    alert( "not a number" / 2 ); // NaN, такова деление е грешно
    ```

    `NaN` е с "лепкав" характер, което означава че всяка следваща операция, след като веднъж сме получили `NaN` в уравнение, ще ни върне стойност `NaN`:

    ```js run
    alert( "not a number" / 2 + 5 ); // NaN
    ```

    Така че ако получим стойност `NaN`, където и да е в математическо уравнение, тази стойност ще бъде и резултатът от уравнението.

```smart header="Математическите операции са безопасни"
Калкулирането в JavaScript е "безопасно". Ние можем да правим всичко: да делим с нула, да третираме не числови стрингове (текст) като числа и т.н.. 

Скрипта никога няма да спре да се изпълнява, с фатална грешка ("никога няма да умре"). В най-лошият случай може да получим `NaN` като резултат.
```

Специалните числови стойности, принадлежат към типа "number", като разбира се те не са числа, в нормалния смисъл на думата.

Ще разгледаме в по-подробно работа с числа в главата <info:number>.

<<<<<<< HEAD
## Стринг
=======
## BigInt

In JavaScript, the "number" type cannot represent integer values larger than <code>(2<sup>53</sup>-1)</code> (that's `9007199254740991`), or less than <code>-(-2<sup>53</sup>-1)</code> for negatives. It's a technical limitation caused by their internal representation.

For most purposes that's quite enough, but sometimes we need really big numbers, e.g. for cryptography or microsecond-precision timestamps.

`BigInt` type was recently added to the language to represent integers of arbitrary length.

A `BigInt` value is created by appending `n` to the end of an integer:

```js
// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

As `BigInt` numbers are rarely needed, we don't cover them here, but devoted them a separate chapter <info:bigint>. Read it when you need such big numbers.

```smart header="Compatability issues"
Right now `BigInt` is supported in Firefox/Chrome/Edge, but not in Safari/IE.
```

## String
>>>>>>> 5b195795da511709faf79a4d35f9c5623b6dbdbd

Стрингът в JavaScript трябва да бъде в кавички.

```js
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```

В JavaScript има три вида кавички.

1. Двойни кавички: `"Hello"`.
2. Единични кавички: `'Hello'`.
3. Прим-ове (Backticks): <code>&#96;Hello&#96;</code>.

<<<<<<< HEAD
Двойните и единичните кавички са "прости" кавички, в JavaScript не се прави разлика между тях.
=======
Double and single quotes are "simple" quotes. There's practically no difference between them in JavaScript.
>>>>>>> 5b195795da511709faf79a4d35f9c5623b6dbdbd

Прим-овете са кавички с допълнителна функционалност. Те позволяват вграждане на променливи и изрази в стрингове, чрез обграждане в `${…}`, пример за това е: 

```js run
let name = "John";

// вграждане на променлива
alert( `Hello, *!*${name}*/!*!` ); // Hello, John!

// вграждане на израз
alert( `the result is *!*${1 + 2}*/!*` ); // the result is 3
```

Изразът в `${…}` бива изчислен и се превръща в част от стрингът. Ние може да поставим всичко вътре, променливи като `name` или математическа операция като `1 + 2`, или дори по-сложни операции.

Моля запомнете, че това може да стане единствено в примове, останалите видове кавички не поддържат "вграждащата" функционалност на стринга!

```js run
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (двойните кавички не правят нищо)
```

Ще разгледаме по-подробно стринговете в главата <info:string>.

<<<<<<< HEAD
```smart header="Типът *буква* (character) не съществува"
В някои езици има специален тип "character", който може да съхранява един символ. Пример за това е типа `char` използван в езиците C и Java. 
=======
```smart header="There is no *character* type."
In some languages, there is a special "character" type for a single character. For example, in the C language and in Java it is called "char".
>>>>>>> 5b195795da511709faf79a4d35f9c5623b6dbdbd

В JavaScript, този тип не съществува, а има само тип стринг, като един стринг може да е изграден от един или много символи.
```

<<<<<<< HEAD
## Булева (логически тип)
=======
## Boolean (logical type)
>>>>>>> 5b195795da511709faf79a4d35f9c5623b6dbdbd

Логическия тип има само две стойности:`true` и `false`.

Този тип е често използван за съхраняването на да/не стойности: `true` означава "да, вярно" a `false` означава "не, грешно".

Пример:

```js
let nameFieldChecked = true; // да, полето съхраняващо име е маркирано
let ageFieldChecked = false; // не, полето съхраняващо възраст не е маркирано
```

Булевите стойности, могат да бъдат получени и като резултат от сравнение:

```js run
let isGreater = 4 > 1;

alert( isGreater ); // true (резултатът от сравнението е "да")
```

Ще разгледаме в по-голяма дълбочина булевите в главата <info:logical-operators>.

## Стойността "null"

Специалната стойност `null` не принадлежи към до тук описаните типове.

Тази стойност сама обособява отделен тип, който може да съдържа само стойността `null`:

```js
let age = null;
```

В JavaScript, `null` не е "reference to a non-existing object" или "null pointer", както в някои други езици.

`null` е просто специална стойност, означаваща "нищо", "празно" или "неизвестна стойност".

<<<<<<< HEAD
Горният пример декларира че `age` е неизвестна или празна променлива, поради някаква причина.
=======
The code above states that `age` is unknown.
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31

## Стойността "undefined"

Специалната стойност `undefined` също се отличава, тя също сама обособява тип, точно както и `null`.

Значението на `undefined` е "не е зададена стойност".

Ако променлива бъде декларирана, но на нея не е присвоена стойност, то стойността й ще бъде `undefined`:

```js run
let age;

<<<<<<< HEAD
alert(x); // показва "undefined"
```

Технически е възможно да се присвои стойност `undefined` на която и да е променлива:
=======
alert(age); // shows "undefined"
```

Technically, it is possible to explicitly assign `undefined` to a variable:
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31

```js run
let age = 100;

// change the value to undefined
age = undefined;

alert(age); // "undefined"
```

<<<<<<< HEAD
... Но това не е препоръчителна практика. Обикновено използваме `null`, когато искаме да зададем "празна" или "неизвестна" стойност на променлива, а използваме `undefined` за да проверим дали стойност е била присвоена на дадена променлива.
=======
...But we don't recommend doing that. Normally, one uses `null` to assign an "empty" or "unknown" value to a variable, while `undefined` is reserved as a default initial value for unassigned things.
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31

## Обекти и символи

Типът `object` е специален.

<<<<<<< HEAD
Всички типове освен `object` са наричани "примитивни", защото могат да съдържат само една стойност (било то стринг, число или друго). За разлика от останалите типове обектите (елементите от тип `object`), биват използвани да съхраняват колекции от данни и сложни структури. Тях ще разгледаме подробно в главата <info:object>, след като научим повече за примитивните типове.

`symbol` (Символ) типът се използва за създаването на уникални идентификатори за обекти. Този тип бива споменат тук чисто информативно, като част от всички типовете данни в JavaScript, но ще бъде разгледан след темата за обекти.
=======
All other types are called "primitive" because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.

Being that important, objects deserve a special treatment. We'll deal with them later in the chapter <info:object>, after we learn more about primitives.

The `symbol` type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31

## Оператора typeof [#type-typeof]

`typeof` оператора връща типът, на даден аргумент. Той е полезен, когато искаме да обработим данни от различен тип, по различен начин или просто искаме да проверим типът на дадени данни.

Оператора може да бъде използван по два начина:

1. Като оператор: `typeof x`.
2. Като функция: `typeof(x)`.

Казано по друг начин, той може да работи без или със скоби, като резултатът остава един и същ.

Изпълнението на `typeof x`, ни дава резултат от тип стринг, съдържащ името на типа.

```js
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

*!*
typeof Math // "object"  (1)
*/!*

*!*
typeof null // "object"  (2)
*/!*

*!*
typeof alert // "function"  (3)
*/!*
```

Последните три реда, от примера, най-вероятно имат нужда от допълнителни пояснения:

1. `Math` е вграден обект в JavaScript, който ни предоставя набор от математически операции. Ще научим за него в главата <info:number>. Тук, той ни служи просто като пример за обект.
2. Резултатът от `typeof null` е `"object"`. Това е грешно и е официално признат бъг в оператора `typeof`, оставен с цел съвместимост, на вече съществуващ код. Разбира се `null` не е обект, а специална стойност, със свой собствен тип, затова ще повторим "това е грешка в езика".
3. Резултатът от `typeof alert` е `"function"`, защото `alert` е функция. Ще изучаваме по-подробно функциите в следващите глави, където ще видим, че в езика JavaScript не съществува специален тип "function". Функциите спадат към типа `object`, но оператора `typeof` ги третира различно и ни връща `"function"`, което само по себе си не е абсолютно правилно, но е доста удобно.


<<<<<<< HEAD
## Заключение

В езика JavaScript има седем основни типа данни.

<<<<<<< HEAD
- `number` използван за всякакъв вид числа: цели или такива с "плаваща запетая".
- `string` за стрингове. Като стринга е структура изградена от една или много букви (в JavaScript няма отделено обособен тип за съхранение на единична буква (символ)).
- `boolean` за вярно и грешно : `true`/`false` .
- `null`  за неизвестни стойности -- самостоятелен тип, който има една единствена стойност: `null`.
- `undefined` за незададени стойности  -- самостоятелен тип, който има една единствена стойност:  `undefined`.
- `object` за по-сложни структури.
- `symbol` за уникални идентификатори.
=======
1. `Math` is a built-in object that provides mathematical operations. We will learn it in the chapter <info:number>. Here, it serves just as an example of an object.
2. The result of `typeof null` is `"object"`. That's an officially recognized error in `typeof` behavior, coming from the early days of JavaScript and kept for compatibility. Definitely, `null` is not an object. It is a special value with a separate type of its own.
3. The result of `typeof alert` is `"function"`, because `alert` is a function. We'll study functions in the next chapters where we'll also see that there's no special "function" type in JavaScript. Functions belong to the object type. But `typeof` treats them differently, returning `"function"`. That also comes from the early days of JavaScript. Technically, such behavior isn't correct, but can be convenient in practice.
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31

=======
## Summary

There are 8 basic data types in JavaScript.

- `number` for numbers of any kind: integer or floating-point, integers are limited by ±2<sup>53</sup>.
- `bigint` is for integer numbers of arbitrary length.
- `string` for strings. A string may have zero or more characters, there's no separate single-character type.
- `boolean` for `true`/`false`.
- `null` for unknown values -- a standalone type that has a single value `null`.
- `undefined` for unassigned values -- a standalone type that has a single value `undefined`.
- `object` for more complex data structures.
- `symbol` for unique identifiers.
>>>>>>> 5b195795da511709faf79a4d35f9c5623b6dbdbd

Оператора `typeof` ни позволява да разберем какъв тип се съхранява в дадена променлива.

- Има две форми: `typeof x` или `typeof(x)`.
- Връща стойност от тип стринг, който съдържа типа на проверяваната стойност, такъв пример е : `"string"`.
- За `null` връща `"object"` -- това е грешка в езика, null в действителност не е обект.

В следващите глави ще се концентрираме върху примитивните типове данни и щом започнем да се чувстваме комфортно с тях ще преминем към обектите.
