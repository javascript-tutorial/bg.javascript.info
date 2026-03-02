
Може да забележите следното:

```js no-beautify
<<<<<<< HEAD
function pow(x,n)  // <- няма разстояние между аргументите
{  // <- фигуративната скоба е на нов ред
  let result=1;   // <- няма разстояние преди и след знака  =
  for(let i=0;i<n;i++) {result*=x;}   // <- няма разстояние между result, *= и x
  // съдържанието на { ... } трябва да е на нов ред
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // <-- технически е възможно,
// но по-добре да е на 2 реда. Също така няма разстояние и липсва ;
if (n<0)  // <- няма разстояние вътре в скобите (n < 0) и също така трябва да има допълнителен ред над него
{   // <- фигуративната скоба е на отделен ред
  // долу - дългите редове може да се разделят на множество редове с по-мака дължина, за по-добра четимост
  alert(`Степента ${n} не се поддържа, моля въведете цяло число, по-голямо от нула`);
=======
function pow(x,n)  // <- no space between arguments
{  // <- curly brace on a separate line
  let result=1;   // <- no spaces before or after =
  for(let i=0;i<n;i++) {result*=x;}   // <- no spaces
  // the contents of { ... } should be on a new line
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') // <-- technically possible,
// but better make it 2 lines, also there's no spaces and missing ;
if (n<=0)  // <- no spaces inside (n <= 0), and should be extra line above it
{   // <- curly brace on a separate line
  // below - long lines can be split into multiple lines for improved readability
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
>>>>>>> ff804bc19351b72bc5df7766f4b9eb8249a3cb11
}
else // <- може да се напише на един ред като "} else {"
{
 alert(pow(x,n))  // няма разстояния и липсва ;
}
```

Оправеният вариант:

```js
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 0) {
  alert(`Степента ${n} не се поддържа,
    моля въведете цяло число, по-голямо от нула`);
} else {
  alert( pow(x, n) );
}
```
