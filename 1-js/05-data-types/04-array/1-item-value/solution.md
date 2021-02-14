Резултатът е `4`:


```js run
let fruits = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits;

shoppingCart.push("Banana");

*!*
alert( fruits.length ); // 4
*/!*
```

Това е защото масивите са обекти. Така че `shoppingCart` и `fruits` са референции към един и същ масив.

