function merge_sort(arr, left, right) {
    if (left < right - 1) {
        var mid = Math.floor((left + right) / 2);
        merge_sort(arr, left, mid);
        merge_sort(arr, mid, right);
        var mergedArray = merge(arr, left, mid, right);
        for (var i = left; i < right; i++) {
            arr[i] = mergedArray[i - left];
        }
    }
}

function merge(arr, left, mid, right) {
    var leftArray = arr.slice(left, mid);
    var rightArray = arr.slice(mid, right);
    var result = [];

    var i = 0, j = 0;
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            result.push(leftArray[i++]);
        } else {
            result.push(rightArray[j++]);
        }
    }

    while (i < leftArray.length) {
        result.push(leftArray[i++]);
    }

    while (j < rightArray.length) {
        result.push(rightArray[j++]);
    }

    return result;
}

function test() {
    var a = [18, -19, 15, -8, 14, 6, -6, 8, 17];
    const b = merge(a, 0, 4, a.length);
    console.log(b);
    var expected = [-19, -8, -6, 6, 8, 14, 15, 17, 18];

    var c = [18, -19, 15, -8, 14, 6, -6, 8, 17];
    merge_sort(c, 0, c.length);
    console.log('merge_sort');
    console.log(c);
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

