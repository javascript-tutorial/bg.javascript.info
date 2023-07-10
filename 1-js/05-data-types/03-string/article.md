# Низове / Стрингове

В JavaScript текстовите данни се съхраняват като низове. Няма отделен тип за един знак.

Вътрешният формат за низове винаги e [UTF-16](https://en.wikipedia.org/wiki/UTF-16),и не е обвързан с кодирането на страницата.

## Кавички

Нека си припомним видовете кавички.

Низовете могат да бъдат затворени в единични или двойни кавички, или обратни отметки:

```js
let single = 'single-quoted';
let double = "double-quoted";

let backticks = `backticks`;
```

Единични или двойни кавички по същество са еднакви. Обратните отметки, обаче, ни позволяват да вградим всеки израз в низа, като го увием в `${…}`:

```js run
function sum(a, b) {
  return a + b;
}

alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.
```

Друго предимство от използването на обратни отметки е, че те позволяват на низ да обхваща множество редове:

```js run
let guestList = `Guests:
 * John
 * Pete
 * Mary
`;

alert(guestList); // списък с гости, множество редове
```

Изглежда естествено, нали? Но единичните или двойните кавички не работят по този начин.

Ако ги използваме и се опитаме да сложим няколко реда, ще има грешка:

```js run
let guestList = "Guests: // Error: Unexpected token ILLEGAL
  * John";
```

<<<<<<< HEAD
Единичните и двойните кавички идват от древни времена на езиковото създаване, когато не се взема предвид необходимостта от многоредови низове. Обратните отметки се появиха много по-късно и по този начин са по-гъвкави.

Обратните отметки също ни позволяват да посочим "функция на шаблона" преди първата обратна отметка. Синтаксиса е: <code>func&#96;string&#96;</code>. Функцията `func` се извиква автоматично, получава низа и вградените изрази и може да ги обработва. Това се нарича "етикетирани шаблони". Тази функция улеснява внедряването на персонализирани шаблони, но рядко се използва на практика. Можете да прочетете повече за това в [наръчника](mdn:/JavaScript/Reference/Template_literals#Tagged_templates).
=======
Single and double quotes come from ancient times of language creation, when the need for multiline strings was not taken into account. Backticks appeared much later and thus are more versatile.

Backticks also allow us to specify a "template function" before the first backtick. The syntax is: <code>func&#96;string&#96;</code>. The function `func` is called automatically, receives the string and embedded expressions and can process them. This feature is called "tagged templates", it's rarely seen, but you can read about it in the MDN: [Template literals](mdn:/JavaScript/Reference/Template_literals#Tagged_templates).
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

## Специални символи

Все още е възможно да се създадат многоредови низове с единични и двойни кавички, като се използва т.нар "символ за нов ред", написан като `\n`, което обозначава прекъсване на линия:

```js run
let guestList = "Guests:\n * John\n * Pete\n * Mary";

<<<<<<< HEAD
alert(guestList); // многоредов списък с гости
```

Например, тези две линии са еднакви, но за написани различно:
=======
alert(guestList); // a multiline list of guests, same as above
```

As a simpler example, these two lines are equal, just written differently:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

```js run
let str1 = "Hello\nWorld"; // два реда, със "символа за нов ред"

// два реда, използвайки нормален нов ред и обратни отметки
let str2 = `Hello
World`;

alert(str1 == str2); // true
```

<<<<<<< HEAD
Има и други, по-малко срещани "специални" символи.

Ето пълния списък:
=======
There are other, less common special characters:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

| Символ | Описание |
|-----------|-------------|
<<<<<<< HEAD
|`\n`|Нов ред|
|`\r`|"Carriage return" или Връщане на каретката не е използвано само. Във Windows, текстовите файлове използват комбинация от два символа `\r\n`, за да представляват прекъсване на ред. |
|`\'`, `\"`|Кавички|
|`\\`|Наклонена черта|
|`\t`|Табулация|
|`\b`, `\f`, `\v`| Backspace, Form Feed (Връщане в началото на реда), Вертикална табулация -- запазени за съвместимост, не се използват в наши дни. |
|`\xXX`|Unicode символ с дадения шестнадесетичен Unicode `XX`, напр. `'\x7A'` е същото като `'z'`.|
|`\uXXXX`|Unicode символ с шестнадесетичния код `XXXX` в UTF-16 кодиране, например `\u00A9` -- е Unicode за символа за авторски права `©`. Трябва да е точно 4 шестнадесетични символи. |
|`\u{X…XXXXXX}` (1 до 6 шестнадесетични символи)|Unicode символ с дадения UTF-32 кодировка. Някои редки знаци са кодирани с два Unicode символа, като отнемат 4 байта. По този начин можем да вмъкнем дълги кодове. |
=======
|`\n`|New line|
|`\r`|In Windows text files a combination of two characters `\r\n` represents a new break, while on non-Windows OS it's just `\n`. That's for historical reasons, most Windows software also understands `\n`. |
|`\'`,&nbsp;`\"`,&nbsp;<code>\\`</code>|Quotes|
|`\\`|Backslash|
|`\t`|Tab|
<<<<<<< HEAD
|`\b`, `\f`, `\v`| Backspace, Form Feed, Vertical Tab -- kept for compatibility, not used nowadays. |
|`\xXX`|Unicode character with the given hexadecimal Unicode `XX`, e.g. `'\x7A'` is the same as `'z'`.|
|`\uXXXX`|A Unicode symbol with the hex code `XXXX` in UTF-16 encoding, for instance `\u00A9` -- is a Unicode for the copyright symbol `©`. It must be exactly 4 hex digits. |
|`\u{X…XXXXXX}` (1 to 6 hex characters)|A Unicode symbol with the given UTF-32 encoding. Some rare characters are encoded with two Unicode symbols, taking 4 bytes. This way we can insert long codes. |
>>>>>>> c5358c59494b53efb832c81a5338e0a23b22c269

Примери с Unicode:

```js run
alert( "\u00A9" ); // ©
alert( "\u{20331}" ); // 佫, рядък китайски йероглиф (дълъг Unicode)
alert( "\u{1F60D}" ); // 😍, усмихнато лице (друг дълъг Unicode)
```

Всички специални знаци започват с обратна наклонена черта `\`. Нарича се още "символ за избягване".

Може да го използваме и ако искаме да вмъкнем кавичка в низа.
=======
|`\b`, `\f`, `\v`| Backspace, Form Feed, Vertical Tab -- mentioned for completeness, coming from old times, not used nowadays (you can forget them right now). |

As you can see, all special characters start with a backslash character `\`. It is also called an "escape character".

Because it's so special, if we need to show an actual backslash `\` within the string, we need to double it:

```js run
alert( `The backslash: \\` ); // The backslash: \
```

So-called "escaped" quotes `\'`, `\"`, <code>\\`</code> are used to insert a quote into the same-quoted string.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Например:

```js run
alert( 'I*!*\'*/!*m the Walrus!' ); // *!*I'm*/!* the Walrus!
```

Както можете да видите, трябва да добавим вътрешната кавичка с обратна наклонена черта `\'`, защото в противен случай би означавало края на низа.

Разбира се, трябва да се избягват само кавичките, които са същите като заграждащите. Така че, като по-елегантно решение, вместо това можем да преминем към двойни кавички или обратни отметки:

```js run
alert( "I'm the Walrus!" ); // I'm the Walrus!
```

<<<<<<< HEAD
Имайте предвид, че обратната наклонена черта `\` служи за правилното четене на низа от JavaScript, след това изчезва. Низът в паметта няма `\`. Можете ясно да видите това в `alert` функцията в примерите по-горе.

Но какво, ако трябва да покажем действителна обратна наклонена черта `\` в дадения низ?

Това е възможно, но трябва да го удвоим така `\\`:

```js run
alert( `Наклонена черта: \\` ); // Наклонена черта: \
```
=======
Besides these special characters, there's also a special notation for Unicode codes `\u…`, it's rarely used and is covered in the optional chapter about [Unicode](info:unicode).
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

## Свойството Length

Свойството `length` съхранява дължината на низа:

```js run
alert( `My\n`.length ); // 3
```

Забележите, че `\n` е един "специален" знак, така че дължината наистина е `3`.

```warn header="`length` е свойство"
Хората с опит на някои други езици понякога грешат, като извикват `str.length()` вместо `str.length`. Това не работи.

<<<<<<< HEAD
Моля, имайте предвид, че `str.length` е числово свойство, а не функция. Не е необходимо да добавяте скоби след него.
=======
Please note that `str.length` is a numeric property, not a function. There is no need to add parenthesis after it. Not `.length()`, but `.length`.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
```

## Достъп до символите

<<<<<<< HEAD
За да получите символа на позиция `pos`, използвайте квадратни скоби `[pos]` или извикайте метода [str.charAt(pos)](mdn:js/String/charAt). Първият знак започва от нулевата позиция:
=======
To get a character at position `pos`, use square brackets `[pos]` or call the method [str.at(pos)](mdn:js/String/at). The first character starts from the zero position:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

```js run
let str = `Hello`;

// първият знак
alert( str[0] ); // H
alert( str.at(0) ); // H

// последният знак
alert( str[str.length - 1] ); // o
alert( str.at(-1) );
```

<<<<<<< HEAD
Квадратните скоби са модерен начин, за да получите символа, докато `charAt` съществува най-вече по исторически причини.

Единствената разлика между тях е, че ако не бъде намерен символ, `[]` връща `undefined`, а `charAt` връща празен низ:
=======
As you can see, the `.at(pos)` method has a benefit of allowing negative position. If `pos` is negative, then it's counted from the end of the string.

So `.at(-1)` means the last character, and `.at(-2)` is the one before it, etc.

The square brackets always return `undefined` for negative indexes, for instance:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

```js run
let str = `Hello`;

<<<<<<< HEAD
alert( str[1000] ); // undefined
alert( str.charAt(1000) ); // '' (празен низ)
=======
alert( str[-2] ); // undefined
alert( str.at(-2) ); // l
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
```

Можем също да итерираме символите, използвайки `for..of`:

```js run
for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char става "H", после "e", после "l" и т.н.)
}
```

## Низовете са неизменни

Низовете не могат да се променят в JavaScript. Невъзможно е да се промени символ.

Нека опитаме, за да покажем, че не работи:

```js run
let str = 'Hi';

str[0] = 'h'; // грешка
alert( str[0] ); // не работи
```

Обичайното решение е да се създаде изцяло нов низ и да се присвои на `str` вместо стария.

Например:

```js run
let str = 'Hi';

str = 'h' + str[1]; // заменя низа

alert( str ); // hi
```

В следващите раздели ще видим още примери за това.

## Промяна на малка и голяма буква

Методите [toLowerCase()](mdn:js/String/toLowerCase) и [toUpperCase()](mdn:js/String/toUpperCase) променят низа в малки или големи букви:

```js run
alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'InTeRfAcE'.toUpperCase() ); // INTERFACE
alert( 'INTERFACE'.toLowerCase() ); // interface
alert( 'InTeRfAcE'.toLowerCase() ); // interface
```

Или, ако искаме един знак с малки букви:

```js run
alert( 'Interface'[0].toLowerCase() ); // 'i'
```

## Търсене за подниз

Има няколко начина за търсене на подниз в низ.

### str.indexOf

Първия метод е [str.indexOf(substr, pos)](mdn:js/String/indexOf).

Той търси `substr` в `str`, като започва от дадената позиция `pos`, и връща позицията, където е намерено съвпадението или `-1` ако нищо не може да се намери.

Например:

```js run
let str = 'Widget with id';

alert( str.indexOf('Widget') ); // 0, зашото 'Widget' се намира в началото т.е. започва от позиция 0
alert( str.indexOf('widget') ); // -1, не е намерен, търсенето е чувствително към малки и големи букви

alert( str.indexOf("id") ); // 1, "id" се намира на позицията 1 (..idget with id)
```

Незадължителният втори параметър ни позволява да започнем търсенето от дадена позиция.

Например, първата поява на `"id"` е в позиция `1`. За да търсите следващата поява, нека започнем търсенето от позиция `2`:

```js run
let str = 'Widget with id';

alert( str.indexOf('id', 2) ) // 12
```

Ако се интересуваме от всички случаи, може да изпълним `indexOf` в цикъл. Всяко нов цикул се извършва с позицията след предишното съвпадение:

```js run
let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // Него да го потърсим

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // продължете търсенето от следващата позиция
}
```

Същият алгоритъм може да бъде положен по-кратко:

```js run
let str = "As sly as a fox, as strong as an ox";
let target = "as";

*!*
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}
*/!*
```

```smart header="`str.lastIndexOf(substr, position)`"
Съществува и подобен метод [str.lastIndexOf(substr, position)](mdn:js/String/lastIndexOf) който търси от края на низа до началото му.

То ще изброи появите в обратен ред.
```

Има леко неудобство с `indexOf` в `if` конструкцията. Не можем да го поставим в `if`-а така:

```js run
let str = "Widget with id";

if (str.indexOf("Widget")) {
    alert("We found it"); // не работи!
}
```

Методът `alert` в горния пример не се показва, защото `str.indexOf("Widget")` връща `0` (което означава, че е намерил съвпадение на началната позиция). Правилно, но `if` счита `0` като `false`.

Така че, всъщност трябва да проверим за `-1`, ето така:

```js run
let str = "Widget with id";

*!*
if (str.indexOf("Widget") != -1) {
*/!*
    alert("We found it"); // работи!
}
```

<<<<<<< HEAD
#### Побитовия NOT трик

Един от старите трикове, използвани тук, е [Побитовия NOT](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT) `~` оператор. Той преобразува числото в 32-битово цяло число (премахва десетичната част, ако съществува) и след това обръща всички битове в неговото двоично представяне.

Напрактика, това означава нещо просто: за 32-битови цели числа `~n` е равно на `-(n+1)`.

Например:

```js run
alert( ~2 ); // -3, еднакво с -(2+1)
alert( ~1 ); // -2, еднакво с -(1+1)
alert( ~0 ); // -1, еднакво с -(0+1)
*!*
alert( ~-1 ); // 0, еднакво с -(-1+1)
*/!*
```

Както виждаме, `~n` е само нула ако `n == -1` (това е за всяко 32-битово подписано цяло число `n`).

Така че, ако проверим `if ( ~str.indexOf("...") )` е вярно само ако резултатът от `indexOf` не е `-1`. С други думи, когато има съвпадение.

Хората го използват за съкращаване на `indexOf` проверките:

```js run
let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // работи
}
```

Обикновено не се препоръчва използването на езикови функции по неочевиден начин, но този конкретен трик се използва широко в стария код, така че трябва да го разберем.

Просто запомнете: прочетете `if (~str.indexOf(...))` като "if found".

За да бъдем точни обаче, тъй като големите числа се съкращават до 32 бита от `~` оператора, съществуват и други числа, които дават `0`, най-малката е `~4294967295=0`. Това прави тази проверка правилна само ако низът не е толкова дълъг.

В момента можем да видим този трик само в стария код, како съвременният JavaScript предоставя `.includes` метода (виж надолу).

### Методите includes, startsWith, endsWith
=======
### includes, startsWith, endsWith
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

По-модерните методи [str.includes(substr, pos)](mdn:js/String/includes) връщат `true/false` в зависимост от това дали низът `str` съдържа подниза `substr` в себе си.

Това е правилният избор, ако трябва да тестваме за съвпадение, когато не се нуждаем от неговата позиция:

```js run
alert( "Widget with id".includes("Widget") ); // true

alert( "Hello".includes("Bye") ); // false
```

Незадължителният втори аргумент на `str.includes` е позицията, от която да започнете да търси:

```js run
alert( "Widget".includes("id") ); // true
alert( "Widget".includes("id", 3) ); // false, в позиция 3 няма "id"
```

Методите [str.startsWith](mdn:js/String/startsWith) и [str.endsWith](mdn:js/String/endsWith) правят точно това, на което са наименувани:

```js run
<<<<<<< HEAD
alert( "Widget".startsWith("Wid") ); // true, "Widget" започва с "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" завършва "get"
=======
alert( "*!*Wid*/!*get".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Wid*!*get*/!*".endsWith("get") ); // true, "Widget" ends with "get"
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
```

## Получаване на подниз

В JavaScript има 3 метода за получаване на подниз: `substring`, `substr` и `slice`.

`str.slice(start [, end])`
: Връща частта от низа от `start` позиция до (но не включително / без) `end` позиция.

    Например:

    ```js run
    let str = "stringify";
    alert( str.slice(0, 5) ); // 'strin', поднизът от позиция 0 до 5 (без да включва позиция 5)
    alert( str.slice(0, 1) ); // 's', от позиция 0 до 1, без да включва позиция 1, така че има само един символ при позиция 0
    ```

    Ако няма втори аргумент, тогава `slice` отива до края на низа:

    ```js run
    let str = "st*!*ringify*/!*";
    alert( str.slice(2) ); // 'ringify', от 2ра позиция до края
    ```

    Отрицателни стойности за `start/end` позиции също са възможни. Те означават, че позицията се отчита от края на низа:

    ```js run
    let str = "strin*!*gif*/!*y";

    // стартира от 4та позиция надясно, свършва на 1ра позиция надясно
    alert( str.slice(-4, -1) ); // 'gif'
    ```

`str.substring(start [, end])`
<<<<<<< HEAD
: Връща частта от низа *между* `start` и `end` позиция.

    Това е почти същото като метода `slice`, но то позволява позицията `start` да бъде по-голямо от `end` позицията.
=======
: Returns the part of the string *between* `start` and `end` (not including `end`).

    This is almost the same as `slice`, but it allows `start` to be greater than `end` (in this case it simply swaps `start` and `end` values).
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

    Например:

    ```js run
    let str = "st*!*ring*/!*ify";

    // these are same for substring
    alert( str.substring(2, 6) ); // "ring"
    alert( str.substring(6, 2) ); // "ring"

    // ...но не и за slice:
    alert( str.slice(2, 6) ); // "ring" (същото)
    alert( str.slice(6, 2) ); // "" (празен низ)

    ```

    Отрицателните аргументи не се (за разлика от `slice`) поддържат, те се третират като `0`.

`str.substr(start [, length])`
: Връща частта от низа от `start` позиция, с дадената дължина `length`.

    За разлика от предишните методи, този ни позволява да посочим `дължина` вместо крайната позиция:

    ```js run
    let str = "st*!*ring*/!*ify";
    alert( str.substr(2, 4) ); // 'ring', от позиция 2 връща 4 символа
    ```

    Първият аргумент може да е отрицателен, за да може да се брои от края:

    ```js run
    let str = "strin*!*gi*/!*fy";
    alert( str.substr(-4, 2) ); // 'gi', от позиция 4 връща 2 символа
    ```

<<<<<<< HEAD
Нека обобщим тези методи, за да избегнем объркване:
=======
    This method resides in the [Annex B](https://tc39.es/ecma262/#sec-string.prototype.substr) of the language specification. It means that only browser-hosted Javascript engines should support it, and it's not recommended to use it. In practice, it's supported everywhere.

Let's recap these methods to avoid any confusion:
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

| метод | селектира... | отрицателни числа |
|--------|-----------|-----------|
<<<<<<< HEAD
| `slice(start, end)` | от `start` до `end` позиция (не включва `end`) | позволява отрицателни числа |
| `substring(start, end)` | между `start` и `end` позиция | отрицателни числа означават `0` |
| `substr(start, length)` | от `start` връща `length` символа | позволява отрицателни числа на `start` позиция |
=======
| `slice(start, end)` | from `start` to `end` (not including `end`) | allows negatives |
| `substring(start, end)` | between `start` and `end` (not including `end`)| negative values mean `0` |
| `substr(start, length)` | from `start` get `length` characters | allows negative `start` |
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

```smart header="Кое да изберете?"
Всички те могат да ви свършат работата. Формално, `substr` има незначителен недостатък: то не е описано в основната спецификация на JavaScript, но в Annex B (Приложение Б), който обхваща само браузърни функции, които съществуват главно по исторически причини. Така, не-браузърни среди може и да не успеят да го поддържат. Но на практика работи навсякъде.

<<<<<<< HEAD
От другите два варианта, `slice` е малко по-гъвкав, позволява отрицателни аргументи и е по-кратко за писане. Така че, достатъчно е да запомните само `slice` от тези три метода.
=======
Of the other two variants, `slice` is a little bit more flexible, it allows negative arguments and shorter to write.

So, for practical use it's enough to remember only `slice`.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
```

## Сравняване на низове

Както знаем от главата <info:comparison>, низовете се сравняват символи-по-символи по азбучен ред.

Въпреки това, има някои странности.

1. Малката буква винаги е по-голяма от голямата:

    ```js run
    alert( 'a' > 'Z' ); // true
    ```

2. Буквите с диакритични знаци са „повредени“:

    ```js run
    alert( 'Österreich' > 'Zealand' ); // true
    ```

    Това може да доведе до странни резултати, ако сортираме имена на държави. Обикновено хората биха очаквали `Zealand` да дойде след `Österreich` в листа.

<<<<<<< HEAD
За да разберем какво се случва, нека прегледаме вътрешното представяне на низове в JavaScript.

Всички низове са кодирани с помощта на [UTF-16](https://en.wikipedia.org/wiki/UTF-16). Толкова: всеки знак има съответния цифров код. Има специални методи, които позволяват да се получи символът за дадения код и обратно.

`str.codePointAt(pos)`
: Връща кода на знака в позицията `pos`:

    ```js run
    // различните букви имат различни кодове
    alert( "z".codePointAt(0) ); // 122
=======
To understand what happens, we should be aware that strings in Javascript are encoded using [UTF-16](https://en.wikipedia.org/wiki/UTF-16). That is: each character has a corresponding numeric code.

There are special methods that allow to get the character for the code and back:

`str.codePointAt(pos)`
: Returns a decimal number representing the code for the character at position `pos`:

    ```js run
    // different case letters have different codes
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
    alert( "Z".codePointAt(0) ); // 90
    alert( "z".codePointAt(0) ); // 122
    alert( "z".codePointAt(0).toString(16) ); // 7a (if we need a hexadecimal value)
    ```

`String.fromCodePoint(code)`
: Създава знак по неговия цифров вариант `code`

    ```js run
    alert( String.fromCodePoint(90) ); // Z
<<<<<<< HEAD
    ```

    Можем също да добавяме Unicode символи според техните кодове, използвайки `\u` последвано от шестнадесетичен код:

    ```js run
    // 90 е 5a в шестнадесетична система
    alert( '\u005a' ); // Z
=======
    alert( String.fromCodePoint(0x5a) ); // Z (we can also use a hex value as an argument)
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
    ```

Сега нека видим знаците между `65..220` (латинската азбука и други допълнителни такива) като направите низ от тях:

```js run
let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
alert( str );
// Output:
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
```

Виждате ли? Първо идват главните символи, след това няколко специални, тогава малки букви, и `Ö` близо до края на изхода.

Сега става очевидно защо `a > Z`.

Символите се сравняват по техния цифров код. По-големият код означава, че знакът е по-голям. Кодът за `a` (97) е по-голям от кода за `Z` (90).

<<<<<<< HEAD
- Всички малки букви идват след главните букви, защото техните цифрови кодове са по-големи.
- Някои букви като `Ö` се отделят от основната азбука. Тук това е код, по-голям от всичко от `a` до `z`.
=======
- All lowercase letters go after uppercase letters because their codes are greater.
- Some letters like `Ö` stand apart from the main alphabet. Here, its code is greater than anything from `a` to `z`.
>>>>>>> 8558fa8f5cfb16ef62aa537d323e34d9bef6b4de

<<<<<<< HEAD
### Правилни сравнения
=======
### Correct comparisons [#correct-comparisons]
>>>>>>> 6ab384f2512902d74e4b0ff5a6be60e48ab52e96

"Правилния" алгоритъм да правите сравнения на низове е по-сложно, отколкото може да изглежда, защото азбуките са различни за различните езици.

Така че, браузърът трябва да знае езика за сравнение.

<<<<<<< HEAD
За щастие, всички съвременни браузъри (IE10- изисква допълнителната библиотека [Intl.js](https://github.com/andyearnshaw/Intl.js/)) поддържаща стандарта за интернационализация [ECMA-402](http://www.ecma-international.org/ecma-402/1.0/ECMA-402.pdf).
=======
Luckily, modern browsers support the internationalization standard [ECMA-402](https://www.ecma-international.org/publications-and-standards/standards/ecma-402/).
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Той осигурява специален метод за сравняване на низове на различни езици, следвайки техните правила.

Извикването [str.localeCompare(str2)](mdn:js/String/localeCompare) връща цяло число, указващо дали низът `str` е по-малко, равно или по-голямо от низа `str2` според езиковите правила:

- Връща отрицателно число ако низът `str` е по-малко от низа `str2`.
- Връща положително число ако низът `str` е по-голямо от низа `str2`.
- Връща `0` ако са еквивалентни.

Например:

```js run
alert( 'Österreich'.localeCompare('Zealand') ); // -1
```

Този метод всъщност има два допълнителни аргумента, посочени в [докиментацията си](mdn:js/String/localeCompare), което му позволява да посочи езика (по подразбиране взето от средата, редът на буквите зависи от езика) и да настроите допълнителни правила като чувствителност към малка/голяма буква или трябва ли `"a"` и `"á"` да се считат като еднакви и т.н.

<<<<<<< HEAD
## Вътрешните елементи, Unicode

```warn header="Напреднало знание"
Разделът навлиза по-дълбоко във вътрешните елементи на низовете. Тези знания ще ви бъдат полезни, ако планирате да се справите с емотикони, редки математически или йероглифични знаци или други редки символи.

Можете да пропуснете раздела, ако не планирате да ги използвате.
```

### surrogate pair - Заместващи двойки

Всички често използвани знаци имат 2-байтови кодове. Буквите на повечето европейски езици, числата и дори повечето йероглифи имат 2-байтово представяне.

Но 2та байта ни позволяват само 65536 комбинации и това не е достатъчно за всеки възможен символ. Така че редки символи са кодирани с двойка 2-байтови символи, наречени "surrogate pair".

Дължината на такива символи е `2`:

```js run
alert( '𝒳'.length ); // 2, МАТЕМАТИЧЕСКИ СЦЕНАРЕН КАПИТАЛ X
alert( '😂'.length ); // 2, ЛИЦЕ СЪЛЗА НА РАДОСТ
alert( '𩷶'.length ); // 2, рядък китайски йероглиф
```

Имайте предвид, че заместващите двойки не са съществували по времето, когато е създаден JavaScript, и следователно не са правилно обработени от езика!

Всъщност имаме по един символ във всеки от низовете по-горе, но `length` ни показва, че дължината е `2`.

`String.fromCodePoint` и `str.codePointAt` са от някои редки методи, които се занимават със заместващи двойки. Наскоро се появиха в езика. Преди тях имаше само [String.fromCharCode](mdn:js/String/fromCharCode) и [str.charCodeAt](mdn:js/String/charCodeAt). Тези методи всъщност са същите като `fromCodePoint/codePointAt`, но не работят със заместващи двойки.

Получаването на символ може да бъде сложно, тъй като заместващите двойки се третират като два знака:

```js run
alert( '𝒳'[0] ); // странни символи...
alert( '𝒳'[1] ); // ...парчета от заместваща двойка
```

Имайте предвид, че парчета от заместваща двойка нямат значение един без друг. Така че предупрежденията в горния пример всъщност показват остатъка.

Техническо, заместващите двойка се откриват и по техните кодове: ако знакът има код в интервала от `0xd800..0xdbff`,тогава това е първата част от заместващата двойка. Следващата буква (втората част) трябва да има кода в интервал `0xdc00..0xdfff`. Тези интервали са запазени изключително за заместващите двойки по стандарта.

В горния случай:

```js run
// charCodeAt не е наясно със заместващата двойка, така че дава кодове за частите

alert( '𝒳'.charCodeAt(0).toString(16) ); // d835, между 0xd800 и 0xdbff
alert( '𝒳'.charCodeAt(1).toString(16) ); // dcb3, между 0xdc00 и 0xdfff
```

По-нататък в главата ще намерите повече начини за справяне със заместващи двойки <info:iterable>. Вероятно има и специални библиотеки за това, но няма достатъчно известни, което да ви ги предложим тук.

### Диакритични знаци и нормализиране

В много езици има символи, които са съставени от основния знак и знак над / под него.

Например, буквата `a` може да бъде основният символ за: `àáâäãåā`. Най-често срещаните "съставни" символи имат собствен код в таблицата UTF-16. Но не всички, защото има твърде много възможни комбинации.

За да поддържате произволни композиции, UTF-16 ни позволява да използваме няколко Unicode символа: основният знак последва от един или много "маркирани" символ,и които го "украсяват".

Например, ако имаме `S` последвано от специалния символ "точка отгоре" (код `\u0307`), тосе  показва като Ṡ.

```js run
alert( 'S\u0307' ); // Ṡ
```

Ако се нуждаем от допълнителна маркировка над буквата (или под нея) -- няма проблем, просто добавете необходимия знак за маркировка.

Например, ако добавим символ "точка отдолу" (код `\u0323`), тогава ще имаме "S с точки отгоре и отдолу": `Ṩ`.

Например:

```js run
alert( 'S\u0307\u0323' ); // Ṩ
```

Това осигурява голяма гъвкавост, но и интересен проблем: два знака визуално могат да изглеждат еднакво, но са представени с различни Unicode композиции.

Например:

```js run
let s1 = 'S\u0307\u0323'; // Ṩ, S + точка отгоре + точка отдолу
let s2 = 'S\u0323\u0307'; // Ṩ, S + точка отдолу + точка отгоре

alert( `s1: ${s1}, s2: ${s2}` );

alert( s1 == s2 ); // false въпреки че буквите изглеждат идентични (?!)
```

За да се реши това, съществува "Unicode нормализатор" алгоритъм което привежда всеки низ към единична "нормална" форма.

Имплементира се от [str.normalize()](mdn:js/String/normalize).

```js run
alert( "S\u0307\u0323".normalize() == "S\u0323\u0307".normalize() ); // true
```

Смешно е, че в нашата ситуация `normalize()` всъщност обединява последователност от 3 знака до един: `\u1e68` (S с точки).

```js run
alert( "S\u0307\u0323".normalize().length ); // 1

alert( "S\u0307\u0323".normalize() == "\u1e68" ); // true
```

В действителност това не винаги е така. Причината е, че символът `Ṩ` е "достатъчно обичаен", така създателите на UTF-16 го включиха в основната таблица и му дадоха кода.

Ако искате да научите повече за правилата и вариантите за нормализиране -- те са описани в приложението на стандарта Unicode: [Unicode Normalization Forms](http://www.unicode.org/reports/tr15/), но за повечето практически цели информацията от този раздел е достатъчна.

## Обобщение

- Има 3 вида кавички. Обратните отметки позволяват на низ да обхваща множество редове и вгражда изрази `${…}`.
- Низовете в JavaScript са кодирани с помощта на UTF-16.
- Можем да използваме специални знаци като `\n` и вмъкнете букви от техния Unicode, като използвате `\u...`.
- За да получите символ, използвайте: `[]`.
- За да получите подниз, използвайте: `slice` или `substring`.
- За да направите низ на малки или големи букви, използвайте: `toLowerCase/toUpperCase`.
- За да търсите подниз, използвайте: `indexOf`, или `includes/startsWith/endsWith` за прости проверки.
- За да сравните низовете според езика, използвайте: `localeCompare`, в противен случай те се сравняват по символни кодове.
=======
## Summary

- There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions `${…}`.
- We can use special characters, such as a line break `\n`.
- To get a character, use: `[]` or `at` method.
- To get a substring, use: `slice` or `substring`.
- To lowercase/uppercase a string, use: `toLowerCase/toUpperCase`.
- To look for a substring, use: `indexOf`, or `includes/startsWith/endsWith` for simple checks.
- To compare strings according to the language, use: `localeCompare`, otherwise they are compared by character codes.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Има и други полезни метода в низове:

- `str.trim()` -- премахва ("изчиства") интервали от началото и края на низа.
- `str.repeat(n)` -- повтаря низа `n` пъти.
- ...и други, които можете да ги намерите в [ръководството му](mdn:js/String).

<<<<<<< HEAD
Низовете също имат и методи за търсене / замяна с регулярни изрази. Но това е голяма тема, така че е обяснено в тема <info:regular-expressions>.
=======
Strings also have methods for doing search/replace with regular expressions. But that's big topic, so it's explained in a separate tutorial section <info:regular-expressions>.

Also, as of now it's important to know that strings are based on Unicode encoding, and hence there're issues with comparisons. There's more about Unicode in the chapter <info:unicode>.
<<<<<<< HEAD
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
=======
>>>>>>> 733ff697c6c1101c130e2996f7eca860b2aa7ab9
