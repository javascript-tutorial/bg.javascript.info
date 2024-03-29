# Копиране на обекти и референции

Една от основните разлики между обектите и примитивите типове е, че те се съхраняват и се копират "чрез референция", за разлика от примитивните стойности: `string`, `numbers`, `boolean` и др. -- те винаги се копират като "цяла стойност".

Това е лесно за разбиране, когато погледнем "под капака", за да разберем какво наистина става когато копираме стойност.

Нека да започнем с примитивена стойност, например един `string`.

Тука поставяме копие на `message` в `phrase`:

```js
let message = "Hello!";
let phrase = message;
```

В резултат на това имаме две независими променливи, всяка от които съхранява низ `"Hello!"`.

![](variable-copy-value.svg)

Съвсем очевиден резултат, нали?

Обектите не са такива.

**Променливата съхранява не самия обект, а "адреса в паметта", с други думи "референцията" към него.**

Погледнете примера за подобна променлива:

```js
let user = {
  name: "John"
};
```

И ето как всъщност то се съхранява в паметта:

![](variable-contains-reference.svg)

Обектът е запазен някъде в паметта (вдясно в картината), докато променливата `user` (в ляво) има "референция" към него.

<<<<<<< HEAD
Може да помислим променливата от тип обект, както е `user`, като лист хартия с адреси.
=======
We may think of an object variable, such as `user`, like a sheet of paper with the address of the object on it.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Когато изпълняваме някои действия с обекта, примерно вземаме стойноста на свойството `user.name`, JavaScript двугателя търси този адрес и извършва операцията върху този действителен обект.

Сега ето защо това е важно.

**Когато променливата на обектната е копирана -- референцията е копирана, обектът не се дублира.**

Например:

```js no-beautify
let user = { name: "John" };

let admin = user; // копира референцията
```

Сега имаме две променливи, всеки от тях с референция към един и същ обект:

![](variable-copy-reference.svg)

Както виждате, все още има един обект, с две променливи, които го реферират.

Можем да използваме всяка променлива за достъп до обекта и промяна на съдържанието му:

```js run
let user = { name: 'John' };

let admin = user;

*!*
admin.name = 'Pete'; // променен от "admin" референцията
*/!*

alert(*!*user.name*/!*); // 'Pete', промените се виждат от "user" референцията
```

Примерът по-горе демонстрира, че има само един обект. Сякаш имахме шкаф с два ключа и използвахме един от тях (`admin`), за да влезем в него. След това, ако по-късно използваме друг ключ (`user`) можем да видим промените.

## Сравнение по референция

Две обекта са равни само ако са един и същ обект.

Например, тук `a` и `b` реферират един и същ обект, затова те са еднакви:

```js run
let a = {};
let b = a; // копира референцията

alert( a == b ); // true, и двете променливи се отнасят към един и същ обект
alert( a === b ); // true
```

И тук два независими обекта не са равни, въпреки че и двата са празни:

```js run
let a = {};
let b = {}; // два независими обекта

alert( a == b ); // falsе
```

За сравнения като `obj1 > obj2` или за сравнение с примитивен `obj == 5`, обектите се преобразуват в примитиви. Ще изучим как преобразуванията на обекти работят много скоро, но за да кажем истината, подобни сравнения се случват много рядко, обикновено в резултат на грешка в кода.

<<<<<<< HEAD
<<<<<<< HEAD
## Клониране и сливане, Object.assign
=======
=======
````smart header="Const objects can be modified"
An important side effect of storing objects as references is that an object declared as `const` *can* be modified.

For instance:

```js run
const user = {
  name: "John"
};

*!*
user.name = "Pete"; // (*)
*/!*

alert(user.name); // Pete
```

It might seem that the line `(*)` would cause an error, but it does not. The value of `user` is constant, it must always reference the same object, but properties of that object are free to change.

In other words, the `const user` gives an error only if we try to set `user=...` as a whole.

That said, if we really need to make constant object properties, it's also possible, but using totally different methods. We'll mention that in the chapter <info:property-descriptors>.
````

>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
## Cloning and merging, Object.assign [#cloning-and-merging-object-assign]
>>>>>>> 6ab384f2512902d74e4b0ff5a6be60e48ab52e96

Така, копирането на променливата на обекта създава още една референция към същия обект.

<<<<<<< HEAD
Но какво ще стане, ако трябва да дублираме обект? Да създадете независимо копие, клонинг?

Това също е изпълнимо, но малко по-трудно, тъй като няма вграден метод за това в JavaScript. Всъщност това рядко е необходимо. Копирането чрез референция е добро през повечето време.

Но ако наистина искаме това, тогава трябва да създадем нов обект и да репликираме структурата на съществуващия, като повтаряме неговите свойства и ги копираме на примитивно ниво.
=======
But what if we need to duplicate an object?

We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Като този:

```js run
let user = {
  name: "John",
  age: 30
};

*!*
let clone = {}; // новият празен обект

//нека копираме всички свойства на потребителя в него
for (let key in user) {
  clone[key] = user[key];
}
*/!*

// сега клонингът е напълно независим обект със същото съдържание
clone.name = "Pete"; // променяме данните в него

alert( user.name ); // все още "John" e в оригиналния обект
```

<<<<<<< HEAD
<<<<<<< HEAD
Също така можем да използваме метода [Object.assign](mdn:js/Object/assign) за този цел.
=======
Also we can use the method [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) for that.
>>>>>>> 3699f73b4ccb2a57ac5ef990d2687bf31ccf564c
=======
We can also use the method [Object.assign](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Синтаксисът е:

```js
Object.assign(dest, ...sources)
```

<<<<<<< HEAD
- Първият аргумент `dest` е целевия обект.
- Допълнителните аргументи `src1, ..., srcN` (могат да бъдат колкото са необходими) са обекти-източници.
- Той копира свойствата на всички обекти-източници `src1, ..., srcN` в целта `dest`.С други думи, свойствата на всички аргументи, започвайки от втория, се копират в първия обект.
- Функцията връща `dest`.

Например, можем да го използваме за сливане на няколко обекта в един:
```js
=======
- The first argument `dest` is a target object.
- Further arguments is a list of source objects.

It copies the properties of all source objects into the target `dest`, and then returns it as the result.

For example, we have `user` object, let's add a couple of permissions to it:

```js run
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

*!*
// копира всички свойства от permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
*/!*

<<<<<<< HEAD
// сега user = { name: "John", canView: true, canEdit: true }
=======
// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
```

Ако името на копираното свойство вече съществува, то се презаписва:

```js run
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // сега user = { name: "Pete" }
```

<<<<<<< HEAD
Също можем да използваме `Object.assign` за да заменим `for..in` цикъла за просто клониране:
=======
We also can use `Object.assign` to perform a simple object cloning:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

```js run
let user = {
  name: "John",
  age: 30
};

*!*
let clone = Object.assign({}, user);
*/!*

alert(clone.name); // John
alert(clone.age); // 30
```

<<<<<<< HEAD
Той копира всички свойства на `user`в празния обект и го връща.
=======
Here it copies all properties of `user` into the empty object and returns it.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

<<<<<<< HEAD
<<<<<<< HEAD
## Вложено клониране
=======
There are also other methods of cloning an object, e.g. using the [spread operator](info:rest-parameters-spread) `clone = {...user}`, covered later in the tutorial.
=======
There are also other methods of cloning an object, e.g. using the [spread syntax](info:rest-parameters-spread) `clone = {...user}`, covered later in the tutorial.
>>>>>>> 6ab384f2512902d74e4b0ff5a6be60e48ab52e96

## Nested cloning
>>>>>>> f6ae0b5a5f3e48074312ca3e47c17c92a5a52328

<<<<<<< HEAD
Досега приемахме, че всички свойства на `user` са примитивни. Но свойствата могат да бъдат референции към други обекти. Какво да правим с тях?
=======
Until now we assumed that all properties of `user` are primitive. But properties can be references to other objects.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Като тези тук:
```js run
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182
```

<<<<<<< HEAD
Сега не е достатъчно да копираме `clone.sizes = user.sizes`, защото `user.sizes` е обект, и ще се копира чрез референция. Така `clone` и `user` ще споделят същите размери:

Като тук:
=======
Now it's not enough to copy `clone.sizes = user.sizes`, because `user.sizes` is an object, and will be copied by reference, so `clone` and `user` will share the same sizes:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

```js run
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, същия обект

<<<<<<< HEAD
// "user" и "clone" споделят размерите
user.sizes.width++;       // променяте свойсвото от едно място
alert(clone.sizes.width); // 51, виждате резултата от друго
```

За да поправим това, трябва да използваме клониращия цикъл, който изследва всяка стойност на `user[key]` и, ако е обект, след това репликирайте и неговата структура. Това се нарича "deep cloning" (т.н. "дълбоко клониране").

Можем да използваме рекурсия за нейното имплементиране. Или, за да не изобретим колелото отново, вземете съществуваща имплементация, например [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep) от JavaScript библеотеката [lodash](https://lodash.com).

````smart header="'const' обектите могат да бъдат модифицирани"
Важен страничен ефект от съхраняването на обекти като референции е, че обект, деклариран като `const` *може* да бъде модифициран.

Например:
=======
// user and clone share sizes
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 60, get the result from the other one
```

To fix that and make `user` and `clone` truly separate objects, we should use a cloning loop that examines each value of `user[key]` and, if it's an object, then replicate its structure as well. That is called a "deep cloning" or "structured cloning". There's [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone) method that implements deep cloning.


### structuredClone

The call `structuredClone(object)` clones the `object` with all nested properties.

Here's how we can use it in our example:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

```js run
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

*!*
let clone = structuredClone(user);
*/!*

alert( user.sizes === clone.sizes ); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60;    // change a property from one place
alert(clone.sizes.width); // 50, not related
```

<<<<<<< HEAD
Може да изглежда, че линията `(*)` би довело до грешка, но то не го прави. Стойността на `user` е константа, то винаги трябва да реферира към един и същ обект, но свойствата на този обект могат да се променят.

С други думи `const user` дава грешка само ако се опитаме да зададем `user=...` като цяло.

Въпреки това, ако наистина трябва да направим постоянни свойства на обекта, това също е възможно, но използвайки напълно различни методи. Ще споменем това в главата <info:property-descriptors>.
````
=======
The `structuredClone` method can clone most data types, such as objects, arrays, primitive values.

It also supports circular references, when an object property references the object itself (directly or via a chain or references).

For instance:

```js run
let user = {};
// let's create a circular reference:
// user.me references the user itself
user.me = user;

let clone = structuredClone(user);
alert(clone.me === clone); // true
```

As you can see, `clone.me` references the `clone`, not the `user`! So the circular reference was cloned correctly as well.

Although, there are cases when `structuredClone` fails.

For instance, when an object has a function property:

```js run
// error
structuredClone({
  f: function() {}
});
```

Function properties aren't supported.

To handle such complex cases we may need to use a combination of cloning methods, write custom code or, to not reinvent the wheel, take an existing implementation, for instance [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep) from the JavaScript library [lodash](https://lodash.com).
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

## Обобщение

Обектите се присвояват и копират чрез референция. С други думи, променливата не съхранява "стойността на обекта", а "референцията" (адреса в паметта) като стойност. Така че, копирането на такава променлива или предаването й като аргумент на функция копира тази референция, а не самия обекта.

Всички операции чрез копирани референции (като добавяне/изтриване на свойства) се изпълняват върху един и същ обект.

<<<<<<< HEAD
За да направим "реално копие" (клонинг) можем да използваме `Object.assign` за т.н. "плитко копие" (вложените обекти се копират чрез референция) или функции за "дълбоко клониране", като [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep).
=======
To make a "real copy" (a clone) we can use `Object.assign` for the so-called "shallow copy" (nested objects are copied by reference) or a "deep cloning" function `structuredClone` or use a custom cloning implementation, such as [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep).
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
