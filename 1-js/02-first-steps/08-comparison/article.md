# Сравнения

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

## Comparison of different types

When comparing values of different types, JavaScript converts the values to numbers.

For example:

```js run
alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1
```

For boolean values, `true` becomes `1` and `false` becomes `0`.

For example:

```js run
alert( true == 1 ); // true
alert( false == 0 ); // true
```

````smart header="A funny consequence"
It is possible that at the same time:

- Two values are equal.
- One of them is `true` as a boolean and the other one is `false` as a boolean.

For example:

```js run
let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!
```

From JavaScript's standpoint, this result is quite normal. An equality check converts values using the numeric conversion (hence `"0"` becomes `0`), while the explicit `Boolean` conversion uses another set of rules.
````

## Strict equality

A regular equality check `==` has a problem. It cannot differentiate `0` from `false`:

```js run
alert( 0 == false ); // true
```

The same thing happens with an empty string:

```js run
alert( '' == false ); // true
```

This happens because operands of different types are converted to numbers by the equality operator `==`. An empty string, just like `false`, becomes a zero.

What to do if we'd like to differentiate `0` from `false`?

**A strict equality operator `===` checks the equality without type conversion.**

In other words, if `a` and `b` are of different types, then `a === b` immediately returns `false` without an attempt to convert them.

Let's try it:

```js run
alert( 0 === false ); // false, because the types are different
```

There is also a "strict non-equality" operator `!==` analogous to `!=`.

The strict equality operator is a bit longer to write, but makes it obvious what's going on and leaves less room for errors.

## Comparison with null and undefined

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
