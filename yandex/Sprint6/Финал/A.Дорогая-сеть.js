/*
https://contest.yandex.ru/contest/25070/run-report/114766649/

-- ПРИНЦИП РАБОТЫ --
Я реализовал алгоритм Прима на очереди с приоритетами для поиска максимального остовного дерева с использованием кучи.
В данном случае куча используется для хранения рёбер графа с приоритетом на основе их весов.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Использование алгоритма Прима на очереди с приоритетами является основанием того, что алгоритм корректно найдет максимальное остовное дерево, 
поскольку он последовательно добавляет наибольшие рёбра, поддерживая связность графа.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Поиск максимального остовного дерева с помощью алгоритма Прима на очереди с приоритетами выполняется 
за время O(E log V), где V — количество вершин, а E — количество рёбер.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Для реализации алгоритма используется дополнительная память для хранения кучи и других вспомогательных структур данных. 
Это требует O(V + E) дополнительной памяти, где V — количество вершин, а E — количество рёбер, 
что означает, что пространственная сложность составляет O(V + E).
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

function readNumbers() {
    return _inputLines[_curLine++].split(' ').map(Number);
}

const readStringArray = (vertices, ribs) => {
    const graph = Array.from({ length: vertices + 1 }, () => []);

    for (let i = 0; i < ribs; i++) {
        const [u, v, w] = readNumbers();
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    return graph;
};

// Вспомогательные функции для работы с кучей
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Вставка нового значения в кучу
    insert(value) {
        this.heap.push(value); // Добавляем значение в конец массива
        this.bubbleUp(); // Восстанавливаем свойства кучи путём перемещения вверх
    }

    // Извлечение максимального значения из кучи
    extractMax() {
        if (this.heap.length === 1) return this.heap.pop(); // Если в куче один элемент, просто удаляем и возвращаем его

        const max = this.heap[0]; // Максимальное значение находится в корне (первый элемент массива)

        this.heap[0] = this.heap.pop(); // Перемещаем последний элемент в корень
        this.bubbleDown(); // Восстанавливаем свойства кучи путём перемещения вниз

        return max; // Возвращаем извлечённое максимальное значение
    }

    // Перемещение элемента вверх по куче для восстановления её свойств
    bubbleUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);

            if (this.heap[index][0] <= this.heap[parentIndex][0]) break; // Если элемент не больше родителя, остановить

            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]; // Меняем местами с родителем
            index = parentIndex; // Переходим к следующему уровню вверх
        }
    }

    // Перемещение элемента вниз по куче для восстановления её свойств
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (true) {
            let leftIndex = 2 * index + 1; // Индекс левого дочернего элемента
            let rightIndex = 2 * index + 2; // Индекс правого дочернего элемента
            let largest = index;

            // Если левый дочерний элемент больше текущего, он становится кандидатом на обмен
            if (leftIndex < length && this.heap[leftIndex][0] > this.heap[largest][0]) largest = leftIndex;

            // Если правый дочерний элемент больше текущего, он становится кандидатом на обмен
            if (rightIndex < length && this.heap[rightIndex][0] > this.heap[largest][0]) largest = rightIndex;

            if (largest === index) break; // Если текущий элемент на своём месте, завершить

            // Меняем местами с наибольшим дочерним элементом
            [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
            index = largest; // Переходим к следующему уровню вниз
        }
    }

    // Возвращает размер кучи
    size() {
        return this.heap.length;
    }
}

function solve() {
    const [vertices, ribs] = readNumbers();
    const graph = readStringArray(vertices, ribs);

    if (vertices === 1) { console.log(0); return; }

    // Применение алгоритма Прима для поиска максимального остовного дерева
    const maxHeap = new MaxHeap();
    const added = new Set();
    const notAdded = new Set(Array.from({ length: vertices }, (_, i) => i + 1));
    let maxSpanningTreeWeight = 0;

    function addVertex(v) {
        added.add(v);
        notAdded.delete(v);

        for (const [to, weight] of graph[v]) {
            if (notAdded.has(to)) {
                maxHeap.insert([weight, to]);
            }
        }
    }

    // Инициализация с произвольной вершины (например, 1)
    addVertex(1);

    while (notAdded.size > 0 && maxHeap.size() > 0) {
        const [weight, to] = maxHeap.extractMax(); // extract maximum
        if (!added.has(to)) {
            maxSpanningTreeWeight += weight;
            addVertex(to);
        }
    }

    if (notAdded.size > 0) console.log("Oops! I did it again");
    else console.log(maxSpanningTreeWeight);
}