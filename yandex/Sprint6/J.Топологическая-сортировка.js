/*Дан ациклический ориентированный граф (так называемый DAG, directed acyclic graph). 
Найдите его топологическую сортировку, то есть выведите его вершины в таком порядке, 
что все рёбра графа идут слева направо. У графа может быть несколько подходящих перестановок вершин. 
Вам надо найти любую топологическую сортировку.
Формат ввода

В первой строке даны два числа – количество вершин n (1 ≤ n ≤ 105) и количество рёбер m (0 ≤ m ≤ 105). 
В каждой из следующих m строк описаны рёбра по одному на строке. 
Каждое ребро представлено парой вершин (from, to), 1≤ from, to ≤ n, соответственно номерами вершин начала и конца.
Формат вывода

Выведите номера вершин в требуемом порядке.
Пример 1

Ввод	
5 3
3 2
3 4
2 5
Вывод
1 3 2 4 5
Пример 2

Ввод	
6 3
6 4
4 1
5 1
Вывод
2 3 5 6 4 1
Пример 3

Ввод	
4 0
Вывод
1 2 3 4 */

const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", line => _inputLines.push(line));
_reader.on("close", solve);

const readNumbers = () => _inputLines[_curLine++].split(' ').map(Number);

const readEdges = (vertices, ribs) => {
    const list = Array.from({ length: vertices + 1 }, () => []);

    for (let i = 0; i < ribs; i++) {
        const [u, v] = _inputLines[_curLine++].split(' ').map(Number);
        list[u].push(v); // Добавляем только одно направление для ориентированного графа
    }

    return list;
};

function solve() {
    const [vertices, ribs] = readNumbers();
    const outgoingEdges = readEdges(vertices, ribs);
    const color = new Array(vertices + 1).fill('white');
    let order = [];

    // Функция для выполнения топологической сортировки для одной вершины
    function topSort(v) {
        color[v] = "gray";
        for (let w of outgoingEdges[v]) {
            if (color[w] === "white") {
                topSort(w);
            }
        }
        color[v] = "black";
        order.push(v); // Добавляем обработанную вершину в начало стека.
    }

    for (let i = 1; i <= vertices; i++) { // Начинаем с 1, так как вершины нумеруются с 1 до n
        if (color[i] === "white") {
            topSort(i);
        }
    }

    // Выводим порядок обхода
    console.log(order.join(' '));
}
/*
Входной файл
5 3
3 2
3 4
2 5
Вывод программы
1 5 2 4 3
Правильный ответ
1 3 2 4 5 */