Моля забележете малкия, но важен детаил на решението. Ние не конвертираме `value` към число веднага след `prompt`, защото след `value = +value` wняма да можем да различим празен стринг(знак стоп) от нула(валидно число). Вместо това, го правим по-късно.


```js run demo
function sumInput() {
 
  let numbers = [];

  while (true) {

    let value = prompt("A number please?", 0);

    // should we cancel?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert( sumInput() ); 
```

