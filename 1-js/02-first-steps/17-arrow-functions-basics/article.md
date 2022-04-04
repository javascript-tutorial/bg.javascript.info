# Функции със стрелки, основата

Има още един много лесен и кратък синтаксис за създаване на функции, който често е по-добър от функционалните изрази. 

Нарича се "arrow functions" (функции със стрелки / стрелкови функции), защото изглежда така:

```js
let func = (arg1, arg2, ..., argN) => expression;
```

<<<<<<< HEAD
...Този код създава функция `func` която приема аргументи `arg1..argN`, след това  изчислява `израза` от дясната страна, който използва аргументите и връща резултат.
=======
This creates a function `func` that accepts arguments `arg1..argN`, then evaluates the `expression` on the right side with their use and returns its result.
>>>>>>> c5358c59494b53efb832c81a5338e0a23b22c269

С други думи това е по-кратката версия на:

```js
let func = function(arg1, arg2, ..., argN) {
  return expression;
};
```

Нека видим конкретен пример:

```js run
let sum = (a, b) => a + b;

/* Тази функция със стрелка е по-кратката версия на:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```

<<<<<<< HEAD
Както виждате `(a, b) => a + b` означава функция, която приема два аргумента именувани `a` и `b`. По време на изпълнението, тя изчислява израза `a + b` и връща резултата.
=======
As you can see, `(a, b) => a + b` means a function that accepts two arguments named `a` and `b`. Upon the execution, it evaluates the expression `a + b` and returns the result.
>>>>>>> e2f9e5840737e00846bfd492192d8a3828820c60

- Ако имаме само един аргумент, скобите около параметъра може да не се пишат. Така синтаксисът става дори още по-кратък.

    Например:

    ```js run
    *!*
    let double = n => n * 2;
    // почти същото като: let double = function(n) { return n * 2 }
    */!*

    alert( double(3) ); // 6
    ```

<<<<<<< HEAD
- Ако няма аргументи, скобите ще са празни (но те трябва да присъстват):
=======
- If there are no arguments, parentheses are empty, but they must be present:
>>>>>>> 45934debd9bb31376ea5da129e266df5b43e545f

    ```js run
    let sayHi = () => alert("Здравейте!");

    sayHi();
    ```

Функциите със стрелки могат да се използват по същия начин като функционалните изрази.

Например за да се създаде функция динамично:

```js run
let age = prompt("На каква възраст сте?", 18);

let welcome = (age < 18) ?
  () => alert('Здравейте') :
  () => alert("Поздравления!");

welcome();
```

Функциите със стрелки може да изглеждат непонятни и трудно четими на пръв поглед, но това бързо се променя щом се свикне със структурата им.

Те са много удобни за прости едноредови действия, когато не искаме да пишем твърде много излишен код.

## Многоредови функции със стрелки

<<<<<<< HEAD
Горният пример взе аргументите от лявата страна на `=>` и ги използва за да изчисли израза от дясната страна. 

Понякога имаме нужда от малко по-сложен код, като множество изрази или инструкции. Това може да се направи, но трябва да ги поставим между къдрави скоби. След това трябва да използваме `return` вътре в скобите.
=======
The arrow functions that we've seen so far were very simple. They took arguments from the left of `=>`, evaluated and returned the right-side expression with them.

Sometimes we need a more complex function, with multiple expressions and statements. In that case, we can enclose them in curly braces. The major difference is that curly braces require a `return` within them to return a value (just like a regular function does).
>>>>>>> 45934debd9bb31376ea5da129e266df5b43e545f

Ето така:

```js run
let sum = (a, b) => {  // къдравата скоба отваря многоредова функция
  let result = a + b;
*!*
<<<<<<< HEAD
  return result; // ако използваме къдрави скоби, тогава имаме нужда от експлицитен (ясен, изричен) "return" 
=======
  return result; // if we use curly braces, then we need an explicit "return"
>>>>>>> e2f9e5840737e00846bfd492192d8a3828820c60
*/!*
};

alert( sum(1, 2) ); // 3
```

```smart header="Следва още"
Тук възхвалявахме функциите със стрелки заради тяхната краткост. Но това не е всичко!

Функциите със стрелки имат и други интересни свойства.

За да ги изучим в дълбочина, първо трябва да опознаем някои други аспекти на JavaScript, така че ще се върнем към тези функции по-късно в глава <info:arrow-functions>.

За сега вече можем да използваме функциите със стрелки за едноредови действия и callbacks (обратно извикване).
```

## Обобщение

<<<<<<< HEAD
Функциите със стрелки са полезни за едноредови действия. Те могат да бъдат два вида:

1. Без къдрави скоби: `(...args) => expression` -- дясната страна е израз: функцията го изчислява и връща резултата.
2. С къдрави скоби: `(...args) => { body }` -- скобите ни позволяват да пишем множество инструкции в една функция, но трябва изрично да ползваме `return`, за да върнем резултат.
=======
Arrow functions are handy for simple actions, especially for one-liners. They come in two flavors:

1. Without curly braces: `(...args) => expression` -- the right side is an expression: the function evaluates it and returns the result. Parentheses can be omitted, if there's only a single argument, e.g. `n => n*2`.
2. With curly braces: `(...args) => { body }` -- brackets allow us to write multiple statements inside the function, but we need an explicit `return` to return something.
>>>>>>> 45934debd9bb31376ea5da129e266df5b43e545f
