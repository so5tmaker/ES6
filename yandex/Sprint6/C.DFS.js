/* 
Задан неориентированный граф. Обойдите с помощью DFS все вершины, достижимые из заданной вершины s, 
и выведите их в порядке обхода, если начинать обход из s.

Формат ввода
В первой строке дано количество вершин n (1 ≤ n ≤ 105) и рёбер m (0 ≤ m ≤ 105). 
Далее в m строках описаны рёбра графа. Каждое ребро описывается номерами двух вершин u и v (1 ≤ u, v ≤ n). 
В последней строке дан номер стартовой вершины s (1 ≤ s ≤ n). В графе нет петель и кратных рёбер.

Формат вывода
Выведите вершины в порядке обхода, считая что при запуске от каждой конкретной вершины 
её соседи будут рассматриваться в порядке возрастания (то есть если вершина 2 соединена 
с 1 и 3, то сначала обход пойдёт в 1, а уже потом в 3).

Пример 1
Ввод	
4 4
3 2
4 3
1 4
1 2
3
Вывод
3 2 1 4 

Пример 2
Ввод	
2 1
1 2
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
    const startVertex = readNumbers()[0];
    const color = new Array(vertices + 1).fill('white');
    const result = [];

    function DFS(startVertex) {
        const stack = [startVertex];

        while (stack.length > 0) {
            const v = stack.pop();

            if (color[v] === 'white') {
                color[v] = 'gray';
                result.push(v);

                for (let i = outgoingEdges[v].length - 1; i >= 0; i--) {
                    const w = outgoingEdges[v][i];
                    if (color[w] === 'white') {
                        stack.push(w);
                    }
                }
            } else if (color[v] === 'gray') {
                color[v] = 'black';
            }
        }
    }

    DFS(startVertex);

    console.log(result.join(' '));
}