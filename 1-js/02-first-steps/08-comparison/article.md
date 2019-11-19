# Оператори за сравнения

Ние познаваме много оператори за сравнение от математика:

- По-голямо/По-малко: <code>a &gt; b</code>, <code>a &lt; b</code>.
- По-голямо/По-мялко или равно: <code>a &gt;= b</code>, <code>a &lt;= b</code>.
- Равно: `a == b` (моля, обърнете внимание на знака с двойно равно `=`.Единичният знак `a = b` означва присвояване).
- Не е равно. В математиката се обзначава, като <code>&ne;</code>, но в JavaScript се записва със знака за присвояване с удивителна пред него: <code>a != b</code>.

## Резултатът е от булев тип

както всички оператори, сравняването също връща стойност. В този случай, стойността е от булев тип.

- `true` -- означава "да", "правилно" или "истина".
- `false` -- означава "не", "грешно" или "лъжа".

Например:

```js run
alert( 2 > 1 );  // true (правилно)
alert( 2 == 1 ); // false (грешно)
alert( 2 != 1 ); // true (истина)
```

Резултатът от сравнение може да бъде присвоен на променлива, както всяка друга стойност:

```js run
let result = 5 > 4; // присвояване на резулта от сравняването
alert( result ); // вярно
```

## Сравняване на символни низове(текст)

За да се види дали един символен низ(текс) е по-голям от друг, JavaScript използва така нареченият "речник" или "лексикографски" ред.

С други думи, символите низове се сравняват символ по символ.

Например:

```js run
alert( 'Z' > 'A' ); // вярно
alert( 'Glow' > 'Glee' ); // вярно
alert( 'Bee' > 'Be' ); // вярно
```

Алгоритъмът за сравняване на символни низове(текст) е прост:

1. Сравнява първият символ на двата низа.
2. Ако първият символ от първият ние е по-голям(или по-малък) от този на втория низ, то първият ние по-голям(или по-малък) от вторият. Готово.
3. Иначе, ако двата първи символа и на двата низа са равни, сравнява вторите символи по същия начин.
4. Повтаря докато не стигне края на един от двата низа.
5. Ако и двата низа имат еднаква дължина, то те са равни. Иначе, по-дългият низ е по-голям.

В горните примери сравнението `'Z' > 'A'` стига до резултат на първата стъпка, докато низовете `"Glow"` и `"Glee"`
се сравняват по символ по символ:

1. `G` е същото като `G`.
2. `l` е същото като `l`.
3. `o` е по-голямо от `e`. Спира тук. Първият низ е по-голям.

```smart header="Не истински речник, а по реда на Unicode"
Алгоритъмът за сравнение, даден по-горе, е приблизително еквивалентен на този, използван в речниците или телефонните указатели, но не е абсолютно същия.

Например, дали е главна или малка буква е значение. Главна буква `"A"` не е равна на малката буква `"a"`. Кое е по-голямо? Малката буква `"a"`. Защо? Тъй като малкият символ има по-голям индекс във вътрешната таблица за кодиране, която JavaScript използва (Unicode). 
Ще се върнем към конкретни подробности и последиците от това в главата <info:string>.
```

## Сравнение на различни типове

Когато сравняваме стойности от различен тип, JavaScript преобразува стойностите в число.

Например:

```js run
alert( '2' > 1 ); // вярно, символа '2' се преобразува в числото 2
alert( '01' == 1 ); // вярно, символният низ '01' се преобразува в числото 1
```

За стойности от булев тип, `true` се преобразува в `1` и `false` се преобразува в `0`.

например:

```js run
alert( true == 1 ); // вярно
alert( false == 0 ); // вярно
```

````smart header="Забавно последствие"
Възможно е в същото време:

- Две стойности са равни.
- Едната е `true` като булев тип, а другата да е `false` като булев тип.

Например:

```js run
let a = 0;
alert( Boolean(a) ); // грешно

let b = "0";
alert( Boolean(b) ); // вярно

alert(a == b); // вярно!
```

От гледна точка на JavaScript, този резултат е доста нормален. Проверка за равенство преобразува стойности, използвайки числовото преобразуване(т.е. `"0"` се преобразува в `0`), докато изричното `Boolean` преобразуване използва други правила.
````

## Строго равенство

При нормалната проверка за равенство `==` има проблем. Тя не различава `0` от `false`:

```js run
alert( 0 == false ); // вярно
```

Същото нещо се получава и при празен символен низ:

```js run
alert( '' == false ); // вярно
```

Това се случва, защото операндите от различни типове се преобразуват в числа от оператора на равенството `==`. Празният символен низ, точно като `false`, се преобразува в нула.

Какво да правим, ако искаме да се разграничим `0` от `false`?

**Операторът за строго равенство `===` проверява равенството без преобразуване на типа.**

С други думи, Ако `a` и `b` са от различен тип, тогава `a === b` веднага връща `false` без да прави опит да преобразува типовете.

Нека да опитаме:

```js run
alert( 0 === false ); // грешно, bзащото са от различен тип
```

Също така има и оператор за "строго неравенство" - `!==`, като аналог на `!=`.

Операторът за строго равенство е малко по-дълъг за писане, но прави очевидно какво се случва и оставя по-малко място за грешки.

## Сравняване с null и undefined

There's a non-intuitive behavior when `null` or `undefined` are compared to other values.

For a strict equality check `===`
: These values are different, because each of them is a different type.

    ```js run
    alert( null === undefined ); // false
    ```

For a non-strict check `==`
: There's a special rule. These two are a "sweet couple": they equal each other (in the sense of `==`), but not any other value.

    ```js run
    alert( null == undefined ); // true
    ```

For maths and other comparisons `< > <= >=`
: `null/undefined` are converted to numbers: `null` becomes `0`, while `undefined` becomes `NaN`.

Now let's see some funny things that happen when we apply these rules. And, what's more important, how to not fall into a trap with them.

### Strange result: null vs 0

Let's compare `null` with a zero:

```js run
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) *!*true*/!*
```

Mathematically, that's strange. The last result states that "`null` is greater than or equal to zero", so in one of the comparisons above it must be `true`, but they are both false.

The reason is that an equality check `==` and comparisons `> < >= <=` work differently. Comparisons convert `null` to a number, treating it as `0`. That's why (3) `null >= 0` is true and (1) `null > 0` is false.

On the other hand, the equality check `==` for `undefined` and `null` is defined such that, without any conversions, they equal each other and don't equal anything else. That's why (2) `null == 0` is false.

### An incomparable undefined

The value `undefined` shouldn't be compared to other values:

```js run
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```

Why does it dislike zero so much? Always false!

We get these results because:

- Comparisons `(1)` and `(2)` return `false` because `undefined` gets converted to `NaN` and `NaN` is a special numeric value which returns `false` for all comparisons.
- The equality check `(3)` returns `false` because `undefined` only equals `null`, `undefined`, and no other value.

### Evade problems

Why did we go over these examples? Should we remember these peculiarities all the time? Well, not really. Actually, these tricky things will gradually become familiar over time, but there's a solid way to evade problems with them:

Just treat any comparison with `undefined/null` except the strict equality `===` with exceptional care.

Don't use comparisons `>= > < <=` with a variable which may be `null/undefined`, unless you're really sure of what you're doing. If a variable can have these values, check for them separately.

## Summary

- Comparison operators return a boolean value.
- Strings are compared letter-by-letter in the "dictionary" order.
- When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).
- The values `null` and `undefined` equal `==` each other and do not equal any other value.
- Be careful when using comparisons like `>` or `<` with variables that can occasionally be `null/undefined`. Checking for `null/undefined` separately is a good idea.
