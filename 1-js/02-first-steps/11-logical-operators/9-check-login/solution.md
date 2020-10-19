

```js run demo
let userName = prompt("Кой е там?", '');

<<<<<<< HEAD
if (userName == 'Админ') {
=======
if (userName === 'Admin') {
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d

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
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d
  } else {
    alert( 'Грешна парола' );
  }

<<<<<<< HEAD
} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
=======
} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
>>>>>>> d6e88647b42992f204f57401160ebae92b358c0d
} else {
  alert( "Не те познавам" );
}
```

Обърнете внимание на вертикалните отстъпи вътре в `if` блоковете. Те технически не се изискват, но правят кода по-четим.
