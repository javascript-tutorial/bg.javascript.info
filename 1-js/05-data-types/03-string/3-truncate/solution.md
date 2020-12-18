Максималната дължина трябва да бъде `maxlength`, така че трябва да го отрежем малко по-кратко, за да се даде място за елипсисата.

Имайте предвид, че всъщност има един Unicode символ за елипса. Това не са три точки.

```js run demo
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
```
