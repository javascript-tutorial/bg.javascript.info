# Покажи решението

Можем да пресметнем всички възможни подсуми.

Най-лесният начин е да вземем всеки елемент и да пресметнем сумите на всички подмасиви, които започват от него.

Например за `[-1, 2, 3, -9, 11]`:

```js no-beautify
// Започвайки от -1:
-1
-1 + 2
-1 + 2 + 3
-1 + 2 + 3 + (-9)
-1 + 2 + 3 + (-9) + 11

// Започвайки от 2:
2
2 + 3
2 + 3 + (-9)
2 + 3 + (-9) + 11

// Започвайки от 3:
3
3 + (-9)
3 + (-9) + 11

// Започвайки от -9
-9
-9 + 11

// Започвайки от 11
11
```

Кодът всъщност е 2  вложени цикъла. Външният итерира през елементите на масива, а вътрешният пресмята субсумите, започвайки от текущия елемент.

```js run
function getMaxSubSum(arr) {
  let maxSum = 0; // Ако не вземе елементи, ще върне 0

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
```

Решението е сложно от гледна точка на времето [O(n<sup>2</sup>)](https://en.wikipedia.org/wiki/Big_O_notation). С други думи, ако увеличим размера на масива 2 пъти, алгоритъмът ще работи 4 пъти по-дълго.

<<<<<<< HEAD
При големи масиви (1000, 10000 or more items) такива алгоритми могат да доведат до сериозно забавяне.
=======
For big arrays (1000, 10000 or more items) such algorithms can lead to serious sluggishness.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8

# ПО-бързо решение

Нека обходим масива и пазим моментната частичка сума на елементите в променливата `s`. Ако `s` стане отрицателно число тогава `s=0`. Максимумът от всички такива `s` щв бъде отговорът.

Ако описанието е твърде неясно, моля погледнете кода. Той е достатъчно кратък:

```js run demo
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // за всеки елемент на масива
    partialSum += item; // добавяме го към partialSum
    maxSum = Math.max(maxSum, partialSum); // запомняме максимума
    if (partialSum < 0) partialSum = 0; // нула ако е отрицателно
  }

  return maxSum;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0
```

Алгоритъмът се нуждае точно от 1 обхождане на масива, така че сложността е O(n).

<<<<<<< HEAD
Може да намерите повече информация за алгоритъма тук: [Maximum subarray problem](http://en.wikipedia.org/wiki/Maximum_subarray_problem). Ако все още не е ясно какво се случва, тогава моля проследете алгоритъма с горните примери и вижте как работи. Това е по-добре от всякакви описания. 
=======
You can find more detailed information about the algorithm here: [Maximum subarray problem](http://en.wikipedia.org/wiki/Maximum_subarray_problem). If it's still not obvious why that works, then please trace the algorithm on the examples above, see how it works, that's better than any words.
>>>>>>> 5dff42ba283bce883428c383c080fa9392b71df8
