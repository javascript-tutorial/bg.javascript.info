# Модерният режим, "use strict"

За дълго време, JavaScript се разви без проблеми със съвместимостта. Нови допълнения бяха добавени към езика докато старите функционалности не се промениха.

Това имаше предимството да не нарушаваме вече съществуващия код. Лошата страна на това, бе че всяка грешка или несъвършено решение направено от създателите на езика JavaScript, беше забивано в езика завинаги.

Това беше така до 2009 г., когато се появи ECMAScript 5 (ES5). То добави нови функции към езика и модифицира някои от съществуващите. За да оставят стария код да работи, повечето такива модификации са изключени по подразбиране. Изрично трябва да ги активирате със специална директива: `"use strict"` в кода си.

## "use strict"

Директивата прилича на обикновено изречение: `"use strict"` или `'use strict'`. Когато то е поставено най-отноре, кодът ни започва да работи по "модерния" начин.

Например:

```js
"use strict";

// Този код работи по модерния начин
...
```

<<<<<<< HEAD
Скоро ще научим функции (начин за групиране на команди). Нека да отбележим, че можем да поставим `"use strict"` в началото на тялото на функцията вместо в самия код. Когато направим така, разрешаваме строгия режим единствено в тази функция. Обикновено, повечето хора го използват за целия кода.
=======
Quite soon we're going to learn functions (a way to group commands), so let's note in advance that `"use strict"` can be put at the beginning of a function. Doing that enables strict mode in that function only. But usually people use it for the whole script.
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31

````warn header="Ensure that \"use strict\" is at the top"
Моля бъдете сигурни, че `"use strict"` е най-отгоре на вашия код. В противен случай строгия режим може да не се активира.

Строгият режим не е активиран тук:

```js no-strict
alert("някакъв код");
// "use strict" below is ignored--it must be at the top

"use strict";

// строгия режим не е активиран
```
Само коментари могат да стоят над директивата `"use strict"`.

````

```warn header="Няма начин да отменяте директивата \"use strict\""
Няма директива като `"no use strict"`, което да обръща нещата обратно по старо му.

След като активираме строгия режим няма връщане назад.
```

## Конзолата на браузъра

<<<<<<< HEAD
За бъдеще, когато използваме конзолата на браузъра, за да изпробваме новости, забележете че то използва строгия резим `use strict` по подразбиране.
=======
When you use a [developer console](info:devtools) to run code, please note that it doesn't `use strict` by default.
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31

Понякога, когато използваме строгия режим `usе strict`, нещата могат да се за различнават от обичайното. Можете да получите некоректни резултати.

<<<<<<< HEAD
Можете да пробвате като натиснете клавишните `key:Shift+Enter`, за да добавите нов ред към същестуващата линия и така да добавите допълнителен код към съществуващия и по този начин да използвате `use strict` най-отгоре в кода. Ето така:
=======
So, how to actually `use strict` in the console?

First, you can try to press `key:Shift+Enter` to input multiple lines, and put `use strict` on top, like this:
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31

```js
'use strict'; <Shift+Enter за нов ред>
//  ...твоят код
<Enter за да изпълните кода>
```

Това работи в повечето браузъри, като Firefox и Chrome.

<<<<<<< HEAD
Ако това не проработи, няй-надежния вариант да сме сигурни че използваме `use strict` би било да въведете кода в конзолата така:
=======
If it doesn't, e.g. in an old browser, there's an ugly, but reliable way to ensure `use strict`. Put it inside this kind of wrapper:
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31

```js
(function() {
  'use strict';

<<<<<<< HEAD
  // ...твоят код...
})()
```

## Винаги използвайте "use strict"

Тепърва ще покриваме разликите между строгия и режима "по подразбиране".

В следващите глави, докато научаваме все повече за езика, ще отбележим различията между строгия режим и режима по подразбиране. За щастие те не са много и праят живота ни по-добър.

За сега е достатъчно да знаем основното за него:

1. Директивата `"use strict"` превключва на "модерния" режим, променя поведението на някои вградени функции. Ще разгледаме детайлите по-късно в ръководството.
2. Строгия режим се активира като сложим `"use strict"` най-отгоре на кода ни ли дадена функция. Различните особености на езика, като "класове" и "модули", активират строгия режим автоматично.
3. Строгия режим се поддържа от всички модерни браузъри.
4. Препоръчваме ви винаги да започвате кода си с `"use strict"`. Всички примери в това ръководство използват строг режим, освен ако (много рядко) е посочено друго.
=======
  // ...your code here...
})()
```

## Should we "use strict"?

The question may sound obvious, but it's not so.

One could recommend to start scripts with `"use strict"`... But you know what's cool?

Modern JavaScript supports "classes" and "modules" - advanced language structures (we'll surely get to them), that enable `use strict` automatically. So we don't need to add the `"use strict"` directive, if we use them.

**So, for now `"use strict";` is a welcome guest at the top of your scripts. Later, when your code is all in classes and modules, you may omit it.**

As of now, we've got to know about `use strict` in general.

In the next chapters, as we learn language features, we'll see the differences between the strict and old modes. Luckily, there aren't many and they actually make our lives better.

All examples in this tutorial assume strict mode unless (very rarely) specified otherwise.
>>>>>>> cd2c7ce3c8f033e6f7861ed1b126552e41ba3e31
