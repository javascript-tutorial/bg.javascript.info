importance: 4

---

# Лош стил

Какво не е наред с форматирането на долния код?

```js no-beautify
function pow(x,n)
{
  let result=1;
  for(let i=0;i<n;i++) {result*=x;}
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'')
if (n<=0)
{
  alert(`Степен ${n} не се поддържа, моля въведете цяло число, по-голямо от нула`);
}
else
{
  alert(pow(x,n))
}
```

Поправете го.
