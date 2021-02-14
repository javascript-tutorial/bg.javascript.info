# Arrays / Масиви

Обектите ви позволяват да пазите колекции от ключове и техните стойности. Това е добре. 

Но много често на нас ни е нужна *подредена колекция*, където имаме 1-ви 2-ри, 3-ти елвмвнт и така нататък. Например трябва да пазим списък с неща: потребители, стоки, HTML елементи и т.н.

В този случай не е удобно да използваме обект, защото той няма методи, които ни позволяват да манипулираме поредността на елементите. Не можем да вмъкнем ново property “между” съшествуващите. Обектите не са предвидени за такава употреба.

Съществува специална структура от данни, наречена `Array`/ Масив, в която се съхраняват подредени колекции.

## Деклариране

Има два синтаксиса за създаване на празен масив:

```js
let arr = new Array();
let arr = [];
```

Почти винаги се използва вторият синтаксис. Можем да подадем начални стойности в скобите:

```js
let fruits = ["Apple", "Orange", "Plum"];
```

Елементите на масива са подредени, започвайки от 0.

Можем да достъпим елемент чрез неговия номер в квадратни скоби:

```js run
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum
```

Можем да заменим елемент:

```js
fruits[2] = 'Pear'; // now ["Apple", "Orange", "Pear"]
```

...Или да добавим нов елемент в масива:

```js
fruits[3] = 'Lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]
```

Броят на елементите в масива е неговата `дължина`:

```js run
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3
```

Може да използваме `alert` да покаже целия масив.

```js run
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits ); // Apple,Orange,Plum
```

Маисвът може да съхранява елементи от всякакъв тип.

Например:

```js run no-beautify
// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// вземи обектът на индекс 1 и покажи неговото име
alert( arr[1].name ); // John

// вземи функцията на индекс index 3 и я изпълни
arr[3](); // hello
```


````smart header="Trailing comma / Последваща запетая"
Масивът, също както и обекта, може да завършва със запетая:
```js
let fruits = [
  "Apple",
  "Orange",
  "Plum"*!*,*/!*
];
```

Този стил "trailing comma" позволява лесно да се вмъват/премахват елементи, защото всички линии стават еднакви.
````


## Методи pop/push, shift/unshift

Това [queue](https://en.wikipedia.org/wiki/Queue_(abstract_data_type)) е един от най-честите случаи, в които се използват масиви. В компютърните науки това означава подредена колекция от елементи, която поддържа две операции:

- `push` добавя елемент в края на масива.
- `shift` взема първият елемент в началото на масива и премества всички останали напред, така че вторият елемент става първи, третият става втори  и т.н.

![](queue.svg)

Маисвите поддържат и двете операции.

В практиката ние ги използваме много често. Например опашка със съобщения, които трябва да бъдат показани на екрана.

Има още един случай в който се използват масиви -- структура от данни, наречена [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)).

Той поддържа две опврации:

- `push` добавя елемент в края на масива.
- `pop` премахва елемент от края на масива.

Така че новите елементи са добавени или извадени от "края" на масива.

Stack обикновено се илюстрира с тесте от карти: новите карти се добавят или вадят от горе:

![](stack.svg)

При stacks/ стековете, последният добавен елемент се обработва първи, това е така нареченият LIFO (Last-In-First-Out) принцип. При queues/опашките, имаме FIFO (First-In-First-Out).

Масивите в JavaScript могат да работят и като опашки и като стекове. Те позволяват да се добавят/премахват елементи едновременно от началото и края.

В компютърните науки структурата In computer science the data structure that allows this, is called [deque](https://en.wikipedia.org/wiki/Double-ended_queue).

**Методи, които работят с края на масива:**

`pop`
: Премахва последния елемент от масива и го връща като стойност:

    ```js run
    let fruits = ["Apple", "Orange", "Pear"];

    alert( fruits.pop() ); // remove "Pear" and alert it

    alert( fruits ); // Apple, Orange
    ```

`push`
: Добавя елемент в края на масива:

    ```js run
    let fruits = ["Apple", "Orange"];

    fruits.push("Pear");

    alert( fruits ); // Apple, Orange, Pear
    ```

    Извикването `fruits.push(...)` е равносилно на `fruits[fruits.length] = ...`.

**Методи, които работят с началото на масива:**

`shift`
: Премахва първия елемент на масива и го връща като стойност:

    ```js run
    let fruits = ["Apple", "Orange", "Pear"];

    alert( fruits.shift() ); // remove Apple and alert it

    alert( fruits ); // Orange, Pear
    ```

`unshift`
: Добавя елемент в началото на масива:

    ```js run
    let fruits = ["Orange", "Pear"];

    fruits.unshift('Apple');

    alert( fruits ); // Apple, Orange, Pear
    ```

Методите `push` и `unshift` могат да добавят множество елементи наведнъж:

```js run
let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
alert( fruits );
```

## Internals

Масивът е специален вид обект. Квадратните скоби, които се използват, за да се достъпи свойство `arr[0]` всъщност идват от синтаксиса на обекта. По същество това е същото като `obj[key]`, където `arr` е обекта, докато числата се използват като ключове.

Масивите надграждат обектите, като предоставят специални методи за работа с подредени колекции от данни и също с пропертито `length`. Но в основата си те са обекти.

Запомнете, има само 8 прости типове данни в JavaScript (see the [Data types](info:types) за повече информация). Масивът е обект и се държи като такъв.

Например, той се копира по референция:

```js run
let fruits = ["Banana"]

let arr = fruits; // копиране по референция (две променливи сочат към един и същи масив)

alert( arr === fruits ); // вярно

arr.push("Pear"); // променяме масива по референция

alert( fruits ); // Banana, Pear - сега има 2 записа
```

...Това, което прави масивите наистина специални е тяхното вътрешно представяне. Енджинът се опитва да съхранява елементите на масива в съседна област на паметта, един след друг, точно както е показано на илюстрацията в тази глава. Има и други оптимизации, които позволяват масивите да работят много бързо.

Но всичко това ще се счупи ако спрем да работим с масивите като "подредени колекции" и започнем да ги използваме като обикновени обекти.

Например технически погледнато можем да направим това:

```js
let fruits = []; // създаваме масив

fruits[99999] = 5; // записваме пропърти с индекс, който е много по-голям от дължината на масива

fruits.age = 25; // създаваме пропърти със случайно име, нямащо нищо общо с елементите, които се съхраняват в масива
```

Това е възможно защото масивите са обекти в основата си. Можем да им добавяме всякакви пропъртита.

Но енджинът ще види че ние работим с масива като с обиновен обект. Оптимизации, специфични за масивите, не са подходящи в такива случаи и ще бъдат изключени, техните предимства ще изчезнат. 

Начини да злоупотребим с използването на масивите:

- добавяне на пропърти, което не е число `arr.test = 5`.
- правене на дупки в масива: добавяме `arr[0]` и после `arr[1000]` (и нищо между тях).
- запълване на масива в обратен ред: `arr[1000]`, `arr[999]` и т.н.

Мислете за масивите като за специални структури, които работят с *подредени данни*. Те разполагат със специални методи за това. Маисвите са специално конфигурирани в JavaScript енджина да работят със съседни подредени данни, моля използвайте ги по този начин. И ако се нуждаете от произволни ключове, има голям шанс всъщност да се нуждаете от обикновен обект `{}`.

## Performance

Методите `push/pop` се изпълняват бързо, докато `shift/unshift` са бавни.

![](array-speed.svg)

Защо е по-бързо да се работи с края на масива, отколкото с началото му? Нека видим какво се случва по време на изпълнение на кода:

```js
fruits.shift(); // взима един елемент от началотоment from the start
```

Не е достатъчно да вземе и да премахне елемента с номер/ позиция `0`. Другите елементи също трябва да променят позицията си с едно напред.

Операцията `shift` трябва да направи 3 неща:

1. Премахва елемента с индекс `0`.
2. Премества всички елементи наляво и сменя индексите им от `1` на `0`, от `2` на `1` и т.н.
3. Променя `length` пропъртито.

![](array-shift.svg)

**Колкото повече елеменити има в масива, толкова повече време и памет ще отнеме.**

Същото нещо се случва с `unshift`: за да добавим елемент в началото на масива, ние първо трябва да преместим съществуващите елементи надясно и да увеличим техните индекси.

А какво се случва с `push/pop`? При тях не трябва да се мести нищо. За да извади елемент от края на масива методът `pop` трие този индекс и намалява стойността на `length`.

Действията за метода `pop`:

```js
fruits.pop(); // взима 1 елемент от края
```

![](array-pop.svg)

**Методът `pop` не трябва да мести нищо, защото другите елементи пазят своите индекси. Затова е толкова бърз.**

Същото важи и за метода `push`.

## Loops/ Цикли

Един от най-старите начини да обходим елементите на масива е с `for` цикъл през техните индекси:

```js run
let arr = ["Apple", "Orange", "Pear"];

*!*
for (let i = 0; i < arr.length; i++) {
*/!*
  alert( arr[i] );
}
```

Но за масивите има и друг цикъл, `for..of`:

```js run
let fruits = ["Apple", "Orange", "Plum"];

// итерира през елементите на масива, а не през индексите им
for (let fruit of fruits) {
  alert( fruit );
}
```

Цикълът `for..of` не ни дава достъп до индекса на текущия елемент, само неговата стойност, но в повечето случаи това е достатъчно. И е по-кратък.

Технически, тъй като масивите са обекти, можем да използваме и `for..in`:

```js run
let arr = ["Apple", "Orange", "Pear"];

*!*
for (let key in arr) {
*/!*
  alert( arr[key] ); // Apple, Orange, Pear
}
```

But that's actually a bad idea. There are potential problems with it:

1. The loop `for..in` iterates over *all properties*, not only the numeric ones.

    There are so-called "array-like" objects in the browser and in other environments, that *look like arrays*. That is, they have `length` and indexes properties, but they may also have other non-numeric properties and methods, which we usually don't need. The `for..in` loop will list them though. So if we need to work with array-like objects, then these "extra" properties can become a problem.

2. The `for..in` loop is optimized for generic objects, not arrays, and thus is 10-100 times slower. Of course, it's still very fast. The speedup may only matter in bottlenecks. But still we should be aware of the difference.

Generally, we shouldn't use `for..in` for arrays.


## A word about "length"

The `length` property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

For instance, a single element with a large index gives a big length:

```js run
let fruits = [];
fruits[123] = "Apple";

alert( fruits.length ); // 124
```

Note that we usually don't use arrays like that.

Another interesting thing about the `length` property is that it's writable.

If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here's the example:

```js run
let arr = [1, 2, 3, 4, 5];

arr.length = 2; // truncate to 2 elements
alert( arr ); // [1, 2]

arr.length = 5; // return length back
alert( arr[3] ); // undefined: the values do not return
```

So, the simplest way to clear the array is: `arr.length = 0;`.


## new Array() [#new-array]

There is one more syntax to create an array:

```js
let arr = *!*new Array*/!*("Apple", "Pear", "etc");
```

It's rarely used, because square brackets `[]` are shorter. Also there's a tricky feature with it.

If `new Array` is called with a single argument which is a number, then it creates an array *without items, but with the given length*.

Let's see how one can shoot themself in the foot:

```js run
let arr = new Array(2); // will it create an array of [2] ?

alert( arr[0] ); // undefined! no elements.

alert( arr.length ); // length 2
```

In the code above, `new Array(number)` has all elements `undefined`.

To evade such surprises, we usually use square brackets, unless we really know what we're doing.

## Multidimensional arrays

Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:

```js run
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5, the central element
```

## toString

Arrays have their own implementation of `toString` method that returns a comma-separated list of elements.

For instance:


```js run
let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true
```

Also, let's try this:

```js run
alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"
```

Arrays do not have `Symbol.toPrimitive`, neither a viable `valueOf`, they implement only `toString` conversion, so here `[]` becomes an empty string, `[1]` becomes `"1"` and `[1,2]` becomes `"1,2"`.

When the binary plus `"+"` operator adds something to a string, it converts it to a string as well, so the next step looks like this:

```js run
alert( "" + 1 ); // "1"
alert( "1" + 1 ); // "11"
alert( "1,2" + 1 ); // "1,21"
```

## Don't compare arrays with ==

Arrays in JavaScript, unlike some other programming languages, shouldn't be compared with operator `==`.

This operator has no special treatment for arrays, it works with them as with any objects.

Let's recall the rules:

- Two objects are equal `==` only if they're references to the same object.
- If one of arguments of `==` is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter <info:object-toprimitive>.
- ...With an exception of `null` and `undefined` that equal `==` each other and nothing else.

The strict comparison `===` is even simpler, as it doesn't convert types. 

So, if we compare arrays with `==`, they are never the same, unless we compare two variables that reference exactly the same array.

For example:
```js run
alert( [] == [] ); // false
alert( [0] == [0] ); // false
```

These arrays are technically different objects. So they aren't equal. The `==` operator doesn't do item-by-item comparison.

Comparison with primitives may give seemingly strange results as well:

```js run
alert( 0 == [] ); // true

alert('0' == [] ); // false
```

Here, in both cases, we compare a primitive with an array object. So the array `[]` gets converted to primitive for the purpose of comparison and becomes an empty string `''`. 

Then the comparison process goes on with the primitives, as described in the chapter <info:type-conversions>:

```js run
// after [] was converted to ''
alert( 0 == '' ); // true, as '' becomes converted to number 0

alert('0' == '' ); // false, no type conversion, different strings
```

So, how to compare arrays?

That's simple: don't use the `==` operator. Instead, compare them item-by-item in a loop or using iteration methods explained in the next chapter.

## Summary

Array is a special kind of object, suited to storing and managing ordered data items.

- The declaration:

    ```js
    // square brackets (usual)
    let arr = [item1, item2...];

    // new Array (exceptionally rare)
    let arr = new Array(item1, item2...);
    ```

    The call to `new Array(number)` creates an array with the given length, but without elements.

- The `length` property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.
- If we shorten `length` manually, the array is truncated.

We can use an array as a deque with the following operations:

- `push(...items)` adds `items` to the end.
- `pop()` removes the element from the end and returns it.
- `shift()` removes the element from the beginning and returns it.
- `unshift(...items)` adds `items` to the beginning.

To loop over the elements of the array:
  - `for (let i=0; i<arr.length; i++)` -- works fastest, old-browser-compatible.
  - `for (let item of arr)` -- the modern syntax for items only,
  - `for (let i in arr)` -- never use.

To compare arrays, don't use the `==` operator (as well as `>`, `<` and others), as they have no special treatment for arrays. They handle them as any objects, and it's not what we usually want.

Instead you can use `for..of` loop to compare arrays item-by-item.

We will continue with arrays and study more methods to add, remove, extract elements and sort arrays in the next chapter <info:array-methods>.
