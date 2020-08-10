
Може да забележите следното:

```js no-beautify
function pow(x,n)  // <- няма разстояние между аргументите
{  // <- фигуративната скоба е на нов ред
  let result=1;   // <- няма разстояние преди и след знака  =
  for(let i=0;i<n;i++) {result*=x;}   // <- няма разстояние между result, *= и x
  // съдържанието на { ... } трябва да е на нов ред
  return result;
}

<<<<<<< HEAD
let x=prompt("x?",''), n=prompt("n?",'') // <-- технически е възможно,
// но по-добре да е на 2 реда. Също така няма разстояние и липсва ;
if (n<0)  // <- няма разстояние вътре в скобите (n < 0) и също така трябва да има допълнителен ред над него
{   // <- фигуративната скоба е на отделен ред
  // долу - дългите редове може да се разделят на множество редове с по-мака дължина, за по-добра четимост
  alert(`Степента ${n} не се поддържа, моля въведете цяло число, по-голямо от нула`);
=======
let x=prompt("x?",''), n=prompt("n?",'') // <-- technically possible,
// but better make it 2 lines, also there's no spaces and missing ;
if (n<=0)  // <- no spaces inside (n <= 0), and should be extra line above it
{   // <- figure bracket on a separate line
  // below - long lines can be split into multiple lines for improved readability
  alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
>>>>>>> fbf443e414097e5a3a41dd1273ef9a4a3230e72c
}
else // <- може да се напише на един ред като "} else {"
{
 ====ow(x,n))  // няма разстояния и ;
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

<<<<<<< HEAD
if (n < 0) {
  alert(`Степен ${n} не се поддържа,
    моля въведете цяло число, по-голямо от нула`);
=======
if (n <= 0) {
  alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
>>>>>>> fbf443e414097e5a3a41dd1273ef9a4a3230e72c
} else {
  alert( pow(x, n) );
}
```
