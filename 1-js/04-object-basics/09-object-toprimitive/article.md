
# Преобразуване на обект към примитивен тип данни

Какво се случва, при събиране на обекти `obj1 + obj2`, при изваждане `obj1 - obj2` или принтиране като използваме функцията `alert(obj)`?

<<<<<<< HEAD
В този случай, обектите се преобразуват автоматично в примитиви, и след това се извършва дадена операцията.
=======
JavaScript doesn't exactly allow to customize how operators work on objects. Unlike some other programming languages, such as Ruby or C++, we can't implement a special object method to handle an addition (or other operators).

In case of such operations, objects are auto-converted to primitives, and then the operation is carried out over these primitives and results in a primitive value.

That's an important limitation, as the result of `obj1 + obj2` can't be another object!

E.g. we can't make objects representing vectors or matrices (or achievements or whatever), add them and expect a "summed" object as the result. Such architectural feats are automatically "off the board".

So, because we can't do much here, there's no maths with objects in real projects. When it happens, it's usually because of a coding mistake.

In this chapter we'll cover how an object converts to primitive and how to customize it.

We have two purposes:

1. It will allow us to understand what's going on in case of coding mistakes, when such an operation happened accidentally.
2. There are exceptions, where such operations are possible and look good. E.g. subtracting or comparing dates (`Date` objects). We'll come across them later.

## Conversion rules
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

В главата <info:type-conversions> видяхме правилата за числово, низово и булево преобразуване на примитиви. Но бяхме оставили обектите. Сега, тъй като знаем за методите и символите, става възможно да ги обсъдим тук.

1. Всички обекти са `true` в булев контекст. Има само числови и низови преобразувания.
2. Числовото преобразуване се случва, когато изваждаме обекти или прилагаме математически функции. Например, `Date` обекти (ще бъдат обхванати в главата <info:date>) могат да бъдат извадени, и резултатът от `date1 - date2` е разликата между двете дати.
3. Що се отнася до конвертирането на низове -- обикновено се случва, когато принтираме обект като `alert(obj)` и в подобни контексти.

<<<<<<< HEAD
## Функцията: ToPrimitive

Можем да прецизираме конвертиране на низове и цифри, използвайки специални обектни методи.

Има три варианта на преобразуване на типа, т.нар "подсказки", описани в [спецификацията на езика](https://tc39.github.io/ecma262/#sec-toprimitive):
=======
We can fine-tune string and numeric conversion, using special object methods.

There are three variants of type conversion, that happen in various situations.

They're called "hints", as described in the [specification](https://tc39.github.io/ecma262/#sec-toprimitive):
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

`"string"`
: За преобразуване на обект в низ, когато правим операция върху обект, който очаква низ, като `alert`:

    ```js
    // изход
    alert(obj);

    // използвайки обект като ключ на свойството
    anotherObj[obj] = 123;
    ```

`"number"`
: За преобразуване на обект в число, като когато правим математика:

    ```js
    // експлицитна (explicit) конверсия
    let num = Number(obj);

    // математика (с изключение на двоичния плюс)
    let n = +obj; // единичен плюс
    let delta = date1 - date2;

    // по-малко / по-голямо
    let greater = user1 > user2;
    ```

`"default"`
: Среща се в редки случаи, когато операторът не е "сигурен" какъв тип да очаква..

    Например, бинарния плюс `+` може да работи както с низове (свързва ги) и числа (добавя ги), така както и низовете, и числата биха направили. Така че, ако бинарния плюс получи обект като аргумент, то използва подсказката `"default"`, за да го преобразува.

    Също така, ако обект се сравнява с помощта на `==` с низове, числа или символи, не е ясно кое преобразуване трябва да се извърши, така че също подсказката `"default"` се използва.

    ```js
    // бинарния плюс подсказката "default"
    let total = obj1 + obj2;

    // обект == число използва подсказката "default"
    if (user == 1) { ... };
    ```

    Операторите за по-голямо/по-малко, тако `<` `>`, могат да работят с низове и числа също. Все още, те използват подсказката `"number"`, а не този по `"default"`.Това е по исторически причини.

    На практика обаче, не е нужно да помним тези особени подробности, защото всички вградени обекти с изключение на един случай (`Date` обекта, ще го научим по-късно) имплементира преобразуването по `"default"` също като `"number"`. И ние можем да направим същото.

```smart header="No `\"boolean\"` hint"
Моля обърнете внимание -- има само три подсказки. Толкова е просто.

Няма "boolean" подсказка (всички обекти са `true` в булев контекст) или нещо подобно.И ако разгледаме `"default"` и `"number"` като еднакви, както повечето вградени, та тогава ще имаме само две преобразувания.
```

**За да направи преобразуването, JavaScript се опитва да намери и извика три обектни метода:**

1. Извиква `obj[Symbol.toPrimitive](hint)` - методът със символния ключ `Symbol.toPrimitive` (системен символ), ако съществува такъв метод,
2. В противен случай, ако подсказката е `"string"`
    - `obj.toString()` и `obj.valueOf()` се пробват където може.
3.  В противен случай, ако подсказката е `"number"` или `"default"`
    - `obj.valueOf()` и `obj.toString()`, където може.

## Symbol.toPrimitive

Нека започнем от първия метод. Има вграден символ с име `Symbol.toPrimitive`, който трябва да се използва за назоваване на метода за преобразуването, като тук:

```js
obj[Symbol.toPrimitive] = function(hint) {
<<<<<<< HEAD
  // трябва да върне примитивна стойност
  // hint = един от "string", "number", "default"
};
```

Например, тука обекта `user` го имплементира:
=======
  // here goes the code to convert this object to a primitive
  // it must return a primitive value
  // hint = one of "string", "number", "default"
};
```

If the method `Symbol.toPrimitive` exists, it's used for all hints, and no more methods are needed.

For instance, here `user` object implements it:
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

```js run
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// демонстрация на преобразуването:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```

Както виждаме от кода, `user` се превръща в самоописателен низ или парична сума в зависимост от конвертирането. Единствения метод `user[Symbol.toPrimitive]` обработва всички случаи на преобразуване.


## toString/valueOf

<<<<<<< HEAD
Методите `toString` и `valueOf` идват от древни времена. Те не са символи (символи не са съществували толкова отдавна), а по-скоро "обикновенни" методи с низови имена. Те предоставят алтернативен "старомоден" начин за имплементиране на преобразуванията.

Ако няма `Symbol.toPrimitive` след това JavaScript се опитва да ги намери и опитайте в реда:

- `toString -> valueOf` за "string" hint.
- `valueOf -> toString` в противен случай.
=======
If there's no `Symbol.toPrimitive` then JavaScript tries to find methods `toString` and `valueOf`:

- For the "string" hint: `toString`, and if it doesn't exist, then `valueOf` (so `toString` has the priority for string conversions).
- For other hints: `valueOf`, and if it doesn't exist, then `toString` (so `valueOf` has the priority for maths).

Methods `toString` and `valueOf` come from ancient times. They are not symbols (symbols did not exist that long ago), but rather "regular" string-named methods. They provide an alternative "old-style" way to implement the conversion.
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

Тези методи трябва да върнат примитивна стойност. Ако `toString` или `valueOf` върнат обект, тогава се игнорират (същото, като че ли да няма метод).

По подразбиране, обикновен обект има методите `toString` и `valueOf`:

- Метода `toString` връща низ `"[object Object]"`.
- Метода `valueOf` връща самия обект.

Ето демонстрация:

```js run
let user = {name: "John"};

alert(user); // [object Object]
alert(user.valueOf() === user); // true
```

Така че, ако се опитаме да използваме обект като низ, така като в `alert`, тогава по подразбиране ще виждаме `[object Object]`.

<<<<<<< HEAD
И по подразбиране `valueOf` се споменава тук само заради пълнотата, за да се избегне объркване. Както виждате, то връща самия обект, и така се игнорира.Не питайте защо, това е по исторически причини. Така че можем да приемем, че то не съществува.

Нека да приложим тези методи.
=======
The default `valueOf` is mentioned here only for the sake of completeness, to avoid any confusion. As you can see, it returns the object itself, and so is ignored. Don't ask me why, that's for historical reasons. So we can assume it doesn't exist.

Let's implement these methods to customize the conversion.
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

Например, тук `user` прави същото като по-горе, използвайки комбинация от `toString` и `valueOf` вместо `Symbol.toPrimitive`:

```js run
let user = {
  name: "John",
  money: 1000,

  // hint="string"
  toString() {
    return `{name: "${this.name}"}`;
  },

  // hint="number" или "default"
  valueOf() {
    return this.money;
  }

};

alert(user); // toString -> {name: "John"}
alert(+user); // valueOf -> 1000
alert(user + 500); // valueOf -> 1500
```

Както виждаме, поведението е същото като предишния пример с `Symbol.toPrimitive`.

Често искаме само един "универсален" място за справяне с всички примитивни преобразувания. В този случай можем да приложим само `toString`, като тук:

```js run
let user = {
  name: "John",

  toString() {
    return this.name;
  }
};

alert(user); // toString -> John
alert(user + 500); // toString -> John500
```

В отсъствието на `Symbol.toPrimitive` и `valueOf`, `toString` ще се справят с всички примитивни преобразувания.

<<<<<<< HEAD
## Типове при връщане
=======
### A conversion can return any primitive type
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

Важното, което трябва да знаете за всички методи за примитивно преобразуване е, че те не връщат непременно "подсказаните" примитиви.

Няма контрол дали `toString` ще връща точно низ, или дали метода `Symbol.toPrimitive` връща точно число при подсказката `"number"`.

Единственото задължително нещо е че: тези методи трябва да върнат примитни типове данни, а не обекти.

```smart header="Исторически бележки"
По исторически причини, ако `toString` или `valueOf` връщат обект, няма да има грешка, но стойностите биват игнорирани (например, ако методът не съществува). Това е така, защото в древни времена не е имало добра концепция за "грешките" в JavaScript.

За разлика от това, `Symbol.toPrimitive` *трябва да* връща примитивен тип данни, в противен случай ще имаме грешка.
```

## Допълнителни преобразувания

Както вече знаем, много оператори и функции извършват преобразуване на типове, например умножение `*` преобразува операндите в числа.

Ако предадем обект като аргумент, тогава ще имаме два етапа:
1. Обектът се преобразува в примитивен тип данни (използвайки описаните по-горе правила).
2. Ако полученият примитив не е от правилния тип, то се преобразува.

Например:

```js run
let obj = {
  // toString обработва всички реализации при липса на други методи
  toString() {
    return "2";
  }
};

alert(obj * 2); // 4, обект преобразуван в примитивен "2", след това умножението го направи число
```

1. Умножението на `obj * 2` пръво преобразува обекта към примитивен тип данни (това е `"2"`).
2. Тогава `"2" * 2` става `2 * 2` (низът се преобразува на число).

Бинарния плюс ще конкатенира низовете в същата ситуация, тъй като с радост приема низ:

```js run
let obj = {
  toString() {
    return "2";
  }
};

alert(obj + 2); // 22 ("2" + 2), преобразуване в примитивен връща низ => конкатенация
```

## Обобщение

Преобразуването на обект към примитивен тип данни се извиква автоматично чрез вградените функции и оператори, които очакват примитив като стойност.

Има 3 вида (подсказки) за него:
- `"string"` (`alert` и други операции, които се нуждаят от низ)
- `"number"` (за математически изрази)
- `"default"` (малки оператори)

Спецификацията описва изрично кой оператор какъв подсказ използва. Има много малки оператори, които "не знаят какво да очакват" и използват `"default"` подсказ. Обикновено за вградени обекти `"default"` подсказката се обработва по същия начин като `"number"`, така че на практика последните две често се сливат заедно.

Така че, Алгоритъмът за преобразуване е:

1. Извикайте `obj[Symbol.toPrimitive](hint)` ако методът не съществува,
2. В противен случай ако подсказката е `"string"`
    - опитайте `obj.toString()` и `obj.valueOf()`, където съществува.
3. В противен случай ако подсказката е `"number"` или `"default"`
    - опитайте `obj.valueOf()` и `obj.toString()`, където съществува.

<<<<<<< HEAD
На практика често е достатъчно само да се приложи `obj.toString()` като метод за "хващане на всички преобразувания, които връщат "четлив за човека" представяне на обект, за вписване или отстраняване на грешки.  
=======
In practice, it's often enough to implement only `obj.toString()` as a "catch-all" method for string conversions that should return a "human-readable" representation of an object, for logging or debugging purposes.  

As for math operations, JavaScript doesn't provide a way to "override" them using methods, so real life projects rarely use them on objects.
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de
