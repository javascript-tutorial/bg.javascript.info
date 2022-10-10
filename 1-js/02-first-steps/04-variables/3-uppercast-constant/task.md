importance: 4

---

# Константи с големи букви?

Разгледайте следния код:

```js
const birthday = '18.04.1982';

const age = someCode(birthday);
```

<<<<<<< HEAD
Тук имаме константа за дата на раждане `birthday` и за годините `age` е изчислен от `birthday` с помощ от някакъв код (то не е предвиден за краткост, защото тук подробностите нямат значение).
=======
Here we have a constant `birthday` for the date, and also the `age` constant.

The `age` is calculated from `birthday` using `someCode()`, which means a function call that we didn't explain yet (we will soon!), but the details don't matter here, the point is that `age` is calculated somehow based on the `birthday`.
>>>>>>> 18b1314af4e0ead5a2b10bb4bacd24cecbb3f18e

Ще бъде ли правилно да се използва главни букви за `birthday`? За `age`? Или даже и за двете?

```js
<<<<<<< HEAD
const BIRTHDAY = '18.04.1982'; // защо е с главни букви?

const AGE = someCode(BIRTHDAY); // защо е с главни букви?
=======
const BIRTHDAY = '18.04.1982'; // make birthday uppercase?

const AGE = someCode(BIRTHDAY); // make age uppercase?
>>>>>>> 18b1314af4e0ead5a2b10bb4bacd24cecbb3f18e
```
