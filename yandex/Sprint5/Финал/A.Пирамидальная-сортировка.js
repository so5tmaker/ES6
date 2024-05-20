/*
https://contest.yandex.ru/contest/24810/run-report/114197029/

-- ПРИНЦИП РАБОТЫ --
Я реализовал сортировку по таблице результатов с помощью пирамидальной сортировки с кучей (англ. Heapsort).

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Использование пирамидальной сортировки с кучей позволяет быть увереным, что алгоритм всегда будет работать за O(n log n).

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Сортировка с помощью пирамидальной сортировки с кучей всегда выполняется за время O(n log n).

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Мы используем дополнительную память в Heapsort под массив из n элементов, то есть потребуется O(n) дополнительной памяти,
а значит пространственная сложность составляет O(n).
*/

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const END = 'end';
const LINE = 'line';

const _inputLines = [];
let _curLine = 0;

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on(LINE, line => _inputLines.push(line));

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on(END, solve);

const readNumber = () => Number(_inputLines[_curLine++]);

const readStringArray = (size) => {
    const info = [];

    for (let k = 0; k < size; k++) info.push(_inputLines[_curLine++].split(" "));

    return info;
}

const compareParticipants = (participant, info, index) => {
    const username = info[index][0];
    const task = Number(info[index][1]);
    const penalty = Number(info[index][2]);

    const currentUsername = participant[0];
    const currentTask = Number(participant[1]);
    const currentPenalty = Number(participant[2]);

    return (currentTask > task ||
        (currentTask === task && currentPenalty < penalty) ||
        (currentTask === task && currentPenalty === penalty && currentUsername < username));
}

const siftDown = (heap, index) => {
    const left = 2 * index;
    const right = 2 * index + 1;

    // Нет дочерних узлов
    if (left >= heap.length) return;

    // right < heap.length проверяет, что есть оба дочерних узла heap[right] > heap[left]
    const indexLargest = (right < heap.length && compareParticipants(heap[right], heap, left)) ? right : left;

    if (compareParticipants(heap[indexLargest], heap, index)) {
        [heap[index], heap[indexLargest]] = [heap[indexLargest], heap[index]];
        siftDown(heap, indexLargest);
    }
}

const popMax = (heap) => {
    const result = heap[1];
    heap[1] = heap[heap.length - 1];
    heap.pop();
    siftDown(heap, 1);

    return result;
}

const siftUp = (heap, index) => {
    if (index === 1) return;

    const parentIndex = Math.floor(index / 2);
    if (compareParticipants(heap[index], heap, parentIndex)) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        siftUp(heap, parentIndex);
    }
}

const heapAdd = (heap, key) => {
    heap.push(key);
    siftUp(heap, heap.length - 1);
}

const heapSort = (array) => {
    // Создадим пустую бинарную кучу.
    let heap = [null];

    // Вставим в неё по одному все элементы массива, сохраняя свойства кучи.
    for (let item of array) heapAdd(heap, item);

    // Будем извлекать из неё наиболее приоритетные элементы, удаляя их из кучи.
    let sortedArray = [];
    while (heap.length > 1) {
        let max = popMax(heap);
        sortedArray.push(max);
    }

    return sortedArray;
}

const solve = () => {
    const length = readNumber();
    const info = readStringArray(length);

    const sortedArray = heapSort(info);

    for (const row of sortedArray) console.log(row[0]);
}