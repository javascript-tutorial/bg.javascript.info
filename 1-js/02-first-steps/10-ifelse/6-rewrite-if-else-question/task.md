Важност: 5

---

# Пренапишете 'if..else' към '?'

Пренапишете `if..else` като използвате многократно терминалния оператор `'?:'`.

За по-добре четимост се препоръчва да се раздели кода на няколко реда.

```js
let message;

if (login == 'Employee') {
  message = 'Здравей';
} else if (login == 'Director') {
  message = 'Поздрави';
} else if (login == '') {
  message = 'Без вход';
} else {
  message = '';
}
```
