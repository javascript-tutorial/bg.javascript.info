Да, това е възможно.

Ако функция върне обект, тогава `new` го връща вместо `this`.

Така те могат, например, да върнат същия външно определен обект `obj`:

```js run no-beautify
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true
```
