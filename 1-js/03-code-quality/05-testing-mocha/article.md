# Автоматизирано тестване с Mocha

Автоматизираното тестване ще се използва в бъдещите задачи и също така се използва широко в реални проекти.

## Защо имаме нужда от тестове?

Когато пишем функция, обикновено можем да си представим какво ще прави: кои параметри какъв резултат ще върнат.

По време на писането на кода можем да проверим функцията като я стартитаме и сравним резултата с очаквания. Например можем да направим това в конзолата. 

Ако някъде има грешка, оправяме кода, стартираме го отново, проверяваме резултата и така, докато оправим всички грешки.

Но тези ръчни "рестартирания" не са перфектни.

**Когато тестваме код с ръчни рестартирания е лесно да пропуснем нещо.**

Например, създаваме функция `f`. Пишем част от кода, тестваме: `f(1)` работи, но `f(2)` не работи. Оправяме кода и сега `f(2)` работи. Изглежда че сме готови? Но забравихме да ретестваме `f(1)`. Това може да доведе до грешка.

Това е много типично. Когато разработваме нещо, ние обмисляме доста use кейсове. Но не можем да очакваме че програмиста ще проверява всички кейсове ръчно след всяка промяна. Така че лесно може да се оправи един бъг и да се счупи нещо друго в кода. 

**При автоматичното тестване тестовете се пишат отделно от кода. Те тестват нашите функции и сравняват резултатите с очакваните такива.**

## Behavior Driven Development (BDD)

Нека започнем с техника, наречена [Behavior Driven Development](http://en.wikipedia.org/wiki/Behavior-driven_development) или накратко, BDD.

**BDD съдържа 3 неща в едно: тестове И документация И примери.**

За да разберем BDD, ние ще разгледаме практически пример на разработка на софтуер.

## Разработката на Development of "pow" (функцията за повдигане на степен): спецификация

Да кажем, че искаме да направим функция `pow(x, n)` която повдига `x` до цяло число на степен `n`. Ние приемаме, че `n≥0`.

Тази задача е просто пример: В JavaScript има един оператор `**`, който може да направи това, но тук се концентрираме върху процеса на разработка, който може да се приложи и към по-сложни задачи.

Преди да напишем кода на `pow`, можем да си представим какво искаме да прави функцията и да го опишем.

Такова описание се нарича *спецификация* или накратко спек и съдържа описание на use кейсове, заедно с тестовете за тях, като тези:

```js
describe("pow", function() {

  it("повдига до степен n", function() {
    assert.equal(pow(2, 3), 8);
  });

});
```

Спекът има 3 основни части, които можете да видите горе:

`describe("title", function() { ... })`
: Каква функционалност описваме. В нашия случай описваме функцията `pow`. Използва се да групираp "работници" -- блоковете `it`.

`it("use case description", function() { ... })`
: В заглавието на `it` ние описваме *на разбираем за човека език* конкретният use кейс, и вторият аргумент е функцията, която го тества.

`assert.equal(value1, value2)`
: Кодът вътре в `it` блока, ако имплементацията е точна, трябва да се изпълни без грешки.

    Функциите `assert.*` се използват да се провери дали `pow` работи както трябва. Тук използваме една от тях -- `assert.equal`, тя сравнява аргументите и ако не са равни, дава грешка. Тук проверява дали резултатът от  `pow(2, 3)` е равен на `8`. Има други видове сравнения и проверки, които ще добавим после.

Спецификацията може да се изпълни и ще стартира тестовете в `it` блока. Ще видим това по-късно.

## Етапи на разработката на софтуер

Етапите на разработка на софтуер обикновено изглеждат така:

1. Пише се начален спек с тестове за най-основната функционалност.
2. Прави се първоначална имплементация.
3. За да проверим дали работи, ние стартираме [Mocha](http://mochajs.org/) (повече информация скоро) която стартира спека. Докато функционалността не е завършена, ще се появяват грешки. Ние правим промени, докато всичко започне да работи.
4. Сега имаме работеща начална функционалност с тестове.
5. Добавяме още use кейсове към спека, вероятно още не се поддържат от имплементацията. Тестовете започват да се чупят.
6. Върнете се на стъпка 3, актуализиайте имплементацията докато тестовете не дават вече грешки. 
7. Повторете стъпки 3-6 докато функционалността е готова.

Този вид разработване на софтуер, се нарича *итеративен*. Ние пишем спека, имплементираме го, уверяваме се че тестовете минават и пишем още тестове, уверяваме се че те също работят и т.н. Накрая имаме работеща имплементация и тестове към нея. 

Нека видим процеса на разработка в нашия практически пример.

Първата стъпка вече е готова: имаме начален спек за `pow`. Сега, нека използване няколко JavaScript библиотеки за да пуснем тестовете, за да видим дали работят (те всички ще са неуспешни).

## Спекът в действие

ТВ този туториал ние ще използваме следните  JavaScript библиотеки за тестовете:

- [Mocha](http://mochajs.org/) -- основният фреймуърк: тя осигурява основните тестови функции включително `describe` и `it` и основната функция, която стартира тестовете.
- [Chai](http://chaijs.com) -- библиотеката с мното assertions (допускания). Тя позволява да използваме множество различни допускания, за сега ние имаме нужда само от `assert.equal`.
- [Sinon](http://sinonjs.org/) -- библиотека, която проследява функции, емулира вградени функции и още. Ще имаме нужда от нея по-късно.

Тези библиотеки са подходящи както за тестване в браузъра, така и за тестване на сървъра. Тук ще тестваме в браузъра. 

Цялата HTML страница с тези frameworks (рамки) и спека за `pow`:

```html src="index.html"
```

Страницата може да се раздели на пет части:

1. `<head>` -- добавя библиотеки от трети страни и стилове за тестовете.
2. `<script>` съдържа кода на функцията, която ще тестваме, в нашия случай -- `pow`.
3. Тестовете -- в нашия случай външен скрипт `test.js` който има `describe("pow", ...)`.
4. HTML елемент `<div id="mocha">` ще бъде използван от Mocha за да покаже резултатите от тестовете.
5. Тестовете стартират от командата`mocha.run()`.

Резултатът:

[iframe height=250 src="pow-1" border=1 edit]

За сега тестът е неуспешен зашото има грешка. Това е логично: имаме функция без код в `pow`, така че `pow(2,3)` връща `undefined` вместо `8`.

За в бъдеще нека отбележим, че има много по-добри фреймуърци за тестване, като [karma](https://karma-runner.github.io/) и други, с които е по-лесно да се пуснат автоматично множество различни тестове.

## Първоначална имплементация

Нека направим проста имплементация на `pow`, за да минат тестовете:

```js
function pow(x, n) {
  return 8; // :) ние измамихме!
}
```

Уау, сега работи!

[iframe height=250 src="pow-min" border=1 edit]

## Подобрение на спека

Това, което направихме наистина е измама. Функцията не работи: при опит да изчислим `pow(3,4)` ще получим грешен резултат, но теста ще мине.

...Но тази ситуация е доста типична, случва се в практиката. Тестовете са успешни, но функцията не работи правилно. Нашата спецификация не е завършена. Ще трябва да добавим още use кейсове към нея.

Нека добавим още един тест който проверява, че `pow(3, 4) = 81`.

Може да изберем един от двата начина да организираме тестовете тук:

1. Първи вариант -- добавяме още един `assert` в същия `it`:

    ```js
    describe("pow", function() {

      it("повдига до n-та степен", function() {
        assert.equal(pow(2, 3), 8);
    *!*
        assert.equal(pow(3, 4), 81);
    */!*
      });

    });
    ```
2. Вторият -- да напишем два теста:

    ```js
    describe("pow", function() {

      it("2 повдигнато на степен 3 е 8", function() {
        assert.equal(pow(2, 3), 8);
      });

      it("3 повдигнато на степен 4 е 81", function() {
        assert.equal(pow(3, 4), 81);
      });

    });
    ```

Основната разлика е че когато `assert` предизвика грешка, изпълнението на `it`  блока спира веднага. Така че при първия вариант ако първият `assert` не мине, никога няма да видим резултата от втория `assert`.

Писането на отделни тестове е полезно за да получим повече информация за това какво се случва, така че вторият вариант е по-добър.

Освен това има още едно правило, което е добре да следваме.

**Един тест проверява едно нещо.**

Ако погледнем един тест и видим две независими проверки в него, по-добре е да го разделим на два по-прости теста.

Нека продължим с втория вариант.

Резултатът:

[iframe height=250 src="pow-2" edit border="1"]

Както можеше да се очаква, вторият тест е неуспешен. Естествено, нашата функция винаги връща `8`, докато `assert` очаква `81`.

## Подобряване на имплементацията

Нека напишем някаъв по-реалистичен код, за да минат тестовете:

```js
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
```

За да сме сигурни, че функцията работи добре, нека я тестваме с повече стойности. Вместо да пишем `it` блокове ръчно, можем да ги генерираме във `for`:

```js
describe("pow", function() {

  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} на степен 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

});
```

Резултатът:

[iframe height=250 src="pow-3" edit border="1"]

## Вложен describe

Ние ще добавим още тестове. Но преди това нека отбележим, че помощната функция `makeTest` и `for` трябва да се групират заедно. Нямаме нужда от `makeTest` в другите тестове, тя ни трябва само във `for`: тяхната обща задача е да проверят как `pow` повдига число на дадена степен.

Групирането се прави с вложен `describe`:

```js
describe("pow", function() {

*!*
  describe("повдига x на степен 3", function() {
*/!*

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} на степен 3 е ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

*!*
  });
*/!*

  // ... тук ще бъдат добваени още тестове, може да се използват describe и it
});
```

Вложеният `describe` дефинира нова "подгрупа" от тестове. В резултатите може да видим че тя е отместена навътре:

[iframe height=250 src="pow-4" edit border="1"]

В бъдеще можем да добавим още `it` и `describe` на горното ниво със собствени помощни функции. Те няма да виждат `makeTest`.

````smart header="`before/after` и `beforeEach/afterEach`"
Може да използваме `before/after` функции, които се изпълняват преди/след пускането на тестовете, и също `beforeEach/afterEach` фукции, които се изпълняват преди/след *всеки* `it`.

Например:

```js no-beautify
describe("test", function() {

  before(() => alert("Начало на тестването – преди всички тестове"));
  after(() => alert("Край на тестването – след всички тестове"));

  beforeEach(() => alert("Преди теста – влизаме в тест"));
  afterEach(() => alert("След теста – излизаме от тест"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});
```

Последователността на изпълнение ще бъде:

```
Начало на тестването – преди всички тестове (before)
Преди теста – влизаме в теста (beforeEach)
1
След теста – излизаме от тест   (afterEach)
Преди теста – влизаме в тест (beforeEach)
2
След теста – излизаме от тест   (afterEach)
TКрай на тестването – след всички тестове (after)
```

[edit src="beforeafter" title="Open the example in the sandbox."]

Обикновено, `beforeEach/afterEach` и `before/after` се използват да се направи инициализация, да се занулят броячи или да се направи нещо друго между тестовете (или тестовите групи).
````

## Разширяване на спецификацията

Основната функционалност на `pow` е завършена. Първата итерация от разработването в готова. Като приключим с празненствата и пиенето на шампанско -- нека да я подобрим.

Както казахме, функцията `pow(x, n)` е предназначена да работи с цели положителни числа `n`.

За да посочи математическа грешка, функциите в JavaScript обикновено връщат `NaN`. Нека направим същото за невалидни стойности на `n`.

Нека първо добавим това поведение в спека(!):

```js
describe("pow", function() {

  // ...

  it("при отрицателен n резултатът е NaN", function() {
*!*
    assert.isNaN(pow(2, -1));
*/!*
  });

  it("при дробно число n резултатът е NaN", function() {
*!*
    assert.isNaN(pow(2, 1.5));    
*/!*
  });

});
```

Резултатът с новите тестове:

[iframe height=530 src="pow-nan" edit border="1"]

The newly added tests fail, because our implementation does not support them. That's how BDD is done: first we write failing tests, and then make an implementation for them.

```smart header="Other assertions"
Please note the assertion `assert.isNaN`: it checks for `NaN`.

There are other assertions in [Chai](http://chaijs.com) as well, for instance:

- `assert.equal(value1, value2)` -- checks the equality  `value1 == value2`.
- `assert.strictEqual(value1, value2)` -- checks the strict equality `value1 === value2`.
- `assert.notEqual`, `assert.notStrictEqual` -- inverse checks to the ones above.
- `assert.isTrue(value)` -- checks that `value === true`
- `assert.isFalse(value)` -- checks that `value === false`
- ...the full list is in the [docs](http://chaijs.com/api/assert/)
```

So we should add a couple of lines to `pow`:

```js
function pow(x, n) {
*!*
  if (n < 0) return NaN;
  if (Math.round(n) != n) return NaN;
*/!*

  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
```

Now it works, all tests pass:

[iframe height=300 src="pow-full" edit border="1"]

[edit src="pow-full" title="Open the full final example in the sandbox."]

## Summary

In BDD, the spec goes first, followed by implementation. At the end we have both the spec and the code.

The spec can be used in three ways:

1. As **Tests** - they guarantee that the code works correctly.
2. As **Docs** -- the titles of `describe` and `it` tell what the function does.
3. As **Examples** -- the tests are actually working examples showing how a function can be used.

With the spec, we can safely improve, change, even rewrite the function from scratch and make sure it still works right.

That's especially important in large projects when a function is used in many places. When we change such a function, there's just no way to manually check if every place that uses it still works right.

Without tests, people have two ways:

1. To perform the change, no matter what. And then our users meet bugs, as we probably fail to check something manually.
2. Or, if the punishment for errors is harsh, as there are no tests, people become afraid to modify such functions, and then the code becomes outdated, no one wants to get into it. Not good for development.

**Automatic testing helps to avoid these problems!**

If the project is covered with tests, there's just no such problem. After any changes, we can run tests and see a lot of checks made in a matter of seconds.

**Besides, a well-tested code has better architecture.**

Naturally, that's because auto-tested code is easier to modify and improve. But there's also another reason.

To write tests, the code should be organized in such a way that every function has a clearly described task, well-defined input and output. That means a good architecture from the beginning.

In real life that's sometimes not that easy. Sometimes it's difficult to write a spec before the actual code, because it's not yet clear how it should behave. But in general writing tests makes development faster and more stable.

Later in the tutorial you will meet many tasks with tests baked-in. So you'll see more practical examples.

Writing tests requires good JavaScript knowledge. But we're just starting to learn it. So, to settle down everything, as of now you're not required to write tests, but you should already be able to read them even if they are a little bit more complex than in this chapter.
