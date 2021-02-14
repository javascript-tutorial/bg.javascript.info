importance: 5

---

# Извикване на функция в контекста на масив

Какъв е резултата? Защо?

```js
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?
```

