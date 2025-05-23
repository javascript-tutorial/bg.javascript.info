# Методи за примитиви

JavaScript ни позволява да работим с примитиви (низове, числа, и др.) сякаш са обекти. Също така те ни предоставят методи за извикването им като такива. Ще ги изучим скоро, но първо ще видим как работи, защото, разбира се, примитивите не са обекти (и тук ще го направим още по-ясно).

Нека разгледаме ключовите разграничения между примитиви и обекти.

Примитив:

- Е стойност на примитивен тип.
- Съществува 7 примитивни типа: `string`, `number`, `bigint`, `boolean`, `symbol`, `null` и `undefined`.

Обект:

- Е способен да съхранява множество стойности като свойства.
- Може да се създаде с `{}`, например: `{name: "John", age: 30}`. Има и други видове обекти в JavaScript: функциите, например, са обекти.

Едно от най-добрите неща за обектите е, че могат да съхраняват функция като един свойствата им.

```js run
let john = {
  name: "John",
  sayHi: function() {
    alert("Здравей приятел!");
  }
};

john.sayHi(); // Здравей приятел!
```

Така че тук сме направили обект `john` с метода `sayHi`.

Вече съществуват много вградени обекти, такива които работят с дати, грешки, HTML елементи, и т.н. . Те имат различни свойства и методи.

Но, тези функции идват със своята цена!

Обектита са "тежки" за разлика от примитивите. Те изискват допълнителни ресурси за поддръжка на вътрешните механизми.

## Примитив като обект

Ето парадокса, с който се сблъсква създателят на JavaScript:

<<<<<<< HEAD
<<<<<<< HEAD
-Има много неща, които човек би искал да направи с примитив като низ или число. Би било чудесно да получите достъп до тях като методи.
- Примитивите трябва да са възможно най-бързи и леки.
=======
- There are many things one would want to do with a primitive like a string or a number. It would be great to access them using methods.
=======
- There are many things one would want to do with a primitive, like a string or a number. It would be great to access them using methods.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
- Primitives must be as fast and lightweight as possible.
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

Решението изглежда малко неудобно, но ето го:

1. Примитивите все още са примитивни. Единична стойност, както е желано.
2. Езикът позволява достъп до методи и свойства на низовете, числата, булевите променливи и символите.
3. За да може това да работи, по специален начин "обектът се опакова", което осигурява допълнителната функционалност, и след това е унищожен.

<<<<<<< HEAD
Начините на "опаковането на обектите" са различни за всеки примитивен тип и са наречени: `String`, `Number`, `Boolean` и `Symbol`. По този начин те предоставят различни набори от методи.
=======
The "object wrappers" are different for each primitive type and are called: `String`, `Number`, `Boolean`, `Symbol` and `BigInt`. Thus, they provide different sets of methods.
>>>>>>> 3699f73b4ccb2a57ac5ef990d2687bf31ccf564c

Например, съществува метод за низовете [str.toUpperCase()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) който връща с главни букви `str`.

Ето как работи:

```js run
let str = "Здравей";

alert( str.toUpperCase() ); // ЗДРАВЕЙ
```

Просто е нали? Ето какво всъщност се случва `str.toUpperCase()`:

1. Низът `str` е примитивен. Така че в момента на достъп до свойсвтото се създава специален обект, който знае стойността на низа, и има полезни методи, като `toUpperCase()`.
2. Този метод се изпълнява и връща нов низ (показано от `alert`).
3. Специалният обект е унищожен, оставяйки примитивното `str` само.

Така примитивите могат да осигурят методи, но те все още остават леки.

JavaScript двигателят силно оптимизира този процес. Може дори да пропусне създаването на допълнителния обект. Но все пак трябва да се придържа към спецификацията и да се държи така, сякаш създава такава.

Например, числата има свои методи, например [toFixed(n)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) закръгля числото до дадената точност:

```js run
let n = 1.23456;

alert( n.toFixed(2) ); // 1.23
```

Ще видим по-конкретни методи в главите <info:number> и <info:string>.


````warn header="Constructors `String/Number/Boolean` са само за вътрешна употреба"
Някои езици като Java ни позволяват изрично да създаваме "опаковъчни обекти" за примитиви, използващи синтаксис като `new Number(1)` или `new Boolean(false)`.

В JavaScript, това също е възможно по исторически причини, но силно **не се препоръчва**. Нещата ще полудеят на няколко места.

Например:

```js run
alert( typeof 0 ); // "number"

alert( typeof new Number(0) ); // "object"!
```

Обектите винаги връщат `true` при `if`, така че тук известието ще се появи:

```js run
let zero = new Number(0);

if (zero) { // zero е true, защото е обект
  alert( "Нулата е вярна!?!" );
}
```

<<<<<<< HEAD
От друга страна, използвайки същите функции `String/Number/Boolean` без `new` е напълно нормално и полезно нещо. Те преобразуват стойността в съответния тип: към низ, число, или булев тип (примитивен).

Например, това е напълно валидно:
=======
On the other hand, using the same functions `String/Number/Boolean` without `new` is totally fine and useful thing. They convert a value to the corresponding type: to a string, a number, or a boolean (primitive).

For example, this is entirely valid:

>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
```js
let num = Number("123"); // конвертирате низ в число
```
````


````warn header="null/undefined нямат методи"
Специалните примитиви `null` и `undefined` са изключения. Те нямат съответните "опаковъчни обекти" и не предоставят никакви методи.В известен смисъл те са "най-примитивните".

Опит за достъп до свойство с такава стойност би довело до грешка:

```js run
alert(null.test); // грешка
````

## Обобщение

- Примитиви с изключение на `null` и `undefined` предоставят много полезни методи. Ще ги изучим в следващите глави.
- Формално тези методи работят чрез временни обекти, но JavaScript двигателите са добре настроени, за да оптимизират това вътрешно, така че не са ценни при извикване.
