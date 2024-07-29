let films_wish_list = ["Джон Уик 3", "Аватар 2", "Форсаж 9", "Индиана Джонс 5", "Бэтмен"];

films_wish_list.push('Чёрная Вдова');

let list_of_tasks = ["Полить цветы", "Приготовить завтрак", "Пойти на работу", "Сходить в магазин", "Позвонить бабушке"];

/*
Почему для добавления элемента в начало массива требуется больше операций?
Представьте, что Рита записывает дела на листе бумаги. В конец легко добавить новый пункт, а вот в начале места уже нет. 
Значит, чтобы создать перечень с новым первым пунктом, придётся всё переписывать. 
Так же и компьютеру нужно переместить каждый из уже существующих элементов на одну ячейку вправо. 
Поэтому сложность вставки элемента в начало массива составляет O(n), где n — количество элементов в массиве.

А что если нужно вставить элемент в произвольное место массива? 
Конечно, вставка в начало и в конец — частные случаи этой задачи. 
Вставка элемента в начало — худший случай. Сложность этой операции O(n).
Добавление элемента в конец — лучший случай. И его сложность O(1).
 */