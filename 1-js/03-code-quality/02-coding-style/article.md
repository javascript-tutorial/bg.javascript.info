# Стил на кодиране

Нашият код трябва да бъде колкото е възможно по-ясен и лесен за разбиране.

Това е изкуството на програмирането -- да земеш сложна задача и да напишеш код, който едновременно работи вярно и е лесен за четене от хора. Добрият стил на писане на код помага много за това. 

## Синтаксис

Ето страница с някои препоръчителни правила (вижте изображението за повече информация):

![](code-style.svg)
<!--
```js
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 0) {
  alert(`Степен ${n} не се поддържа,
    моля въведете цяло положително число`);
} else {
  alert( pow(x, n) );
}
```

-->

Сега нека обсъдим по-подробно правилата и причините за тях.

```warn header="Няма \"задължителни\" правила"
Нищо не е задължително. Това са стилови предпочитания, не религиозни догми.
```

### Къдрави скоби

В повечето JavaScript проекти къдравите скоби се пишат по "египетски" стил с отварящата скоба на същия ред като съответната ключова дума -- не на нов ред. Трябва да има разстояние преди отварящата скоба, както тук:

```js
if (condition) {
  // do this
  // ...and that
  // ...and that
}
```

Едноредовият конструкт `if (condition) doSomething()`, е важен граничен случай. Трябва ли да използваме скоби при него?

Ето няколко варианта, за да прецените сами тяхната четимост:

1. 😠 Начинаещите програмисти понякога правят това. Лошо.! Къдравите скоби не са нужни:
    ```js
    if (n < 0) *!*{*/!*alert(`Power ${n} is not supported`);*!*}*/!*
    ```
2. 😠 Разделяне на отделен ред без скоби. Никога не правете това. Така може лесно да допуснете грешка, когато добавяте нови редове:
    ```js
    if (n < 0)
      alert(`Степен ${n} не се поддържа`);
    ```
3. 😏 Един ред без скоби - допустимо е, ако кодът е кратък:
    ```js
    if (n < 0) alert(`Степен ${n} не се поддържа`);
    ```
4. 😃 Най-добрият вариант:
    ```js
    if (n < 0) {
      alert(`Степен ${n} не се поддържа`);
    }
    ```

Когато кодът е много кратък, е допустимо той да бъде на един ред. `if (cond) return null`. Но блока от код (последният вариант) обикновено е по-четим.

### Дължина на реда

Никой не иска да чете дълги хоризонтални редове от код. Добра практика е да ги разделяме на по-кратки. 

Например:
```js
// backtick quotes ` позволяват да се раздели един стринг на много редове
let str = `
  Ecma International's TC39 is a group of JavaScript developers,
  implementers, academics, and more, collaborating with the community
  to maintain and evolve the definition of JavaScript.
`;
```

И за `if` условия:

```js
if (
  id === 123 &&
  moonPhase === 'Waning Gibbous' &&
  zodiacSign === 'Libra'
) {
  letTheSorceryBegin();
}
```

Максималната дължина на реда се решава от екипа. Обикновено е между 80 и 120 символа. 

### Отстъпи / индентации / отстояния

Има два типа индентации:

- **Хоризонтални индентации: 2 или 4 интервала.**

    Хоризонталнати индентация се прави с 2 или 4 интервала, или с хоризонталния символ за табулация (key `key:Tab`). Какво да използвате е стара свещена война. Днес по-1есто се използват интервалите.

    Едно предимство на интервалите пред табулациите е, че те позволяват по-гъвкава конфигурация на идентациите от табулациите.

    Например може да подравним аргументите с отварящата скоба:

    ```js no-beautify
    show(parameters,
         aligned, // 5 интервала padding в ляво  
         one,
         after,
         another
      ) {
      // ...
    }
    ```

- **Вертикални индентации: празни редове за разеляне на кода на логически блокове.**

    Even a single function can often be divided into logical blocks. In the example below, the initialization of variables, the main loop and returning the result are split vertically:

    ```js
    function pow(x, n) {
      let result = 1;
      //              <--
      for (let i = 0; i < n; i++) {
        result *= x;
      }
      //              <--
      return result;
    }
    ```

    Insert an extra newline where it helps to make the code more readable. There should not be more than nine lines of code without a vertical indentation.

### Semicolons

A semicolon should be present after each statement, even if it could possibly be skipped.

There are languages where a semicolon is truly optional and it is rarely used. In JavaScript, though, there are cases where a line break is not interpreted as a semicolon, leaving the code vulnerable to errors. See more about that in the chapter <info:structure#semicolon>.

If you're an experienced JavaScript programmer, you may choose a no-semicolon code style like [StandardJS](https://standardjs.com/). Otherwise, it's best to use semicolons to avoid possible pitfalls. The majority of developers put semicolons.

### Nesting Levels

Try to avoid nesting code too many levels deep.

For example, in the loop, it's sometimes a good idea to use the [`continue`](info:while-for#continue) directive to avoid extra nesting.

For example, instead of adding a nested `if` conditional like this:

```js
for (let i = 0; i < 10; i++) {
  if (cond) {
    ... // <- one more nesting level
  }
}
```

We can write:

```js
for (let i = 0; i < 10; i++) {
  if (!cond) *!*continue*/!*;
  ...  // <- no extra nesting level
}
```

A similar thing can be done with `if/else` and `return`.

For example, two constructs below are identical.

Option 1:

```js
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }

    return result;
  }  
}
```

Option 2:

```js
function pow(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
```

The second one is more readable because the "special case" of `n < 0` is handled early on. Once the check is done we can move on to the "main" code flow without the need for additional nesting.

## Function Placement

If you are writing several "helper" functions and the code that uses them, there are three ways to organize the functions.

1. Declare the functions *above* the code that uses them:

    ```js
    // *!*function declarations*/!*
    function createElement() {
      ...
    }

    function setHandler(elem) {
      ...
    }

    function walkAround() {
      ...
    }

    // *!*the code which uses them*/!*
    let elem = createElement();
    setHandler(elem);
    walkAround();
    ```
2. Code first, then functions

    ```js
    // *!*the code which uses the functions*/!*
    let elem = createElement();
    setHandler(elem);
    walkAround();

    // --- *!*helper functions*/!* ---
    function createElement() {
      ...
    }

    function setHandler(elem) {
      ...
    }

    function walkAround() {
      ...
    }
    ```
3. Mixed: a function is declared where it's first used.

Most of time, the second variant is preferred.

That's because when reading code, we first want to know *what it does*. If the code goes first, then it becomes clear from the start. Then, maybe we won't need to read the functions at all, especially if their names are descriptive of what they actually do.

## Style Guides

A style guide contains general rules about "how to write" code, e.g. which quotes to use, how many spaces to indent, the maximal line length, etc. A lot of minor things.

When all members of a team use the same style guide, the code looks uniform, regardless of which team member wrote it.

Of course, a team can always write their own style guide, but usually there's no need to. There are many existing guides to choose from.

Some popular choices:

- [Google JavaScript Style Guide](https://google.github.io/styleguide/javascriptguide.xml)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Idiomatic.JS](https://github.com/rwaldron/idiomatic.js)
- [StandardJS](https://standardjs.com/)
- (plus many more)

If you're a novice developer, start with the cheat sheet at the beginning of this chapter. Then you can browse other style guides to pick up more ideas and decide which one you like best.

## Automated Linters

Linters are tools that can automatically check the style of your code and make improving suggestions.

The great thing about them is that style-checking can also find some bugs, like typos in variable or function names. Because of this feature, using a linter is recommended even if you don't want to stick to one particular "code style".

Here are some well-known linting tools:

- [JSLint](http://www.jslint.com/) -- one of the first linters.
- [JSHint](http://www.jshint.com/) -- more settings than JSLint.
- [ESLint](http://eslint.org/) -- probably the newest one.

All of them can do the job. The author uses [ESLint](http://eslint.org/).

Most linters are integrated with many popular editors: just enable the plugin in the editor and configure the style.

For instance, for ESLint you should do the following:

1. Install [Node.js](https://nodejs.org/).
2. Install ESLint with the command `npm install -g eslint` (npm is a JavaScript package installer).
3. Create a config file named `.eslintrc` in the root of your JavaScript project (in the folder that contains all your files).
4. Install/enable the plugin for your editor that integrates with ESLint. The majority of editors have one.

Here's an example of an `.eslintrc` file:

```js
{
  "extends": "eslint:recommended",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "no-console": 0,
    "indent": ["warning", 2]
  }
}
```

Here the directive `"extends"` denotes that the configuration is based on the "eslint:recommended" set of settings. After that, we specify our own.

It is also possible to download style rule sets from the web and extend them instead. See <http://eslint.org/docs/user-guide/getting-started> for more details about installation.

Also certain IDEs have built-in linting, which is convenient but not as customizable as ESLint.

## Summary

All syntax rules described in this chapter (and in the style guides referenced) aim to increase the readability of your code. All of them are debatable.

When we think about writing "better" code, the questions we should ask ourselves are: "What makes the code more readable and easier to understand?" and "What can help us avoid errors?" These are the main things to keep in mind when choosing and debating code styles.

Reading popular style guides will allow you to keep up to date with the latest ideas about code style trends and best practices.
