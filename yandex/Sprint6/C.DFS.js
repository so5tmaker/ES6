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