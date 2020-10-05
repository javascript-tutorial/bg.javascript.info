

```js no-beautify
5 > 4 → true
"apple" > "pineapple" → false
"2" > "12" → true
undefined == null → true
undefined === null → false
null == "\n0\n" → false
null === +"\n0\n" → false
```

Някои от причините:

<<<<<<< HEAD
1. Очевидно, вярно.
2. Лексикографскo сравнение, следователно грешно.
3. Отново, лексикографскo сравнение, първият символ `"2"` е по-голям от първият символ `"1"`.
4. Стойностите `null` и `undefined` са равни само една на друга.
5. Строгото равенсвто е строго. Сравняване на стойности от различни типове води до грешно.
6. Подобно на `(4)`, `null` е равно само на `undefined`.
7. Строго сравнение на различни типове.
=======
1. Obviously, true.
2. Dictionary comparison, hence false. `"a"` is smaller than `"p"`.
3. Again, dictionary comparison, first char `"2"` is greater than the first char `"1"`.
4. Values `null` and `undefined` equal each other only.
5. Strict equality is strict. Different types from both sides lead to false.
6. Similar to `(4)`, `null` only equals `undefined`.
7. Strict equality of different types.
>>>>>>> 181cc781ab6c55fe8c43887a0c060db7f93fb0ca
