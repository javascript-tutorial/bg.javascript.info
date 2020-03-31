# Ninja code


```quote author="Confucius"
Ученето без мисъл е загуба на труд, мисълта без учение е опасно.
```

Нинджите програмисти в миналото използвали тези трикове за да изострят ума на хората, които поддържат кода. 

Гурутата които се занимават с преглеждане на кода ги търсят в своите тестове. 

Начинаещите програмисти понякога ги използват, дори по-добре от нинджите програмисти. 

Прочетете ги внимателно и разберете какъв сте Вие -- нинджа, начинаещ програмист или рецензент на код? 


```warn header="Irony detected"
Мнозина се опитват да следват пътя на нинджата. Малцина успяват. 
```


## Краткостта е душата на остроумието

Направи кода колкото е възможно по-кратък. Покажи колко си умен.

Нека тънкостите на езика те водят.

Наприме погледни този тернарен оператор `'?'`:

```js
// взет от добре позната javascript библиотека
i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
```

Супер, нали? Ако пишеш така, програмистът, който чете твоя код ще има трудности да разбере каква е стойността на `i` щом стигне този ред. След това ще дойде да пита теб.  

Кажи им че по-краткия начин винаги е по-добър. Покажи им пътя на нинджата.

## Променливи от една буква

```quote author="Laozi (Tao Te Ching)"
Дао се крие в безмълвието. Само Дао започва и свършва добре. 
```

Друг начин да се пише код бързо е като се позвват променливи от една буква навсякъде. Като `a`, `b` или `c`.

Кратката променлива изчезва в кофа като истински нинджа в гората. Никой няма да може да я открие като използва "search" не редактора. И дори ако някой успее, той няма да "разбере" какво означава името `a` или `b`.

...Но има и изключения. Истинският нинджа никога няма да използва `i` като брояч във `"for"` цикъл. Навсякъде другаде да, но не и тук. Огледай се наоколо, има много по-екзотични букви. Например `x` или `y`.

Екзотична променлива като брояч в цикъл е чудесна, особено ако тялото на цикъла заема 1-2 страници (направи го по-дълго ако можеш). Тогава ако някой погледне цикъла, той няма да успее да разбере веднага, че променлива на име `x` е броячът на цикъла.  

## Използвай съкращения

--- Ако правилата на екипа забраняват използването на променливи от една буква и неясни имена --- използвай съкращения.

Ето така:

- `list` -> `lst`.
- `userAgent` -> `ua`.
- `browser` -> `brsr`.
- ...и тн.

Сампо онзи с наистина добра интуиция ше успее да разбере такива имена. Опитай се да съкратиш всичко. Само достоен човек ще успее да разбере и поддържа твоя код. 

## Извиси се високо. Бъди абстрактен.

```quote author="Laozi (Tao Te Ching)"
Най-голямият квадрат е без ъгли<br>
Най-големият кораб е завършен последен,<br>
Най-великата нота е възвишен звук,<br>
Най-великият образ няма форма.
```

При избора на име използвай възможно най-абстрактната дума като `obj`, `data`, `value`, `item`, `elem` и т.н.

- **The ideal name for a variable is `data`.** Use it everywhere you can. Indeed, every variable holds *data*, right?

    ...But what to do if `data` is already taken? Try `value`, it's also universal. After all, a variable eventually gets a *value*.

- **Name a variable by its type: `str`, `num`...**

    Give them a try. A young initiate may wonder -- are such names really useful for a ninja? Indeed, they are!

    Sure, the variable name still means something. It says what's inside the variable: a string, a number or something else. But when an outsider tries to understand the code, they'll be surprised to see that there's actually no information at all! And will ultimately fail to alter your well-thought code.

    The value type is easy to find out by debugging. But what's the meaning of the variable? Which string/number does it store?

    There's just no way to figure out without a good meditation!

- **...But what if there are no more such names?** Just add a number: `data1, item2, elem5`...

## Attention test

Only a truly attentive programmer should be able to understand your code. But how to check that?

**One of the ways -- use similar variable names, like `date` and `data`.**

Mix them where you can.

A quick read of such code becomes impossible. And when there's a typo... Ummm... We're stuck for long, time to drink tea.


## Smart synonyms

```quote author="Confucius"
The hardest thing of all is to find a black cat in a dark room, especially if there is no cat.
```

Using *similar* names for *same* things makes life more interesting and shows your creativity to the public.

For instance, consider function prefixes. If a function shows a message on the screen -- start it with `display…`, like `displayMessage`. And then if another function shows on the screen something else, like a user name, start it with `show…` (like `showName`).

Insinuate that there's a subtle difference between such functions, while there is none.

Make a pact with fellow ninjas of the team: if John starts "showing" functions with `display...` in his code, then Peter could use `render..`, and Ann -- `paint...`. Note how much more interesting and diverse the code became.

...And now the hat trick!

For two functions with important differences -- use the same prefix!

For instance, the function `printPage(page)` will use a printer. And the function `printText(text)` will put the text on-screen. Let an unfamiliar reader think well over similarly named function `printMessage`: "Where does it put the message? To a printer or on the screen?". To make it really shine, `printMessage(message)` should output it in the new window!

## Reuse names

```quote author="Laozi (Tao Te Ching)"
Once the whole is divided, the parts<br>
need names.<br>
There are already enough names.<br>
One must know when to stop.
```

Add a new variable only when absolutely necessary.

Instead, reuse existing names. Just write new values into them.

In a function try to use only variables passed as parameters.

That would make it really hard to identify what's exactly in the variable *now*. And also where it comes from. The purpose is to develop the intuition and memory of a person reading the code. A person with weak intuition would have to analyze the code line-by-line and track the changes through every code branch.

**An advanced variant of the approach is to covertly (!) replace the value with something alike in the middle of a loop or a function.**

For instance:

```js
function ninjaFunction(elem) {
  // 20 lines of code working with elem

  elem = clone(elem);

  // 20 more lines, now working with the clone of the elem!
}
```

A fellow programmer who wants to work with `elem` in the second half of the function will be surprised... Only during the debugging, after examining the code they will find out that they're working with a clone!

Seen in code regularly. Deadly effective even against an experienced ninja.

## Underscores for fun

Put underscores `_` and `__` before variable names. Like `_name` or `__value`. It would be great if only you knew their meaning. Or, better, add them just for fun, without particular meaning at all. Or different meanings in different places.

You kill two rabbits with one shot. First, the code becomes longer and less readable, and the second, a fellow developer may spend a long time trying to figure out what the underscores mean.

A smart ninja puts underscores at one spot of code and evades them at other places. That makes the code even more fragile and increases the probability of future errors.

## Show your love

Let everyone see how magnificent your entities are! Names like `superElement`, `megaFrame` and `niceItem` will definitely enlighten a reader.

Indeed, from one hand, something is written: `super..`, `mega..`, `nice..` But from the other hand -- that brings no details. A reader may decide to look for a hidden meaning and meditate for an hour or two of their paid working time.


## Overlap outer variables

```quote author="Guan Yin Zi"
When in the light, can't see anything in the darkness.<br>
When in the darkness, can see everything in the light.
```

Use same names for variables inside and outside a function. As simple. No efforts to invent new names.

```js
let *!*user*/!* = authenticateUser();

function render() {
  let *!*user*/!* = anotherValue();
  ...
  ...many lines...
  ...
  ... // <-- a programmer wants to work with user here and...
  ...
}
```

A programmer who jumps inside the `render` will probably fail to notice that there's a local `user` shadowing the outer one.

Then they'll try to work with `user` assuming that it's the external variable, the result of `authenticateUser()`... The trap is sprung! Hello, debugger...


## Side-effects everywhere!

There are functions that look like they don't change anything. Like `isReady()`, `checkPermission()`, `findTags()`... They are assumed to carry out calculations, find and return the data, without changing anything outside of them. In other words, without "side-effects".

**A really beautiful trick is to add a "useful" action to them, besides the main task.**

An expression of dazed surprise on the face of your colleague when they see a function named `is..`, `check..` or `find...` changing something -- will definitely broaden your boundaries of reason.

**Another way to surprise is to return a non-standard result.**

Show your original thinking! Let the call of `checkPermission` return not `true/false`, but a complex object with the results of the check.

Those developers who try to write `if (checkPermission(..))`, will wonder why it doesn't work. Tell them: "Read the docs!". And give this article.


## Powerful functions!

```quote author="Laozi (Tao Te Ching)"
The great Tao flows everywhere,<br>
both to the left and to the right.
```

Don't limit the function by what's written in its name. Be broader.

For instance, a function `validateEmail(email)` could (besides checking the email for correctness) show an error message and ask to re-enter the email.

Additional actions should not be obvious from the function name. A true ninja coder will make them not obvious from the code as well.

**Joining several actions into one protects your code from reuse.**

Imagine, another developer wants only to check the email, and not output any message. Your function  `validateEmail(email)` that does both will not suit them. So they won't break your meditation by asking anything about it.

## Summary

All "pieces of advice" above are from the real code... Sometimes, written by experienced developers. Maybe even more experienced than you are ;)

- Follow some of them, and your code will become full of surprises.
- Follow many of them, and your code will become truly yours, no one would want to change it.
- Follow all, and your code will become a valuable lesson for young developers looking for enlightenment.
