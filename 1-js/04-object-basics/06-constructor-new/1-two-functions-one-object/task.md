importance: 2

---

# Две функции – един обект

<<<<<<< HEAD
Възможно ли е да се създадат функции `A` и `B` като `new A()==new B()`?
=======
Is it possible to create functions `A` and `B` so that `new A() == new B()`?
>>>>>>> ef8d576821ff28c69bfb7410dc79fd216b0a315b

```js no-beautify
function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
```

Ако е, тогава дайте пример за техния код.
