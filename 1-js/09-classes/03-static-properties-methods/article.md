
# Статични свойства и методи

<<<<<<< HEAD
Можем също така да присвоим метод на самата функция на класа, не на неговия `"prototype"`. Такива методи се наричат *статични*.

В класа те са започват с ключова дума `static`:
=======
We can also assign a method to the class as a whole. Such methods are called *static*.

In a class declaration, they are prepended by `static` keyword, like this:
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

```js run
class User {
*!*
  static staticMethod() {
*/!*
    alert(this === User);
  }
}

User.staticMethod(); // true
```

Това всъщност прави същото като директното присвояване на като свойството:

```js run
class User { }

User.staticMethod = function() {
  alert(this === User);
};

User.staticMethod(); // true
```

Стойността на `this` в `User.staticMethod()` е конструктора на самия клас `User` (правилото за "обекта преди точката").

<<<<<<< HEAD
Обикновено статичните методи се използват за имплементиране на функции, които принадлежат към класа, но не и към някакъв конкретен обект от него.

Например, имаме обекти `Article` и се нуждаем от функция, за да ги сравним. Естествено решение би било да се добави метода `Article.compare`, ето така:
=======
Usually, static methods are used to implement functions that belong to the class as a whole, but not to any particular object of it.

For instance, we have `Article` objects and need a function to compare them.

A natural solution would be to add `Article.compare` static method:
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

```js run
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

*!*
  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
*/!*
}

// употреба
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

*!*
articles.sort(Article.compare);
*/!*

alert( articles[0].title ); // CSS
```

<<<<<<< HEAD
Тук `Article.compare` стои "над" `Article`, като средство за сравняването им. То не е метод на самия обект `Article`, а по-скоро на целия клас.

Друг пример би било т.нар "фабричен" метод. Представете си че ни трябва няколко начина, за да създадем обект `Article`:
=======
Here `Article.compare` method stands "above" articles, as a means to compare them. It's not a method of an article, but rather of the whole class.

Another example would be a so-called "factory" method.

Let's say, we need multiple ways to create an article:
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

1. Чрез дадени параметри (`title`, `date` etc).
2. Празен обект `Article`, което е с днешната дата.
3. ...или по друг начин.

Първият начин може да бъде имплементирана от конструктора. А за втория можем да направим статичен метод на класа.

<<<<<<< HEAD
Например `Article.createTodays()`, ето така:
=======
Such as `Article.createTodays()` here:
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa

```js run
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

*!*
  static createTodays() {
    // запомнете, this = Article
    return new this("Today's digest", new Date());
  }
*/!*
}

let article = Article.createTodays();

alert( article.title ); // "Today's digest"
```

Сега всеки път, когато трябва да създадем днешния дайджест, просто извикваме `Article.createTodays()`. Още веднъж, това не е метод на самата статията, а метод на целия клас.

Статичните методи се използват и в класове, свързани с базата данни, за търсене/запазване/премахване на записи от базата данни, по следния начин:

```js
<<<<<<< HEAD
// ако приемем, че `Article` е специален клас за управление на статии 
// то статичен метод за премахване на статията би изглеждала така:
=======
// assuming Article is a special class for managing articles
// static method to remove the article by id:
>>>>>>> ac7daa516fa8e687427eac51186af97154748afa
Article.remove({id: 12345});
```

<<<<<<< HEAD
## Статични свойства
=======
````warn header="Static methods aren't available for individual objects"
Static methods are callable on classes, not on individual objects.

E.g. such code won't work:

```js
// ...
article.createTodays(); /// Error: article.createTodays is not a function
```
````

## Static properties
>>>>>>> 30a5d5e2a7c3504c9afd5028f83f4a696e60aede

[recent browser=Chrome]

Статичните свойства също са възможни, те приличат на свойства на обикновен клас, но предварително добавени със ключовата дума `static`:

```js run
class Article {
  static publisher = "Ilya Kantor";
}

alert( Article.publisher ); // Ilya Kantor
```

Това е същото като директно присвояване на `Article`:

```js
Article.publisher = "Ilya Kantor";
```

## Наследяване на статични свойства и методи [#statics-and-inheritance]

Статичните свойства и методи са наследствени.

Например, `Animal.compare` и `Animal.planet` в кода по-долу са наследени и достъпни като `Rabbit.compare` и `Rabbit.planet`:

```js run
class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

*!*
  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
*/!*

}

// Наследяване на класа Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbits = [
  new Rabbit("White Rabbit", 10),
  new Rabbit("Black Rabbit", 5)
];

*!*
rabbits.sort(Rabbit.compare);
*/!*

rabbits[0].run(); // Black Rabbit runs with speed 5.

alert(Rabbit.planet); // Earth
```

Сега когато извикаме метода `Rabbit.compare`, ще се извиква наследения метод на `Animal.compare`.

Но как работи това? Отново, чрез използване на прототипи. Както може би вече се досещате, `extends` дава на `Rabbit` прототип `[[Prototype]]` насочващ към `Animal`.

![](animal-rabbit-static.svg)

Така, `Rabbit extends Animal` създава две `[[Prototype]]` референции:

1. `Rabbit` прототипно наследява функциите на `Animal`.
2. `Rabbit.prototype` прототипно наследява `Animal.prototype`.

И резултатът е, че наследяването работи както за обикновени, така и за статични методи.

Ето, нека проверим това чрез код:

```js run
class Animal {}
class Rabbit extends Animal {}

// за статични
alert(Rabbit.__proto__ === Animal); // true

// за обикновенни
alert(Rabbit.prototype.__proto__ === Animal.prototype); // true
```

## Обобщение

Статичните методи се използват за функционалността, която принадлежи към класа "като цяло". Той не е свързан с конкретен обект на клас.

Например, метод за сравнение `Article.compare(article1, article2)` или фабричния метод `Article.createTodays()`.

Те са обозначени с ключовата думата `static` в декларацията на класа.

Статичните свойства се използват, когато искаме да съхраняваме данни на ниво клас, които също не са обвързани с инстанция.

Синтаксиса е:

```js
class MyClass {
  static property = ...;

  static method() {
    ...
  }
}
```

Технически, статичната декларация е същата като присвояването на самия клас:

```js
MyClass.property = ...
MyClass.method = ...
```

Статичните свойства и методи се наследяват.

При `class B extends A` прототипа на класа `B` сама посочва класа `A`: `B.[[Prototype]] = A`. Така че, ако не се намери поле в класа `B`, търсенето продължава в класа `A`.
