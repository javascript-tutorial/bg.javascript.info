Използвайки оператора `'?'`:

```js
function checkAge(age) {
  return age > 18 ? true : confirm("Родителите позволиха ли ти?");
}
```

Използвайки `||` (най-краткия вариант):

```js
function checkAge(age) {
  return age > 18 || confirm("Родителите позволиха ли ти?");
}
```

<<<<<<< HEAD
Забележи, че скобите около `age > 18` не са задължителни тук. Съществуват за по-добра четимост.
=======
Note that the parentheses around `age > 18` are not required here. They exist for better readability.
>>>>>>> 7b76185892aa9798c3f058256aed44a9fb413cc3
