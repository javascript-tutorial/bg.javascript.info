

```js run demo
let userName = prompt("Кой е там?", '');

<<<<<<< HEAD
if (userName == 'Админ') {
=======
if (userName === 'Admin') {
>>>>>>> 181cc781ab6c55fe8c43887a0c060db7f93fb0ca

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
>>>>>>> 181cc781ab6c55fe8c43887a0c060db7f93fb0ca
  } else {
    alert( 'Грешна парола' );
  }

<<<<<<< HEAD
} else if (userName == '' || userName == null) {
  alert( 'Отменено' );
=======
} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
>>>>>>> 181cc781ab6c55fe8c43887a0c060db7f93fb0ca
} else {
  alert( "Не те познавам" );
}
```

Обърнете внимание на вертикалните отстъпи вътре в `if` блоковете. Те технически не се изискват, но правят кода по-четим.
