
```js run
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Съгласен ли сте?",
*!*
  () => alert("Вие се съгласихте."),
  () => alert("Вие прекратихте изпълнението.")
*/!*
);
```

Изглежда кратко и подредено, нали?
