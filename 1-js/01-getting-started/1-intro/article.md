# Въведение в JavaScript

Нека да видим какво е специалното относно JavaScript-а, какво можем да постигнем с него и кои други технологии си играят с него.

## Какво е JavaScript ?

*JavaScript* първоначално е създаден *"за да направи уеб страниците живи"*.

Програмите с този език са наречени *скриптове*. Те могат да се пишат направо в HTML-а на уеб страницата и да се зареждате автоматично когато страницата се зареди.

Скриптовете са предоставени и изпълнени като обикновен текст. Не им е необходимо специална подготовка или компилация за да се пускат.

В този аспект, JavaScript е много по-различен от езика наречен [Java](https://en.wikipedia.org/wiki/Java_(programming_language)).

```smart header="Защо <u>Java</u>Script?"
Когато JavaScript е създаден, първоначално е имало друго име: "LiveScript". Но Java-та е била много популярна по онова време и така създателите на езика решили позиционирането на този нов език като "малко братче" на Java-та, и евентуално да му помогне.

В момента езика JavaScript се разви драстично и стана напълно независим език със собствена спецификация, наречена [ECMAScript](http://en.wikipedia.org/wiki/ECMAScript), и сега тя изобщо няма отношение към Java.
```

Съвременния JavaScript може да се изпълни не само в браузъра, но и в сървъри, така и във всяко устройство, което има специална програма наречена [the JavaScript engine](https://en.wikipedia.org/wiki/JavaScript_engine).

Браузърът има вграден двигател, понякога наричан "JavaScript virtual machine".

Различните двигатели имат различни "кодови имена". Например:

<<<<<<< HEAD
- [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) -- в браузърите Chrome и Opera.
- [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey) -- в браузъра Firefox.
- ...Има и други кодови имена като "Chakra", "JavaScriptCore", "Nitro" и "SquirrelFish" за Safari, и т.н. .

Хубаво е да запомните термините по-горе, защото са използвани в статиите на разрабочиците в интернет. Ние също ще ги използваме. Например, ако "свойство Х е поддържан от V8", то вероятно ще работи в браузърите Chrome и Opera.
=======
- [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) -- in Chrome, Opera and Edge.
- [SpiderMonkey](https://en.wikipedia.org/wiki/SpiderMonkey) -- in Firefox.
- ...There are other codenames like "Chakra" for IE, "JavaScriptCore", "Nitro" and "SquirrelFish" for Safari, etc.

The terms above are good to remember because they are used in developer articles on the internet. We'll use them too. For instance, if "a feature X is supported by V8", then it probably works in Chrome, Opera and Edge.
>>>>>>> 3699f73b4ccb2a57ac5ef990d2687bf31ccf564c

```smart header="Как JavaScript двигателят работи?"

Двигателите са сложни, но основното им е лесно.

<<<<<<< HEAD
1. Двигателят (вграден ако е браузър) чете ("анализира") скрипт-а.
2. Тогава го конвертира ("компилира") скрипт-а в машинен език.
3. И след тогава машинния код се изпълнява.
=======
1. The engine (embedded if it's a browser) reads ("parses") the script.
2. Then it converts ("compiles") the script to machine code.
3. And then the machine code runs, pretty fast.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Вдигателят прилага оптимизации във всяка стъпка от процеса. Даже гледа компилирания скрипт, което се изпълнява, анализира данните, които протичат през него и прилага оптимазиции на машинния код на база тези данни. Когато всичко е готово скрипт-ът се изпълнява доста бързо.
```

## Какво може JavaScript в браузъра ?

<<<<<<< HEAD
Модерният JavaScript е "безопасен" програмен език. То не предоставя ниско ниво на достъп на паметта и процесора, защото първоначално е създаден за браузърите, които не изискват подобно нещо.
=======
Modern JavaScript is a "safe" programming language. It does not provide low-level access to memory or the CPU, because it was initially created for browsers which do not require it.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Способностите на JavaScript-a силно зависят от средата, която се изпълнява. Например [Node.js](https://wikipedia.org/wiki/Node.js) поддържа функции, които позволяват на JavaScript-а да чете/пише случайни файлове, да изпълнява мрежови заявки и т.н.

JavaScript-a в браузъра може да направи всичко относно манипулирането на уеб страниците, взаимодействието с потребителите и със сървъра.

Например, в браузърите, JavaScript е способен на:

- Да добави HTML код на страницата.
- Да променя съществуващото съдържание на страниците.
- Да променя стилизацията.
- Да реагира на действията на потребителя: при кликане на мишката, при натискане на бутон или просто задвижване на показателя.
- Да изпраща заявки чрез интернет към отдалечени сървъри (т.нар. [AJAX заявки](https://en.wikipedia.org/wiki/Ajax_(programming)) и [COMET](https://en.wikipedia.org/wiki/Comet_(programming)) technologies).
- Да изтегля и да качва файлове.
- Да изтегля и да установи бисквити.
- Да пита посетителите и да им покаже съобщения.
- Да запомни данните от страната на клиента (т.нар. "local storage" - локално хранилище).

## Какво не може JavaScript-а в браузъра?

<<<<<<< HEAD
<<<<<<< HEAD
Възможностите на JavaScript-a в браузъра са ограничени заради безопасността на потребителя. Целта е да се предотврати на зловредните страници достъпът на личната информация на потребителите или навреждането на данните на потребителите.
=======
JavaScript's abilities in the browser are limited for the sake of a user's safety. The aim is to prevent an evil webpage from accessing private information or harming the user's data.
>>>>>>> c5358c59494b53efb832c81a5338e0a23b22c269
=======
JavaScript's abilities in the browser are limited to protect the user's safety. The aim is to prevent an evil webpage from accessing private information or harming the user's data.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Примерите на такива ограничения вкючват:
Examples of such restrictions include:

- JavaScript-а от уеб страницата не може да чете/запише случайни файлове в харддиск-а, да ги копира или да стартира/изпълнява програми. То няма директен достъп до функциите на операционната система.

    Модерните браузъри позволяват работата с файлове, но достъпът им е ограничен. Браузърът могат да има достъп само ако потребителят направи определени действия, като "дроп-ване" на файл в браузъра или избирането на даден файл чрез `<input>` tag-а.

    Има начини то да взаимодейства с камера/микрофон и други устройства, но те изискват разрешение от потребителя. И така, страниците с активиран JavaScript не могат подло да активират камерата, да наблюдават околноста и да праща тези данни на [Агенцията за Национална Сигурност](https://bg.wikipedia.org/wiki/%D0%90%D0%B3%D0%B5%D0%BD%D1%86%D0%B8%D1%8F_%D0%B7%D0%B0_%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D0%BD%D0%B0_%D1%81%D0%B8%D0%B3%D1%83%D1%80%D0%BD%D0%BE%D1%81%D1%82).

<<<<<<< HEAD
- Различните табове/прозорци в общи линии не знаят за един друг. Понякога да, например когато един прозорец използва JavaScript за да отвори друг. Но дори тогава, JavaScript-а от едната страница може и да няма достъп до другия ако са от различни страници (от различни домейни,протоколи или порти)

    Това е наречено "Same Origin Policy" или Същинска Политика за Произход. За да проработи това, *и двете страници* трябва да се съгласят за обмен на данни и да съдържат специален JavaScript код, който се справя с това. Ще разгледаме това по-късно в ръководството.

    Това ограничение, отново, е за безопасността на потребителите. Например страницата с адрес `http://anysite.com`, което потребителят е отворил не би трябвало да има достъп до друг таб в браузъра с URL адрес `http://gmail.com`, който да краде информацията от там.

- JavaScript-а много лесно може да комуникира, чрез интернет, със сървъра откъдето текущата страница произлиза. Но способнастите му да извлича данни от други страници/домейни е усложнен. Макар и възможно, то се нуждае от изрично съгласие (описано в HTTP заявките) от отдалечената страна. Отново, това са обезопасителни ограничения.

![](limitations.svg)

Такива ограничения не съществуват ако JavaScript-a е използван извън браузъра, например в сървърите. Също, модерните браузъри имат плъгин-и/разширения, които биха питали за допълнителни разрешения.
=======
    There are ways to interact with the camera/microphone and other devices, but they require a user's explicit permission. So a JavaScript-enabled page may not sneakily enable a web-camera, observe the surroundings and send the information to the [NSA](https://en.wikipedia.org/wiki/National_Security_Agency).
- Different tabs/windows generally do not know about each other. Sometimes they do, for example when one window uses JavaScript to open the other one. But even in this case, JavaScript from one page may not access the other page if they come from different sites (from a different domain, protocol or port).

    This is called the "Same Origin Policy". To work around that, *both pages* must agree for data exchange and must contain special JavaScript code that handles it. We'll cover that in the tutorial.

    This limitation is, again, for the user's safety. A page from `http://anysite.com` which a user has opened must not be able to access another browser tab with the URL `http://gmail.com`, for example, and steal information from there.
- JavaScript can easily communicate over the net to the server where the current page came from. But its ability to receive data from other sites/domains is crippled. Though possible, it requires explicit agreement (expressed in HTTP headers) from the remote side. Once again, that's a safety limitation.

![](limitations.svg)

Such limitations do not exist if JavaScript is used outside of the browser, for example on a server. Modern browsers also allow plugins/extensions which may ask for extended permissions.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

## Какво прави JavaScript-a уникален?

Има поне *три* чудесни неща относно JavaScript:

```compare
<<<<<<< HEAD
+ Пълна интеграция с HTML и CSS.
+ Простите неща се правят просто.
+ Поддържан от основните браузъри и е активиран по подразбиране.
=======
+ Full integration with HTML/CSS.
+ Simple things are done simply.
+ Supported by all major browsers and enabled by default.
>>>>>>> c5358c59494b53efb832c81a5338e0a23b22c269
```

JavaScript е единствената браузърна технология, който комбинира всичките тези три неща.

Това е което прави JavaScript-а толкова уникален. Затова е толкова широк разпространен инструмент за създаване на браузърни интерфейси.

<<<<<<< HEAD
Също така, JavaScript ни позволява за създаването на сървъри, мобилни приложения и други.
=======
That said, JavaScript can be used to create servers, mobile applications, etc.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

## Езици "над" JavaScript

Синтаксисът на JavaScript-a не отговаря на нуждите на всеки. Различните хора искат различни качества.

Това е очаквано, защото проектите и изискванията са различни за всеки.

<<<<<<< HEAD
Така наскоро се появи множество нови езици, които са *transpiled* (преобразувани) в JavaScript, преди да стартират в браузъра.
=======
So, recently a plethora of new languages appeared, which are *transpiled* (converted) to JavaScript before they run in the browser.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

Съвременните инструменти правят транспилацията много бърза и прозрачна, като всъщност позволяват на разработчиците да кодират на друг езици и автоматично да го конвертират "под капака'.

Примери на такива езици са:

<<<<<<< HEAD
- [CoffeeScript](http://coffeescript.org/) е "синтактичната захар" за JavaScript. То въвежда по-къс синтаксис като ни позволява да пишем по-четим и прецизен код. Обикновенно Ruby разработчиците го харесват.
- [TypeScript](http://www.typescriptlang.org/) e език съсредоточен да добави "писане на стрикни типове данни" за да опрости разработване и поддръжката на сложни системи. Разработва се от Microsoft.
- [Flow](http://flow.org/) също добавя типизирани данни, но по по-различен начин. Разработва се от Facebook.
- [Dart](https://www.dartlang.org/) е самостоятелен език, което си има свобствен двигател, което работи в не-браузърни среди (като мобилни приложения), но също може да се транспилира до JavaScript. Разработва се от Google.
- [Brython](https://brython.info/) е транспилатор от програмния език Python към JavaScript, което ви позволява да напишете приложения с чист Python език без JavaScript.
- [Kotlin](https://kotlinlang.org/docs/reference/js-overview.html) е модерен, сбит и безопасен език за програмиране, която цел може да е Браузър или Node.

Има и други. Разбира се, дори да използваме един от транспилираните езици, ние също трябва да знаем JavaScript, за да разберем наистина какво правим.
=======
- [CoffeeScript](https://coffeescript.org/) is "syntactic sugar" for JavaScript. It introduces shorter syntax, allowing us to write clearer and more precise code. Usually, Ruby devs like it.
- [TypeScript](https://www.typescriptlang.org/) is concentrated on adding "strict data typing" to simplify the development and support of complex systems. It is developed by Microsoft.
- [Flow](https://flow.org/) also adds data typing, but in a different way. Developed by Facebook.
- [Dart](https://www.dartlang.org/) is a standalone language that has its own engine that runs in non-browser environments (like mobile apps), but also can be transpiled to JavaScript. Developed by Google.
- [Brython](https://brython.info/) is a Python transpiler to JavaScript that enables the writing of applications in pure Python without JavaScript.
- [Kotlin](https://kotlinlang.org/docs/reference/js-overview.html) is a modern, concise and safe programming language that can target the browser or Node.

There are more. Of course, even if we use one of these transpiled languages, we should also know JavaScript to really understand what we're doing.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

## Обобщение

<<<<<<< HEAD
- JavaScript първоначално е създаден като "език за браузъра", но в момента се използва и много други среди.
- Настоящем, JavaScript има уникалната позиция като най-широко разпространения език с пълна интеграция с HTML и CSS.
- Има много езици, които се "транспилират" в JavaScript код и предоставят определени подобрения. Препоръчително е да се погледнат, поне за кратко, след като овладеете JavaScript-a.
=======
- JavaScript was initially created as a browser-only language, but it is now used in many other environments as well.
- Today, JavaScript has a unique position as the most widely-adopted browser language, fully integrated with HTML/CSS.
- There are many languages that get "transpiled" to JavaScript and provide certain features. It is recommended to take a look at them, at least briefly, after mastering JavaScript.
>>>>>>> c5358c59494b53efb832c81a5338e0a23b22c269
