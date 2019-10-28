
Вгради израза посредством примове и `${...}` в стринга.

```js run
let name = "Ilya";

// изразът е числото 1
alert( `hello ${1}` ); // hello 1

// изразът е стринг "name"
alert( `hello ${"name"}` ); // hello name

// изразът е променлива, вгради я
alert( `hello ${name}` ); // hello Ilya
```
