

```js run demo
let userName = prompt("Кой е там?", '');

<<<<<<< HEAD
if (userName == 'Админ') {
=======
if (userName === 'Admin') {
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058

  let pass = prompt('Парола?', '');

<<<<<<< HEAD
  if (pass == 'Майсторът') {
    alert( 'Добре дошли!' );
  } else if (pass == '' || pass == null) {
    alert( 'Отменено' );
=======
  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058
  } else {
    alert( 'Грешна парола' );
  }

<<<<<<< HEAD
} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
=======
} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
>>>>>>> 99e59ba611ab11319ef9d0d66734b0bea2c3f058
} else {
  alert( "Не те познавам" );
}
```

Обърнете внимание на вертикалните отстъпи вътре в `if` блоковете. Те технически не се изискват, но правят кода по-четим.
