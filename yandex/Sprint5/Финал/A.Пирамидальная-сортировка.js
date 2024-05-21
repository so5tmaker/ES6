/*
https://contest.yandex.ru/contest/24810/run-report/114397095/

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

class Participant { // инкапсулирует данные участников и метод сравнения
    constructor(username, tasks, penalty) {
        this.username = username;
        this.tasks = Number(tasks);
        this.penalty = Number(penalty);
    }

    static compare(a, b) { // используется для сравнения участников на основе задач, штрафов и имен
        if (a.tasks > b.tasks) return true;

        if (a.tasks === b.tasks) {
            if (a.penalty < b.penalty) return true;

            if (a.penalty === b.penalty) return a.username < b.username;
        }

        return false;
    }
}

const readStringArray = (size) => {
    const info = [];

    for (let k = 0; k < size; k++) info.push(_inputLines[_curLine++]);

    return info;
}

// Функция для просеивания вниз в бинарной куче
const siftDown = (heap, index) => {
    const left = 2 * index;
    const right = 2 * index + 1;

    // Нет дочерних узлов
    if (left >= heap.length) return;

    // right < heap.length проверяет, что есть оба дочерних узла heap[right] > heap[left]
    const indexLargest = (right < heap.length && Participant.compare(heap[right], heap[left])) ? right : left;

    if (Participant.compare(heap[indexLargest], heap[index])) {
        [heap[index], heap[indexLargest]] = [heap[indexLargest], heap[index]];
        siftDown(heap, indexLargest);
    }
}

// Функция для извлечения максимального элемента из кучи
const popMax = (heap) => {
    const result = heap[1];
    heap[1] = heap[heap.length - 1];
    heap.pop();
    siftDown(heap, 1);

    return result;
}

// Функция для просеивания вверх в бинарной куче
const siftUp = (heap, index) => {
    if (index === 1) return;

    const parentIndex = Math.floor(index / 2);

    if (Participant.compare(heap[index], heap[parentIndex])) {
        [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
        siftUp(heap, parentIndex);
    }
}

// Функция для добавления элемента в кучу
const heapAdd = (heap, key) => {
    heap.push(key);
    siftUp(heap, heap.length - 1);
}

// Функция для сортировки массива с использованием кучи
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

// Основная функция для чтения входных данных, сортировки участников и вывода результата
function solve() {
    const length = readNumber();
    const info = readStringArray(length);

    const participants = info.map(line => {
        const [username, tasks, penalty] = line.split(' ');

        return new Participant(username, tasks, penalty);
    });

    const sortedArray = heapSort(participants);

    for (const participant of sortedArray) {
        console.log(participant.username);
    }
}