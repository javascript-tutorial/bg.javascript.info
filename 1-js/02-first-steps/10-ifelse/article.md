# Условен оператори: if, '?'

Понякога се налага да извършваме различни действия въз основа на различни условия.

За да направим това, можем да използваме оператора `if` и условния оператор `?`, който също се нарича "въпросителен" оператор.

## Изразът "if"

Изразът `if(...)` изчислява условието в скобите и ако резултатът е `true`, изпълнява парчето с дадения код.

Например:

```js run
let year = prompt('Коя година са публикувани спецификациите на ECMAScript-2015?', '');

*!*
if (year == 2015) alert( 'Верен отговор!' );
*/!*
```

В горния пример, условието е проста проверка за равенство (`year == 2015`), но то може да бъде и много по-сложен в някои случаи.

Ако искаме да изпълним повече от един израз, трябва да го направим с блок от код вътре в къдравите скоби:

```js
if (year == 2015) {
  alert( "Това е правилно!" );
  alert( "Много си умен!" );
}
```

Преворъчваме да слагате кода си вътре в къдравите скоби всеки път когато използвате израза `if`, дори ако имате само един израз от код за изпълняване. По този начин ще се подобри четимостта.

## Булева конверсия

Изразът `if (…)` превръща фразата вътре в скобите в *"boolean"* (булева променлива).

Нека припомним правилата за преобразуване от главата <info:type-conversions>:

- Цифрата `0`, празния стринг `""`, `null`, `undefined`, и `NaN` всичките те се превръщат на `false`. Затова са наречени "неверни" стойности.
- Другите се превръщат на `true`, и са наречени "верни" стойности.

Така че, кодът при това условие никога няма да се изпълни:

```js
if (0) { // 0 е невярно
  ...
}
```

... и вътре в това условие - винаги ще е:

```js
if (1) { // 1 е вярно
  ...
}
```

Можем също така да предадем предварително оценена булева стойност на `if`, като този:

```js
let cond = (year == 2015); // равенството се оценява на вярно или невярно

if (cond) {
  ...
}
```

## Клаузата "else"

<<<<<<< HEAD
Изразът `if` може да съдържа незадължителен блок `else`. Той се изпълнява, когато условието е невярно.

Например:
=======
The `if` statement may contain an optional `else` block. It executes when the condition is falsy.
>>>>>>> 285083fc71ee3a7cf55fd8acac9c91ac6f62105c

```js run
let year = prompt('Коя година са публикувани спецификациите на ECMAScript-2015?', '');

if (year == 2015) {
  alert( 'Правилно го отгатнахте!' );
} else {
  alert( 'Как можа да сгрешите?' ); // всяка стойност с изключение на 2015
}
```

## Няколко условия: "else if"

Понякога искаме да тестваме няколко варианта на дадено условие. Изразът `else if` ни позволява да направим това.

Например:

```js run
let year = prompt('Коя година са публикувани спецификациите на ECMAScript-2015?', '');

if (year < 2015) {
  alert( 'Доста рано...' );
} else if (year > 2015) {
  alert( 'Доста късно' );
} else {
  alert( 'Точно!' );
}
```

В горния код, първо се проверява `year < 2015`. Ако то е невярно, се проверява следващото условие `year > 2015`. Ако и то е невярно ни се показва последния `alert`.

Може да има повече `else if` блока. Последния `else` е незадължителен и ще се изпълни ако всички `if` и `else if` блокове са неверни.

## Терминалния оператор '?:'

Понякога трябва да зададем променлива в зависимост от дадено състояние.

Например:

```js run no-beautify
let accessAllowed;
let age = prompt('На колко години си?', '');

*!*
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
*/!*

alert(accessAllowed);
```

Така нареченият "терминален" или "въпросителен" оператор ни позволява да правим това по-кратък и по-опростен начин.

Операторът е представен от въпросителен знак "?". Понякога се нарича "ternary" (терминален), защото операторът има три операнда. Всъщност той е единственият оператор в JavaScript, който има толкова много.

Синтаксиса е по следния начин:

```js
let result = condition ? value1 : value2;
// резултат = условие ? стойност1 : стойност2
```

Когато условието `condition` е изчислен: пръща `value1` ако е вярно, и в противен случай -- `value2`.

Например:

```js
let accessAllowed = (age > 18) ? true : false;
```

Технически можем да пропуснем скобите около `age > 18`. Tерминалния оператор има ниско предимство, така че ще се изпълнява след сравнението `>`.

Този пример ще направи същото като предишния:

```js
// операторът за сравнение "age > 18" се изпълнява първи така или иначе
// (няма нужда да ги сложим в скоби)
let accessAllowed = age > 18 ? true : false;
```

Но скобите правят кода по-четим, затова препоръчваме да ги използвате.

````smart header="Забележете"
В горния пример можете да избегнете използването на терминалния оператора, защото самото сравнение връща `true/false`:

```js
// същото е
let accessAllowed = age > 18;
```
````

## Многократни '?'

Поредица от терминални оператори `?` могат да върнат стойност, която зависи от повече от едно условие.

Например:

```js run
let age = prompt('Възраст?', 18);

let message = (age < 3) ? 'Здравей, бебчо!' :
  (age < 18) ? 'Здравей!' :
  (age < 100) ? 'Поздрави!' :
  'Каква необичайна възраст!';

alert( message );
```

В началото може да е трудно да разберете какво се случва. Но след по-подробно разглеждане можем да видим, че това е просто обикновена последователност от тестове:

<<<<<<< HEAD
1. Първият терминален оператор проверява `age < 3`.
2. Ако е вярно -- връща `'Здравей, бебчо!'`. Иначе продължава израза след '":"', проверявайки `age < 18`.
3. Ако е вярно -- връща `'Здравей!'`. Иначе продължава израза след '":"', проверявайки `age < 100`.
4. Ако е вярно -- връща `'Поздрави!'`. Иначе продължава израза след '":"', и връща `'Каква необичайна възраст!'`.
=======
1. The first question mark checks whether `age < 3`.
2. If true -- it returns `'Hi, baby!'`. Otherwise, it continues to the expression after the colon ":", checking `age < 18`.
3. If that's true -- it returns `'Hello!'`. Otherwise, it continues to the expression after the next colon ":", checking `age < 100`.
4. If that's true -- it returns `'Greetings!'`. Otherwise, it continues to the expression after the last colon ":", returning `'What an unusual age!'`.
>>>>>>> 285083fc71ee3a7cf55fd8acac9c91ac6f62105c

Ето как изглежда ако бихме използвали `if..else`:

```js
if (age < 3) {
  message = 'Здравей, бебчо!';
} else if (age < 18) {
  message = 'Здравей!';
} else if (age < 100) {
  message = 'Поздрави!';
} else {
  message = 'Каква необичайна възраст!';
}
```

## Нетрадиционна употреба на '?'

Понякога терминалния оператор `?` се използва като заместител на `if`:

```js run no-beautify
let company = prompt('Коя компания създаде JavaScript?', '');

*!*
(company == 'Netscape') ?
   alert('Правилно!') : alert('Грешно.');
*/!*
```

В зависимост от условието `company == 'Netscape'`, или първият, или вторият израз след `?` ще се изпълнява и ще показва съобщение.

Тук не присвояваме резултат на променлива. Вместо това изпълняваме различен код в зависимост от състоянието.

**Не се препоръчва използването на терминалния (*"?"*) оператор по този начин.**

Нотацията е по-къса от еквивалента `if`, което се харесва на някои програмисти. Но е по-малко четим.

Тук се използва същия код `if` за дa ги сравним:

```js run no-beautify
let company = prompt('Коя компания създаде JavaScript?', '');

*!*
if (company == 'Netscape') {
  alert('Правилно!');
} else {
  alert('Грешно.');
}
*/!*
```

Очите ни сканират кода вертикално. Кодови блокове, които обхващат няколко реда, са по-лесни за разбиране, отколкото дълъг хоризонтален набор от инструкции.

Целта на терминалния `ternary` оператора `?` e да върне една или друга стойност в зависимост от даденото условие. Моля, използвайте ги точно за това. Използвайте `if` когато трябва да изпълните различни отклонения от кода.
