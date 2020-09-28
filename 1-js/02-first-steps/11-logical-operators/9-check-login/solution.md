

```js run demo
let userName = prompt("Кой е там?", '');

<<<<<<< HEAD
if (userName == 'Админ') {
=======
if (userName === 'Admin') {
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d

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
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d
  } else {
    alert( 'Грешна парола' );
  }

<<<<<<< HEAD
} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
=======
} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
>>>>>>> f489145731a45df6e369a3c063e52250f3f0061d
} else {
  alert( "Не те познавам" );
}
```

Обърнете внимание на вертикалните отстъпи вътре в `if` блоковете. Те технически не се изискват, но правят кода по-четим.
