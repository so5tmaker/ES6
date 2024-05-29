/*
Задан неориентированный граф. Обойдите поиском в ширину все вершины, достижимые из заданной вершины s, 
и выведите их в порядке обхода, если начинать обход из s.

Формат ввода
В первой строке дано количество вершин n (1 ≤ n ≤ 105) и рёбер m (0 ≤ m ≤ 105).
Далее в m строках описаны рёбра графа. Каждое ребро описывается номерами 
двух вершин u и v (1 ≤ u, v ≤ n). В последней строке дан номер стартовой вершины s (1 ≤ s ≤ n).
Гарантируется, что в графе нет петель и кратных рёбер.

Формат вывода
Выведите вершины в порядке обхода, считая что при запуске от каждой конкретной вершины её соседи 
будут рассматриваться в порядке возрастания (то есть если вершина 2 соединена с 1 и 3, то сначала обход пойдёт в 1, а уже потом в 3).

Пример 1
Ввод	
4 4
1 2
2 3
3 4
1 4
3
Вывод
3 2 4 1 

Пример 2
Ввод	
2 1
2 1
1
Вывод
1 2 

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

const readStringArray = (vertices, ribs) => {
    const list = Array.from({ length: vertices + 1 }, () => []);

    for (let i = 0; i < ribs; i++) {
        const [u, v] = _inputLines[_curLine++].split(' ').map(Number);
        list[u].push(v);
        list[v].push(u);
    }

    for (let i = 1; i <= vertices; i++) {
        list[i].sort((a, b) => a - b);
    }

    return list;
};

function solve() {
    const [vertices, ribs] = readNumbers();
    const outgoingEdges = readStringArray(vertices, ribs);
    const s = readNumbers()[0];
    const color = Array.from({ length: vertices + 1 }, () => 'white');
    const previous = Array.from({ length: vertices + 1 }, () => null);
    const distance = Array.from({ length: vertices + 1 }, () => null);

    let result = [];

    function bfs(s) {
        let planned = [];
        planned.push(s);
        color[s] = 'gray';
        distance[s] = 0;

        while (planned.length > 0) {
            let u = planned.shift();  // Возьмём вершину из очереди.

            result.push(u);

            for (let v of outgoingEdges[u]) {
                if (color[v] === 'white') {
                    distance[v] = distance[u] + 1;
                    previous[v] = u;
                    color[v] = 'gray';
                    planned.push(v);  // Запланируем посещение вершины.
                }
            }
            color[u] = 'black';  // Теперь вершина считается обработанной.
        }
        console.log(result.join(' '));
    }

    bfs(s);
}