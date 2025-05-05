# Типове данни

Стойността в JavaScript винаги е от определен тип. Например низ или число.

В JavaScript има седем основни типове данни, като в тази глава ще се запознаем по-общо с тях, а в следващите глави, ще разгледаме всеки тип по-отделно и в детайл.

Можем да поставим всеки тип в променлива. Например, една променлива може да съхранява стрингов тип, а в следващ числен.:

```js
// no error
let message = "hello";
message = 123456;
```

Програмните езици, които позволяват такова поведение се наричат "динамично типизирани", което означава, че има типове данни, но самите променливите не биват обвързвани с тях.

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

<<<<<<< HEAD
    `NaN` е с "лепкав" характер, което означава че всяка следваща операция, след като веднъж сме получили `NaN` в уравнение, ще ни върне стойност `NaN`:
=======
    `NaN` is sticky. Any further mathematical operation on `NaN` returns `NaN`:
>>>>>>> e2f9e5840737e00846bfd492192d8a3828820c60

    ```js run
    alert( NaN + 1 ); // NaN
    alert( 3 * NaN ); // NaN
    alert( "not a number" / 2 - 1 ); // NaN
    ```

<<<<<<< HEAD
    Така че ако получим стойност `NaN`, където и да е в математическо уравнение, тази стойност ще бъде и резултатът от уравнението.
=======
    So, if there's a `NaN` somewhere in a mathematical expression, it propagates to the whole result (there's only one exception to that: `NaN ** 0` is `1`).
>>>>>>> e2f9e5840737e00846bfd492192d8a3828820c60

```smart header="Математическите операции са безопасни"
Калкулирането в JavaScript е "безопасно". Ние можем да правим всичко: да делим с нула, да третираме не числови стрингове (текст) като числа и т.н.. 

Скрипта никога няма да спре да се изпълнява, с фатална грешка ("никога няма да умре"). В най-лошият случай може да получим `NaN` като резултат.
```

Специалните числови стойности, принадлежат към типа "number", като разбира се те не са числа, в нормалния смисъл на думата.

Ще разгледаме в по-подробно работа с числа в главата <info:number>.

## Типът BigInt [#bigint-type]

<<<<<<< HEAD
В JavaScript, типът "number" не може да представлява цели числа, по-големи от <code>(2<sup>53</sup>-1)</code> (това е `9007199254740991`), или по-малко от <code>-(-2<sup>53</sup>-1)</code> за отрицателни цисла. Това е техническо ограничение, причинено от вътрешното им представителство.

За повечето цели това е напълно достатъчно, но понякога се нуждаем от наистина големи числа, напр. за криптография или микросекунда с точност.
=======
In JavaScript, the "number" type cannot safely represent integer values larger than <code>(2<sup>53</sup>-1)</code> (that's `9007199254740991`), or less than <code>-(2<sup>53</sup>-1)</code> for negatives.

To be really precise, the "number" type can store larger integers (up to <code>1.7976931348623157 * 10<sup>308</sup></code>), but outside of the safe integer range <code>±(2<sup>53</sup>-1)</code> there'll be a precision error, because not all digits fit into the fixed 64-bit storage. So an "approximate" value may be stored.

For example, these two numbers (right above the safe range) are the same:

```js
console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992
```

So to say, all odd integers greater than <code>(2<sup>53</sup>-1)</code> can't be stored at all in the "number" type.

For most purposes <code>±(2<sup>53</sup>-1)</code> range is quite enough, but sometimes we need the entire range of really big integers, e.g. for cryptography or microsecond-precision timestamps.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Типът `BigInt` е добавен наскоро към езика, за да представлява цели числа с произволна дължина.

Стойността на `BigInt` се създава чрез добавяне на `n` към края на цялото число:

```js
// знакът "n" в края означава, че е BigInt
const bigInt = 1234567890123456789012345678901234567890n;
```

Тъй като номерата на BigInt рядко са необходими, ние не ги обхващаме тук, а им посвещаваме отделна глава <info:bigint>. Прочетете го, когато имате нужда от толкова големи числа.

<<<<<<< HEAD
```smart header="Проблеми със съвместимостта"
В момента `BigInt` се поддържа в Firefox / Chrome / Edge / Safari, но не и в IE.
```

Можете да проверите [таблицата за съвместимост на BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt#Browser_compatibility), за да знаете кои версии на браузърите се поддържат.

## Низ
=======
## String
>>>>>>> 540d753e90789205fc6e75c502f68382c87dea9b

Низовете в JavaScript трябва да бъде в кавички.

```js
let str = "Здрасти";
let str2 = 'Единичните скоби са ОК също';
let phrase = `можем да вгради друга ${str}`;
```

В JavaScript има три вида кавички.

1. Двойни кавички: `"Hello"`.
2. Единични кавички: `'Hello'`.
3. Прим-ове (Backticks): <code>&#96;Hello&#96;</code>.

Двойните и единичните кавички са "прости" кавички, в JavaScript не се прави разлика между тях.

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
alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} 
                                  // (двойните кавички не функционират)
```

Ще разгледаме по-подробно стринговете в главата <info:string>.

```smart header="Типът *character* не съществува"
В някои езици има специален тип "character", който може да съхранява един символ. Пример за това е типа `char` използван в езиците C и Java.

В JavaScript, този тип не съществува. Има само типът `string`, като един стринг може да е изграден от нула (празен), един или много символи.
```

## Булева стойност (логически тип)

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

Горният пример декларира че `age` е неизвестна или празна променлива.

## Стойността "undefined"

Специалната стойност `undefined` също се отличава, тя също сама обособява тип, точно както и `null`.

Значението на `undefined` е "не е зададена стойност".

Ако променлива бъде декларирана, но на нея не е присвоена стойност, то стойността й ще бъде `undefined`:

```js run
let age;

alert(x); // показва "undefined"
```

Технически е възможно да се присвои стойност `undefined` на която и да е променлива:

```js run
let age = 100;

// променете стойността на "undefined"
age = undefined;

alert(age); // "undefined"
```

... Но това не е препоръчителна практика. Обикновено използваме `null`, когато искаме да зададем "празна" или "неизвестна" стойност на променлива, а използваме `undefined` за да проверим дали стойност е била присвоена на дадена променлива.

## Обекти и символи

Типът `object` е специален.

Всички типове освен `object` са наричани "примитивни", защото могат да съдържат само една стойност (било то стринг, число или друго). За разлика от останалите типове обектите (елементите от тип `object`), биват използвани да съхраняват колекции от данни и сложни структури. Тях ще разгледаме подробно в главата <info:object>, след като научим повече за примитивните типове.

`symbol` (Символ) типът се използва за създаването на уникални идентификатори за обекти. Този тип бива споменат тук чисто информативно, като част от всички типовете данни в JavaScript, но ще бъде разгледан след темата за обекти.

## Оператора typeof [#type-typeof]

`typeof` оператора връща типът, на даден аргумент. Той е полезен, когато искаме да обработим данни от различен тип, по различен начин или просто искаме да проверим типът на дадени данни.

<<<<<<< HEAD
Оператора може да бъде използван по два начина:
=======
The `typeof` operator returns the type of the operand. It's useful when we want to process values of different types differently or just want to do a quick check.
>>>>>>> 285083fc71ee3a7cf55fd8acac9c91ac6f62105c

<<<<<<< HEAD
1. Като оператор: `typeof x`.
2. Като функция: `typeof(x)`.

Казано по друг начин, той може да работи без или със скоби, като резултатът остава един и същ.

Изпълнението на `typeof x`, ни дава резултат от тип стринг, съдържащ името на типа.
=======
A call to `typeof x` returns a string with the type name:
>>>>>>> a6fdfda09570a8ce47bb0b83cd7a32a33869cfad

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
=======
1. `Math` is a built-in object that provides mathematical operations. We will learn it in the chapter <info:number>. Here, it serves just as an example of an object.
2. The result of `typeof null` is `"object"`. That's an officially recognized error in `typeof`, coming from very early days of JavaScript and kept for compatibility. Definitely, `null` is not an object. It is a special value with a separate type of its own. The behavior of `typeof` is wrong here.
3. The result of `typeof alert` is `"function"`, because `alert` is a function. We'll study functions in the next chapters where we'll also see that there's no special "function" type in JavaScript. Functions belong to the object type. But `typeof` treats them differently, returning `"function"`. That also comes from the early days of JavaScript. Technically, such behavior isn't correct, but can be convenient in practice.

```smart header="The `typeof(x)` syntax"
You may also come across another syntax: `typeof(x)`. It's the same as `typeof x`.

To put it clear: `typeof` is an operator, not a function. The parentheses here aren't a part of `typeof`. It's the kind of parentheses used for mathematical grouping.

Usually, such parentheses contain a mathematical expression, such as `(2 + 2)`, but here they contain only one argument `(x)`. Syntactically, they allow to avoid a space between the `typeof` operator and its argument, and some people like it.

Some people prefer `typeof(x)`, although the `typeof x` syntax is much more common.
```

## Summary
<<<<<<< HEAD
>>>>>>> a6fdfda09570a8ce47bb0b83cd7a32a33869cfad

В езика JavaScript има седем основни типа данни.

- `number` използван за всякакъв вид числа: цели или такива с "плаваща запетая", целите числа са ограничени до <code>±(2<sup>53</sup>-1)</code>.
- `bigint` за цели числа с произволна дължина.
- `string` за стрингове. Като стринга е структура изградена от нула, една или много символи, като няма отделен тип за единичен символ.
- `boolean` за вярно и грешно : `true`/`false` .
- `null`  за неизвестни стойности -- самостоятелен тип, който има една единствена стойност: `null`.
- `undefined` за незададени стойности  -- самостоятелен тип, който има една единствена стойност:  `undefined`.
- `object` за по-сложни структури.
- `symbol` за уникални идентификатори.

Оператора `typeof` ни позволява да разберем какъв тип се съхранява в дадена променлива.

<<<<<<< HEAD
- Има две форми: `typeof x` или `typeof(x)`.
- Връща стойност от тип стринг, който съдържа типа на проверяваната стойност, такъв пример е : `"string"`.
- За `null` връща `"object"` -- това е грешка в езика, null в действителност не е обект.
=======
=======

There are 8 basic data types in JavaScript.

- Seven primitive data types:
    - `number` for numbers of any kind: integer or floating-point, integers are limited by <code>±(2<sup>53</sup>-1)</code>.
    - `bigint` for integer numbers of arbitrary length.
    - `string` for strings. A string may have zero or more characters, there's no separate single-character type.
    - `boolean` for `true`/`false`.
    - `null` for unknown values -- a standalone type that has a single value `null`.
    - `undefined` for unassigned values -- a standalone type that has a single value `undefined`.
    - `symbol` for unique identifiers.
- And one non-primitive data type:
    - `object` for more complex data structures.

The `typeof` operator allows us to see which type is stored in a variable.

>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
- Usually used as `typeof x`, but `typeof(x)` is also possible.
- Returns a string with the name of the type, like `"string"`.
- For `null` returns `"object"` -- this is an error in the language, it's not actually an object.
>>>>>>> a6fdfda09570a8ce47bb0b83cd7a32a33869cfad

В следващите глави ще се концентрираме върху примитивните типове данни и щом започнем да се чувстваме комфортно с тях ще преминем към обектите.
