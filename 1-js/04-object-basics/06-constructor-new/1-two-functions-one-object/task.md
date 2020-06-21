importance: 2

---

# Две функции – един обект

Възможно ли е да се създадат функции `A` и `B` като `new A()==new B()`?

```js no-beautify
function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
```

Ако е, тогава дайте пример за техния код.
