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
    const color = new Array(vertices + 1).fill(-1);
    const result = [];
    let quantity = 0;

    function DFS(v) {
        const stack = [v];

        while (stack.length > 0) {
            const u = stack.pop();

            if (color[u] === -1) {
                color[u] = quantity; // Assign the current component number
                result.push(u);

                for (let i = outgoingEdges[u].length - 1; i >= 0; i--) {
                    const w = outgoingEdges[u][i];
                    if (color[w] === -1) {
                        stack.push(w);
                    }
                }
            }
        }
    }

    for (let i = 1; i <= vertices; i++) {
        if (color[i] === -1) {
            quantity++; // Increment component count
            DFS(i);
        }
    }

    // Sort and output connected components
    result.sort((a, b) => {
        if (color[a] === color[b]) {
            return a - b; // Sort vertices within the same component
        }
        return color[a] - color[b]; // Sort components by their color
    });

    console.log(quantity);

    let currentComponent = color[result[0]];
    let currentVertices = '';

    for (const vertex of result) {
        if (color[vertex] === currentComponent) {
            currentVertices += ` ${vertex}`;
        } else {
            console.log(currentVertices.trim());
            currentComponent = color[vertex];
            currentVertices = `${vertex}`;
        }
    }

    if (currentVertices) console.log(currentVertices.trim());
}