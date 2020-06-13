Задачата демонстрира как постфиксните / префиксните форми могат да доведат до различни резултати, когато се използват в сравнения.

1. **От 1 до 4**

    ```js run
    let i = 0;
    while (++i < 5) alert( i );
    ```

    Първата стойност е `i = 1`, защото `++i` първо увеличава `i` и след това връща новата стойност.Така че първото сравнение е `1 < 5` и така `alert` показва `1`.

    Следват `2, 3, 4…` -- стойностите се показват една след друга. Сравнението винаги използва увеличената стойност, защото `++` е преди променливата.

    Накрая, `i = 4` се увеличава до `5`, сравнението `while(5 < 5)` проваля, и цикълът спира. Така `5` не се показва.
2. **От 1 до 5**

    ```js run
    let i = 0;
    while (i++ < 5) alert( i );
    ```

    Първата стойност отново е `i = 1`. Формата на постфикса при `i++` увеличава `i` и връща *старата* стойност, така че сравнението `i++ < 5` ще използва `i = 0` (противно на `++i < 5`).

    Но извикването на  `alert` отделно. Това е още един израз, което се изпълнява след увеличаването и сравнението. Така то получава `i = 1`.

    Следват `2, 3, 4…`

    Да спрем на `i = 4`. Формата на префикса при `++i` би го увеличил и използвал `5` в сравнението. Но тук имаме постфикс формата `i++`. Така `i` се увеличава и става `5`, но връща старата стойност. Следователно сравнението всъщност е `while(4 < 5)` -- вярно, и контролът продължава към `alert`.

    Стойността `i = 5` е последен, защото на следващата стъпка на `while(5 < 5)` е невярно.