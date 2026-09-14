```js run demo
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

<<<<<<< HEAD
let x = prompt("x?", "");
let n = prompt("n?", "");
=======
let x = +prompt("x?", '');
let n = +prompt("n?", '');
>>>>>>> 20208769e528337949e946f526534d61d38bac47

if (n < 1) {
  alert(`Power ${n} не се поддържа, използвай число над 1`);
} else {
  alert(pow(x, n));
}
```
