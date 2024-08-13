const { heapAdd } = require('./sift-up');
const { popMax } = require('./sift-down');

function heapSort(array) {
    // Создадим пустую бинарную кучу.
    let heap = [null];

    // Вставим в неё по одному все элементы массива, сохраняя свойства кучи.
    for (let item of array) {
        heapAdd(heap, item);   // код для heapAdd можно посмотреть в прошлом уроке
    }

    // Будем извлекать из неё наиболее приоритетные элементы, удаляя их из кучи.
    let sortedArray = [];
    while (heap.length > 1) {
        let max = popMax(heap);
        sortedArray.push(max);
    }
    return sortedArray;
}

console.log(heapSort([3, 5, 1, 6, 9, 2]));