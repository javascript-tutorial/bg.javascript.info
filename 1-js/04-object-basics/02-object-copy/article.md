# Копиране на обекти и референции

<<<<<<< HEAD
Една от основните разлики между обектите и примитивите типове е, че те се съхраняват и се копират "чрез референция", за разлика от примитивните стойности: `string`, `numbers`, `boolean` и др. -- те винаги се копират като "цяла стойност".

Това е лесно за разбиране, когато погледнем "под капака", за да разберем какво наистина става когато копираме стойност.
=======
One of the fundamental differences of objects versus primitives is that objects are stored and copied "by reference", whereas primitive values: strings, numbers, booleans, etc -- are always copied "as a whole value".

That's easy to understand if we look a bit under the hood of what happens when we copy a value.
>>>>>>> 23e85b3c33762347e26276ed869e491e959dd557

Нека да започнем с примитивена стойност, например един `string`.

Тука поставяме копие на `message` в `phrase`:

```js
let message = "Hello!";
let phrase = message;
```

<<<<<<< HEAD
В резултат на това имаме две независими променливи, всяка от които съхранява низ `"Hello!"`.
=======
As a result we have two independent variables, each one storing the string `"Hello!"`.
>>>>>>> 23e85b3c33762347e26276ed869e491e959dd557

![](variable-copy-value.svg)

Съвсем очевиден резултат, нали?

Обектите не са такива.

<<<<<<< HEAD
**Променливата съхранява не самия обект, а "адреса в паметта", с други думи "референцията" към него.**

Погледнете примера за подобна променлива:
=======
**A variable assigned to an object stores not the object itself, but its "address in memory" -- in other words "a reference" to it.**

Let's look at an example of such a variable:
>>>>>>> 23e85b3c33762347e26276ed869e491e959dd557

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

Когато изпълняваме някои действия с обекта, примерно вземаме стойноста на свойството `user.name`, JavaScript двугателя търси този адрес и извършва операцията върху този действителен обект.
=======
We may think of an object variable, such as `user`, as like a sheet of paper with the address of the object on it.

When we perform actions with the object, e.g. take a property `user.name`, the JavaScript engine looks at what's at that address and performs the operation on the actual object.
>>>>>>> 23e85b3c33762347e26276ed869e491e959dd557

Сега ето защо това е важно.

<<<<<<< HEAD
**Когато променливата на обектната е копирана -- референцията е копирана, обектът не се дублира.**
=======
**When an object variable is copied, the reference is copied, but the object itself is not duplicated.**
>>>>>>> 23e85b3c33762347e26276ed869e491e959dd557

Например:

```js no-beautify
let user = { name: "John" };

let admin = user; // копира референцията
```

<<<<<<< HEAD
Сега имаме две променливи, всеки от тях с референция към един и същ обект:

![](variable-copy-reference.svg)

Както виждате, все още има един обект, с две променливи, които го реферират.

Можем да използваме всяка променлива за достъп до обекта и промяна на съдържанието му:
=======
Now we have two variables, each storing a reference to the same object:

![](variable-copy-reference.svg)

As you can see, there's still one object, but now with two variables that reference it.

We can use either variable to access the object and modify its contents:
>>>>>>> 23e85b3c33762347e26276ed869e491e959dd557

```js run
let user = { name: 'John' };

let admin = user;

*!*
admin.name = 'Pete'; // променен от "admin" референцията
*/!*

alert(*!*user.name*/!*); // 'Pete', промените се виждат от "user" референцията
```

<<<<<<< HEAD
Примерът по-горе демонстрира, че има само един обект. Сякаш имахме шкаф с два ключа и използвахме един от тях (`admin`), за да влезем в него. След това, ако по-късно използваме друг ключ (`user`) можем да видим промените.

## Сравнение по референция
=======
It's as if we had a cabinet with two keys and used one of them (`admin`) to get into it and make changes. Then, if we later use another key (`user`), we are still opening the same cabinet and can access the changed contents.
>>>>>>> 23e85b3c33762347e26276ed869e491e959dd557

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

<<<<<<< HEAD
За сравнения като `obj1 > obj2` или за сравнение с примитив `obj == 5`, обектите се преобразуват в примитиви. Ще изучим как преобразуванията на обекти работят много скоро, но за да кажем истината, подобни сравнения се случват много рядко, обикновено в резултат на грешка в кода.
=======
For comparisons like `obj1 > obj2` or for a comparison against a primitive `obj == 5`, objects are converted to primitives. We'll study how object conversions work very soon, but to tell the truth, such comparisons are needed very rarely -- usually they appear as a result of a programming mistake.
>>>>>>> 23e85b3c33762347e26276ed869e491e959dd557

## Клониране и сливане, Object.assign

Така, копирането на променливата на обекта създава още една референция към същия обект.

Но какво ще стане, ако трябва да дублираме обект? Да създадете независимо копие, клонинг?

<<<<<<< HEAD
Това също е изпълнимо, но малко по-трудно, тъй като няма вграден метод за това в JavaScript. Всъщност това рядко е необходимо. Копирането чрез референция е добро през повечето време.
=======
That's also doable, but a little bit more difficult, because there's no built-in method for that in JavaScript. But there is rarely a need -- copying by reference is good most of the time.
>>>>>>> 23e85b3c33762347e26276ed869e491e959dd557

Но ако наистина искаме това, тогава трябва да създадем нов обект и да репликираме структурата на съществуващия, като повтаряме неговите свойства и ги копираме на примитивно ниво.

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

Също така можем да използваме метода [Object.assign](mdn:js/Object/assign) за този цел.

Синтаксисът е:

```js
Object.assign(dest, [src1, src2, src3...])
```

- Първият аргумент `dest` е целевия обект.
- Допълнителните аргументи `src1, ..., srcN` (могат да бъдат колкото са необходими) са обекти-източници.
- Той копира свойствата на всички обекти-източници `src1, ..., srcN` в целта `dest`.С други думи, свойствата на всички аргументи, започвайки от втория, се копират в първия обект.
- Функцията връща `dest`.

Например, можем да го използваме за сливане на няколко обекта в един:
```js
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

*!*
// копира всички свойства от permissions1 и permissions2 в user
Object.assign(user, permissions1, permissions2);
*/!*

// сега user = { name: "John", canView: true, canEdit: true }
```

Ако името на копираното свойство вече съществува, то се презаписва:

```js run
let user = { name: "John" };

Object.assign(user, { name: "Pete" });

alert(user.name); // сега user = { name: "Pete" }
```

Също можем да използваме `Object.assign` за да заменим `for..in` цикъла за просто клониране:

```js
let user = {
  name: "John",
  age: 30
};

*!*
let clone = Object.assign({}, user);
*/!*
```

Той копира всички свойства на `user`в празния обект и го връща.

## Вложено клониране

Досега приемахме, че всички свойства на `user` са примитивни. Но свойствата могат да бъдат референции към други обекти. Какво да правим с тях?

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

Сега не е достатъчно да копираме `clone.sizes = user.sizes`, защото `user.sizes` е обект, и ще се копира чрез референция. Така `clone` и `user` ще споделят същите размери:

Като тук:

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

// "user" и "clone" споделят размерите
user.sizes.width++;       // променяте свойсвото от едно място
alert(clone.sizes.width); // 51, виждате резултата от друго
```

<<<<<<< HEAD
За да поправим това, трябва да използваме клониращия цикъл, който изследва всяка стойност на `user[key]` и, ако е обект, след това репликирайте и неговата структура. Това се нарича "deep cloning" (т.н. "дълбоко клониране").

Можем да използваме рекурсия за нейното имплементиране. Или, за да не изобретим колелото отново, вземете съществуваща имплементация, например [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep) от JavaScript библеотеката [lodash](https://lodash.com).
=======
To fix that, we should use a cloning loop that examines each value of `user[key]` and, if it's an object, then replicate its structure as well. That is called a "deep cloning".

We can use recursion to implement it. Or, to not reinvent the wheel, take an existing implementation, for instance [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep) from the JavaScript library [lodash](https://lodash.com).

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
>>>>>>> 23e85b3c33762347e26276ed869e491e959dd557

## Обобщение

<<<<<<< HEAD
Обектите се присвояват и копират чрез референция. С други думи, променливата съхранява "референцията" към стойността на обекта (адреса в паметта), а не самата "стойност на обекта". Така че, копирането на такава променлива или предаването й като аргумент на функция копира тази референция, а не самия обекта.
=======
Objects are assigned and copied by reference. In other words, a variable stores not the "object value", but a "reference" (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.
>>>>>>> 23e85b3c33762347e26276ed869e491e959dd557

Всички операции чрез копирани референции (като добавяне/изтриване на свойства) се изпълняват върху един и същ обект.

За да направим "реално копие" (клонинг) можем да използваме `Object.assign` за т.н. "плитко копие" (вложените обекти се копират чрез референция) или функции за "дълбоко клониране", като [_.cloneDeep(obj)](https://lodash.com/docs#cloneDeep).
