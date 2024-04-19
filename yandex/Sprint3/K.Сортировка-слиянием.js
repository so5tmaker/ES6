
function merge(arr, left, mid, right) {
    const leftArr = arr.slice(left, mid);
    const rightArr = arr.slice(mid, right);

    let i = 0;
    let j = 0;
    let k = left;

    const compare = (left, right) =>
        left < 0 && right < 0 ? Math.abs(left) >= Math.abs(right) : left <= right;


    // Сливаем два массива, сравнивая элементы
    while (i < leftArr.length && j < rightArr.length) {
        if (compare(leftArr[i], rightArr[j])) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    // Дописываем оставшиеся элементы из левого и правого массивов
    while (i < leftArr.length) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }
    while (j < rightArr.length) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }

    return arr;
}


function merge_sort(array, left, right) {
    if (right - left > 1) {
        const mid = Math.floor((right + left) / 2);
        merge_sort(array, left, mid);
        merge_sort(array, mid, right);
        merge(array, left, mid, right);
    }
}
// вывод merge_sort: -16 -16 -76 -85 17 35 49 59 65 66 67 70 73 85
// правильный ответ: -85 -76 -16 -16 17 35 49 59 65 66 67 70 73 85
// неправильно сортирует отрицательные числа

function test() {
    var a = '73 -85 -76 59 17 65'.split(' ');
    var b = merge(a, 0, 3, 6);
    console.log(b.join(' '));
    var expected = [1, 2, 4, 9, 10, 11];

    var c = '49 67 66 73 -85 -76 59 17 65 85 -16 -16 35 70'.split(' ');
    merge_sort(c, 0, c.length);
    console.log(c.join(' '));
    expected = [0, 3, 4, 5, 1, 2];
}

test();

// Гоше дали задание написать красивую сортировку слиянием.Поэтому Гоше обязательно надо реализовать отдельно функцию merge и функцию merge_sort.
// Функция merge принимает один массив и три целочисленных индекса: left, mid, и right.Функция сливает две отсортированные части одного и того же массива в один отсортированный массив.Первая часть массива определяется полуинтервалом
// [ left , mid ) массива array, а вторая часть – полуинтервалом [ mid , right )
//  того же массива array.Функция возвращает сливаемый массив.
// Функция merge_sort принимает некоторый подмассив, который нужно отсортировать.Подмассив задаётся полуинтервалом — его началом и концом.Функция должна отсортировать передаваемый в неё подмассив, она ничего не возвращает.
// Функция merge_sort разбивает полуинтервал на две половинки и рекурсивно вызывает сортировку отдельно для каждой.Затем два отсортированных массива сливаются в один с помощью merge.
//     Заметьте, что в функции передаются именно полуинтервалы [ b e g i n , e n d )
// , то есть правый конец не включается.Например, если вызвать merge_sort(arr, 0, 4), где
// arr = [4, 5, 3, 0, 1, 2], то будут отсортированы только первые четыре элемента, изменённый массив будет выглядеть как
// arr = [0, 3, 4, 5, 1, 2].
// Реализуйте эти две функции.
