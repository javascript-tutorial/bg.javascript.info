
# Тъпът *Symbol* - Символ

<<<<<<< HEAD
По спецификация ключовете за свойствата на обекта могат да бъдат или от тип низ, или от тип символ. Не са числа или булеви, а низове или символи, само тези два типа.

Досега използвахме само низове. Сега нека да видим предимствата, които символите могат да ни дадат.
=======
By specification, only two primitive types may serve as object property keys:

- string type, or
- symbol type.

Otherwise, if one uses another type, such as number, it's autoconverted to string. So that `obj[1]` is the same as `obj["1"]`, and `obj[true]` is the same as `obj["true"]`.

Until now we've been using only strings.

Now let's explore symbols, see what they can do for us.
>>>>>>> 2efe0dce18a57f2b6121ed6656d6fe10b0ee8f96

## *Symbol*

*Symbol* представлява уникален идентификатор.

Стойност от този тип може да бъде създадена с `Symbol()`:

```js
<<<<<<< HEAD
// id е нов Символ
let id = Symbol();
```

При създаването на съмволи, ние можем да им подадем описание (наричано също като име на символ), най-вече полезни при отстраняване на грешки:
=======
let id = Symbol();
```

Upon creation, we can give symbols a description (also called a symbol name), mostly useful for debugging purposes:
>>>>>>> 2efe0dce18a57f2b6121ed6656d6fe10b0ee8f96

```js
// id е символ с описание "id"
let id = Symbol("id");
```

<<<<<<< HEAD
Символите са гарантирани, че ще са уникални. Дори да създадем много символи с едно и също описание, те ще имат различни стойности. Описанието е просто етикет, който не влияе на нищо.
=======
Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values. The description is just a label that doesn't affect anything.
>>>>>>> 2efe0dce18a57f2b6121ed6656d6fe10b0ee8f96

Например, тук има два символа със същото описание -- те не са равни:

```js run
let id1 = Symbol("id");
let id2 = Symbol("id");

*!*
alert(id1 == id2); // false
*/!*
```

Ако сте запознати с Ruby или друг език, който също има някакви „символи“ - моля, не се заблуждавайте. Символите при JavaScript са различни.

So, to summarize, a symbol is a "primitive unique value" with an optional description. Let's see where we can use them.

````warn header="Symbols don't auto-convert to a string"
Повечето стойнисти в JavaScript поддържат имплицитно преобразуване към низ.
Например, можем да използваме фунцкията `alert` почти с всяка стойност, и то ще работи.
Символите са специални. Те не се преобразуват автоматично.

Например, този `alert` ще ни покаже грешка:

```js run
let id = Symbol("id");
*!*
alert(id); // TypeError: Cannot convert a Symbol value to a string
*/!*
```

Това е „езикова защита“ срещу объркване, защото низовете и символите са коренно различни и не бива случайно да ги превръщаме в други.

<<<<<<< HEAD
Ако наистина искаме да покажем символа, трябва експлицитно да извикаме `.toString()` метода, като тук:
=======
If we really want to show a symbol, we need to explicitly call `.toString()` on it, like here:

>>>>>>> 2efe0dce18a57f2b6121ed6656d6fe10b0ee8f96
```js run
let id = Symbol("id");
*!*
alert(id.toString()); // Symbol(id), сега то работи
*/!*
```

<<<<<<< HEAD
Или `symbol.description` свойството, за да покажем само описанието му:
=======
Or get `symbol.description` property to show the description only:

>>>>>>> 2efe0dce18a57f2b6121ed6656d6fe10b0ee8f96
```js run
let id = Symbol("id");
*!*
alert(id.description); // id
*/!*
```

````

## "Скрити" свойства

<<<<<<< HEAD
Символите ни позволяват да създадем „скрити“ свойства на обект, до които никоя друга част от кода не може случайно да получи достъп или да презапише.
=======

Symbols allow us to create "hidden" properties of an object, that no other part of code can accidentally access or overwrite.
>>>>>>> 2efe0dce18a57f2b6121ed6656d6fe10b0ee8f96

Например, ако работим с `user` обекти, които принадлежат на чужд код. Бихме искали да добавим идентификатори към тях.

Нека да използваме символен ключ за тях:

```js run
let user = { // принадлежи към чужд код
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // можем да получим достъп до данните, използвайки символа като ключ
```

Каква е ползата от използването `Symbol("id")` над низ `"id"`?

<<<<<<< HEAD
Защото `user` обектите принадлежат на чужд код, и този код също се използва от тях и ние не трябва да добавяме допълнителни полета към него. Това е опасно. Но до символа не може да се достъпи случайно и чуждият код вероятно дори няма да го види, така че вероятно всичко това е правилно да се направи.

Освен това, представете си, че друг скрипт иска да има свой идентификатор вътре в `user` обекта, за собствени цели. Това може да е друга библиотека на JavaScript, така че скриптовете не са напълно наясно един с друг.
=======
As `user` objects belong to another codebase, it's unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. However, symbols cannot be accessed accidentally. The third-party code won't be aware of newly defined symbols, so it's safe to add symbols to the `user` objects.

Also, imagine that another script wants to have its own identifier inside `user`, for its own purposes.
>>>>>>> 2efe0dce18a57f2b6121ed6656d6fe10b0ee8f96

Тогава този скрипт може да създаде свой собствен `Symbol("id")`, като тук:

```js
// ...
let id = Symbol("id");

user[id] = "Тяхното id";
```

Няма да има конфликт между наши и техни идентификатори, защото символите винаги са различни, дори и да имат същото име.

...Но ако бяхме използвали низ `"id"` вместо символ със същата цел, тогава би било *възможно* да имаме конфликт:

```js
let user = { name: "John" };

// Нашият скрипт използва свойството "id"
user.id = "Нашето id";

// ...Друг скрипт също иска "id" за целите си...

user.id = "Тяхното id"
// Бум! презаписан от друг скрипт!
```

### Символите в литерали на обектите

Ако искаме да използваме символ с литерал на обект `{...}`, имаме нужда от квадратни скоби около него.

Като тук:

```js
let id = Symbol("id");

let user = {
  name: "John",
*!*
  [id]: 123 // не "id": 123"
*/!*
};
```
Това е така, защото се нуждаем от стойността от променливата `id` като ключ, не като низ "id".

### Символите се пропускат от for..in

Символните свойства не участват в `for..in` цикли.

Например:

```js run
let id = Symbol("id");
let user = {
  name: "John",
  age: 30,
  [id]: 123
};

*!*
for (let key in user) alert(key); // name, age (няма символи)
*/!*

// но директният достъп от символа работи
alert( "Direct: " + user[id] );
```

<<<<<<< HEAD
<<<<<<< HEAD
`Object.keys(user)` също ги игнорира. Това е част от общия принцип "скриване на символни свойства". Ако друг скрипт или библиотека се изцикли над нашия обект, той няма неочакван достъп до символните свойства.
=======
[Object.keys(user)](mdn:js/Object/keys) also ignores them. That's a part of the general "hiding symbolic properties" principle. If another script or a library loops over our object, it won't unexpectedly access a symbolic property.
>>>>>>> c5358c59494b53efb832c81a5338e0a23b22c269
=======
[Object.keys(user)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) also ignores them. That's a part of the general "hiding symbolic properties" principle. If another script or a library loops over our object, it won't unexpectedly access a symbolic property.
>>>>>>> a6fdfda09570a8ce47bb0b83cd7a32a33869cfad

За разлика, [Object.assign](mdn:js/Object/assign) копира и символните и низовите свойства:

```js run
let id = Symbol("id");
let user = {
  [id]: 123
};

let clone = Object.assign({}, user);

alert( clone[id] ); // 123
```

Тук няма парадокс. Това е по дизайн. Идеята е, че когато клонираме обект или обединяваме обекти, обикновено искаме *всички* свойства да бъдат копирани (включително символи като `id`).

## Глобални символи

Както видяхме, обикновено всички символи са различни, дори и да имат същото име. Но понякога искаме едноименните символи да са едни и същи единици. Например, различните части от приложението ни искат достъп до символ `"id"` което означава точно същото свойство.

За да го постигнем това, съществува *глобален регистър на символите*. Можем да създадем символи в него и да получим достъп до тях по-късно, и то гарантира, че многократните достъпи с едно и също име връщат точно същия символ.

За да можем да прочетем (или да създадем ако отсъства) символ от регистъра, използваме `Symbol.for(key)`.

Така проверяваме глобалния регистър, и ако има символ, описан като `key`, след това го връща, в противен случай създава нов символ `Symbol(key)` и го съхранява в регистъра от дадения `key`.

Например:

```js run
// четем от глобалния регистър
let id = Symbol.for("id"); // ако символът не е съществува, той бива създаден

// прочетете го отново (може би от друга част на кода)
let idAgain = Symbol.for("id");

// един и същ символ
alert( id === idAgain ); // true
```

Символите вътре в регистъра се наричат *глобални символи*. Ако искаме символ за приложението ни, достъпен навсякъде в кода -- за са точно затова.

```smart header="That sounds like Ruby"
В някои езици за програмиране, като Ruby, има само един символ за име.

<<<<<<< HEAD
В JavaScript, както виждаме, това е точно за глобалните символи.
=======
In JavaScript, as we can see, that's true for global symbols.
>>>>>>> 2efe0dce18a57f2b6121ed6656d6fe10b0ee8f96
```

### Symbol.keyFor

<<<<<<< HEAD
За глобални символи, не само `Symbol.for(key)` връща символ от име, но има обратното: `Symbol.keyFor(sym)`,то  връща име от глобален символ.
=======
We have seen that for global symbols, `Symbol.for(key)` returns a symbol by name. To do the opposite -- return a name by global symbol -- we can use: `Symbol.keyFor(sym)`:
>>>>>>> 2efe0dce18a57f2b6121ed6656d6fe10b0ee8f96

Например:

```js run
// символ от име
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// име от символ
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id
```

`Symbol.keyFor` вътрешно използва глобалния регистър на символите, за да потърси ключа за символа. Така че то не работи за не глобални символи. Ако символът не е глобален, няма да може да го намери и се ще върне `undefined`.

<<<<<<< HEAD
Така казано, всякакви символи имат `description` свойство.
=======
That said, all symbols have the `description` property.
>>>>>>> 2efe0dce18a57f2b6121ed6656d6fe10b0ee8f96

Например:

```js run
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert( Symbol.keyFor(globalSymbol) ); // name, глобален символ
alert( Symbol.keyFor(localSymbol) ); // undefined, не глобален символ

alert( localSymbol.description ); // name
```

## Системни символи

Има много "системни" символи, което JavaScript използва вътрешно, и можем да ги използваме за финна настройка на различни аспекти на нашите обекти.

Те са изброени в таблицата със спецификациите в [Well-known symbols](https://tc39.github.io/ecma262/#sec-well-known-symbols):

- `Symbol.hasInstance`
- `Symbol.isConcatSpreadable`
- `Symbol.iterator`
- `Symbol.toPrimitive`
- ...и т.н.

Например, `Symbol.toPrimitive` ни позволява да опишем обект до примитивно преобразуване. Ще видим как точно става това съвсем скоро..

Други символи също ще станат познати, когато изучим съответните езикови характеристики.

## Обобщение

`Symbol` е примитивен тип за уникални идентификатори.

Символите се създават с `Symbol()` с описание по избор (име).

Символите са винаги различни стойности, дори и да имат същото име. Ако искаме едноименните символи да са равни, тогава трябва да използваме глобалния регистър: `Symbol.for(key)` връща (създава ако е нужно) глобален символ с ключ `key` като име. Множество извиквания на `Symbol.for` със същия ключ `key` връща точно същия символ.

Символите имат два основни случая на употреба:

<<<<<<< HEAD
1. "Скрити" свойства на обект.
    Ако искаме да добавим свойство в обект, който "принадлежи" на друг скрипт или библиотека, можем да създадем символ и да го използваме като ключ на свойството. Символините свойства не се показват в `for..in`, така че няма да бъдат обработени случайно заедно с другите свойства. Също така няма да има достъп до него директно, защото друг скрипт няма нашия символ. Така че свойството ще е защитено от случайна употреба или презаписване.
=======
1. "Hidden" object properties.

    If we want to add a property into an object that "belongs" to another script or a library, we can create a symbol and use it as a property key. A symbolic property does not appear in `for..in`, so it won't be accidentally processed together with other properties. Also it won't be accessed directly, because another script does not have our symbol. So the property will be protected from accidental use or overwrite.
>>>>>>> 2efe0dce18a57f2b6121ed6656d6fe10b0ee8f96

    Значи ние можем "тайно" да скрием нещо в обектите, което ни трябват, но на други не би трябвало да го видят, използвайки символичните свойства.

2. Има много системни символи, използвани от JavaScript, които са достъпни като `Symbol.*`. Можем да ги използваме, за да променим някои вградени поведения. Например, по-късно в ръководството, ще използваме `Symbol.iterator` за [iterables](info:iterable), `Symbol.toPrimitive` за да настроим [обръщане на обект към примитивна стойност](info:object-toprimitive) и т.н. .

<<<<<<< HEAD
Технически, символите не са 100% скрити. Има вграден метод [Object.getOwnPropertySymbols(obj)](mdn:js/Object/getOwnPropertySymbols), което ни позволява да вземем всички символи. Също така има и метод наречен [Reflect.ownKeys(obj)](mdn:js/Reflect/ownKeys), което връща *всички* ключове на обект включително и символните. Така че те всъщност не са наистина скрити. Но повечето библеотеки, вградените функции и синтаксисните конструкции не използват тези методи.
=======
Technically, symbols are not 100% hidden. There is a built-in method [Object.getOwnPropertySymbols(obj)](mdn:js/Object/getOwnPropertySymbols) that allows us to get all symbols. Also there is a method named [Reflect.ownKeys(obj)](mdn:js/Reflect/ownKeys) that returns *all* keys of an object including symbolic ones. But most libraries, built-in functions and syntax constructs don't use these methods.
>>>>>>> 2efe0dce18a57f2b6121ed6656d6fe10b0ee8f96
