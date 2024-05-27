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

    for (let i = 0; i < ribs; i++) { // ориентированный граф
        const [u, v] = _inputLines[_curLine++].split(' ').map(Number);
        list[u].push(v);  // Добавляем только одно направление для ориентированного графа
    }

    for (let i = 1; i <= vertices; i++) {
        list[i].sort((a, b) => a - b);
    }

    return list;
};

function solve() {
    const [vertices, ribs] = readNumbers();
    const outgoingEdges = readEdges(vertices, ribs);
    const color = new Array(vertices + 1).fill('white');
    const entry = new Array(vertices + 1).fill(0);
    const leave = new Array(vertices + 1).fill(0);
    let time = 0;
    const result = [];

    function DFS(v) {
        const stack = [v];

        while (stack.length > 0) {
            const u = stack.pop();

            if (color[u] === 'white') {
                color[u] = 'gray';
                time += 1;
                entry[u] = time - 1;
                result.push(u);

                stack.push(u);  // Добавляем обратно, чтобы пометить как обработанную позже

                for (let i = outgoingEdges[u].length - 1; i >= 0; i--) {
                    const w = outgoingEdges[u][i];
                    if (color[w] === 'white') {
                        stack.push(w);
                    }
                }
            } else if (color[u] === 'gray') {
                color[u] = 'black';
                time += 1;
                leave[u] = time - 1;
            }
        }
    }

    for (let i = 1; i <= vertices; i++) {
        if (color[i] === 'white') {
            DFS(i);
        }
    }

    for (let i = 1; i <= vertices; i++) {
        console.log(`${entry[i]} ${leave[i]}`);
    }
}