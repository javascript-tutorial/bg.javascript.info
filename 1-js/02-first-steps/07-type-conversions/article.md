# Преобразуване на типове

През повечето време, операторите и функциите автоматично преобразуват подадените им стойности в правилният тип. 

Например, `alert` автоматично преобразува всяка подадена стойност в символен низ(string) и я показва. Математическите операции преобразува стойностите в числа(number).

Има и случаи, когато трябва изрично да преобразуваме стойност в очаквания тип.

```smart header="Все още не говорим за обекти"
В тази глава няма да покриваме обекти. Вместо това първо ще изучим примитивните типове. По-късно, след като научим за обектите, ще видим как работи преобразуването на обекти в главата <info:object-toprimitive>.
```

## Преобразуване в символен низ(string)

Преобразуването в символен низ се случва, когато имаме нужда от текстовата форма на стойност.

Например, `alert(стойност)` го прави за да покаже стойността.

Също така можем да извикаме `String(стойност)` функцията за да преобразуваме стойността в символен низ:

```js run
let value = true;
alert(typeof value); // булев тип

*!*
value = String(value); // сега променливата е от тип символен низ
alert(typeof value); // символен низ
*/!*
```

Преобразуването в символен низ е доста буквално. Стойността `false` става символен низ `"false"`, `null` става символен низ `"null"`, и т.н.

## Преубразуване в число(number)

Преобразуването в число се случва автоматично в математически функции и изрази.

Например, когато делене `/` се използва с нечислов тип:

```js run
alert( "6" / "2" ); // 3, символите се преобразуват в числа
```

Също така можем да извикаме  `Number(стойност)` функцията за да преобразуваме изрично стойността в число:

```js run
let str = "123";
alert(typeof str); // символен низ

let num = Number(str); // преобразуване в числото 123

alert(typeof num); // число
```

Изричното преобразуване обикновено се изисква, когато четем стойност от източник, базиран на символен низ, като текстова форма, но очакваме да бъде въведено число.

Ако символният низ не е валидно число, резултатът от такова преобразуване е `NaN`. Например:

```js run
let age = Number("произволен символен низ вместо число");

alert(age); // NaN, неуспешно преобразуване
```

Правила за преобразуване в число:

| Стойност |  Преобразува се в... |
|-------|-------------|
|`undefined`|`NaN`|
|`null`|`0`|
|<code>true&nbsp;и&nbsp;false</code> | `1` и `0` |
| `string` | Празните интервали от началото и края се премахват. Ако оставащият символен низ е празен, резултатът е `0`. В противен случай числото се "чете" от символния низ. При грешка връща `NaN`. |

Примери:

```js run
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (грешка при четене на номер в "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

Моля, имайте предвид, че `null` и `undefined` се държат различно тук: `null` се преобразува в 0, докато `undefined` се преобразува в `NaN`.

Повечето математически оператори също извършват такова преобразуване, ще видим това в следващата глава.

## Преобразуване в булев тип(boolean)

Конвертирането в булев тип е най-лесното.

ТО се случва в логически операции (по-късно ще разгледаме проврки на условия и други подобни неща),но може да се изпълни и изрично с повикване на `Boolean(стойност)`.

Правила за преобразуване:

- Стойности, които са интуитивно "празни", като `0`, празен символен низ, `null`, `undefined`, и `NaN`, се преобразуват във `false`.
- Другите стойности се преобразуват в `true`.

Например:

```js run
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Здравей") ); // true
alert( Boolean("") ); // false
```

````warn header="Моля, обърнете внимание: символен низ съдържащ нула `\"0\"` е `true`"
Накои езици (а именно PHP) преобразуват `"0"` в `false`. Но в JavaScript, не празен символен низ е винаги `true`.

```js run
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // празнен интервал, съще true (не празен символен низ е true)
```
````

## Обобщение

Трите най-широко използвани преобразувания на типове са в символен низ, в число и булев тип.

**`Преобразуване в символен низ`** -- Възниква, когато изкаме да покажем нещо. Може да се изпълни с `String(стойност)`. Преобразуването в символен низ обикновено е буквално за примитивните стойности.

**`Преобразуване в число`** -- Възниква в математически операции. Може да се изпълни с 
`Number(стойност)`.

Преобразуването в число следва следните правилата:

| Стойност |  Преобразува се в... |
|-------|-------------|
|`undefined`|`NaN`|
|`null`|`0`|
|<code>true&nbsp;/&nbsp;false</code> | `1 / 0` |
| `string` | Празните интервали от началото и края се премахват. Ако оставащият символен низ е празен, резултатът е 0. В противен случай числото се “чете” от символния низ. При грешка връща NaN. |

**`Преобразуване в булев тип`** -- Възниква в логически операции. Може да се изпълни с `Boolean(стойност)`.

Преобразуването в булев тип следва следните правилата:

| Стойност |  Преобразува се в... |
|-------|-------------|
|`0`, `null`, `undefined`, `NaN`, `""` |`false`|
|всяка друга стойност| `true` |


Повечето от тези правила са лесни за разбиране и запаметяване. Изключения, при които хората обикновено правят грешки, са:

- `undefined` е `NaN` като число, не `0`.
- `"0"` и символни низ само с празни интервали "   "` са true в булев тип.

Тук не са обхванати обекти. Ще се върнем към тях по-късно в главата <info:object-toprimitive> която е посветена на обектите, след като научим повече основни неща за JavaScript.