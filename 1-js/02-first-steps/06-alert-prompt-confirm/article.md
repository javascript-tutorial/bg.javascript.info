# Взаимодействие: предупреждение, напомняне, потвърждаване

<<<<<<< HEAD:1-js/02-first-steps/09-alert-prompt-confirm/article.md
В тази част на ръководството ще обхващаме езика JavaScript "такъв, какъвто е", без специфични настройки специфични за среда.

Но все пак ще използваме браузъра като нашата демо среда, така че трябва да знаем поне няколко от функциите му за потребителски интерфейс. В тази глава ще се запознаем с функциите на браузъра за `alert` (предупреждение), `prompt` (напомняне) и `confirm` (потвърждаване).

## alert

Синтаксис:

```js
alert(message);
```

Това показва съобщение и спира изпълнението на скрипта, като потребителят натисне "OK".
=======
As we'll be using the browser as our demo environment, let's see a couple of functions to interact with the user: `alert`, `prompt` and `confirm`.

## alert

This one we've seen already. It shows a message and waits for the user to presses "OK".
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31:1-js/02-first-steps/06-alert-prompt-confirm/article.md

Например:

```js run
alert("Hello");
```

<<<<<<< HEAD:1-js/02-first-steps/09-alert-prompt-confirm/article.md
Мини прозорецът със съобщението се нарича a "модален прозорец". Думата "модален" означава, че посетителят не може да взаимодейства с останалата част от страницата, да натисне други бутони и т.н. докато не се справят с прозореца. В такъв случай -- докато натиснат "OK".
=======
The mini-window with the message is called a *modal window*. The word "modal" means that the visitor can't interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case -- until they press "OK".
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31:1-js/02-first-steps/06-alert-prompt-confirm/article.md

## prompt

Функцията `prompt` приема два аргумента:

```js no-beautify
result = prompt(title, [default]);
```

То показва модален прозорец с текстово съобщение, поле за въвеждане за посетителя и бутони ОК / Отказ.

`title`
: Текстът за показване на посетителя.

`default`
: По желание втори параметър, началната стойност за полето за въвеждане.

<<<<<<< HEAD:1-js/02-first-steps/09-alert-prompt-confirm/article.md
Посетителят може да напише нещо в полето за бързо въвеждане и да натисне ОК. Или могат да отменят въвеждането чрез натискане на Отказ или натискане на клавиша `key:Esc`.
=======
```smart header="The square brackets in syntax `[...]`"
The square brackets around `default` in the syntax above denote that the parameter as optional, not required.
```

The visitor can type something in the prompt input field and press OK. Then we get that text in the `result`. Or they can cancel the input by pressing Cancel or hitting the `key:Esc` key, then we get `null` as the `result`.
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31:1-js/02-first-steps/06-alert-prompt-confirm/article.md

Извикването на `prompt` връща текста от полето за въвеждане или `null`, ако въвеждането е било отменено.

Например:

```js run
let age = prompt('На колко години сте?', 100);

alert(`Ти си  на ${age} години!`); // Ти си на 100 години!
```

````warn header="In IE: always supply a `default`"
Вторият параметър е незадължителен, но ако не го предоставим, Internet Explorer ще вмъкне текста `"undefined"` в подканата.

Пуснете този код в Internet Explorer, за да видите:

```js run
let test = prompt("Тест");
```

Така че, за да изглеждат по-добре подканите в IE, препоръчваме винаги да предоставите втория аргумент:

```js run
let test = prompt("Тест", ''); // <-- за IE
```

## потвърдете

Синтаксиса:

```js
result = confirm(question);
```

Функцията `confirm` показва модален прозорец с `въпрос` и две бутони: OK и Cancel.

Резултатът е `true` ако се натисне OK и `false` при Cansel.

Например:

```js run
let isBoss = confirm("Ти ли си шефа?");

alert( isBoss ); // true ако ОК се натисне
```

## Обобщение

Разкрихме 3 специфични за браузъра функции за взаимодействие с посетителите:

`alert`
: показва съобщение.

`prompt`
: показва съобщение като пита потребителя за някакъв текст. То връща текста, а при натискане на Cansel или клавиша `key:Esc` - `null`.

`confirm`
: показва съобщение и чака потребителя да натисне ОК или Cansel. Връща `true` за ОК и `false` за Cancel/`key:Esc`.

Всички тези методи са модални: те поставят на пауза изпълнение на скриптове и не позволяват на посетителя да взаимодейства с останалата част от страницата, докато прозорецът не бъде отхвърлен.

Има две ограничения, споделени от всички методи по-горе:

1. Точното местоположение на модалния прозорец се определя от браузъра. Обикновено е в центъра.
2. Точният вид на прозореца също зависи от браузъра. Не можем да го модифицираме.

Това е цената за простотата. Има и други начини за показване на по-хубави прозорци и по-богато взаимодействие с посетителя, но ако са  "звънци и свирки" нямат голямо значение, тези методи работят просто добре.
