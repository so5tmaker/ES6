/*
Вам дан неориентированный граф. Найдите его компоненты связности.

Формат ввода
В первой строке дано количество вершин n (1≤ n ≤ 105) и рёбер m (0 ≤ m ≤ 2 ⋅ 105). 
В каждой из следующих m строк записано по ребру в виде пары вершин 1 ≤ u, v ≤ n.
Гарантируется, что в графе нет петель и кратных рёбер.

Формат вывода
Выведите все компоненты связности в следующем формате: в первой строке выведите общее количество компонент.
Затем на отдельных строках выведите вершины каждой компоненты, отсортированные по возрастанию номеров. 
Компоненты между собой упорядочивайте по номеру первой вершины.

Пример 1
Ввод	
6 3
1 2
6 5
2 3
Вывод
3
1 2 3 
4 
5 6 

Пример 2
Ввод	
2 0
Вывод
2
1 
2 

Пример 3
Ввод	
4 3
2 3
2 1
4 3
Вывод
1
1 2 3 4 
*/

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