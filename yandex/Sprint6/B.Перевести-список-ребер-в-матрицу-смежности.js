const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on("line", line => _inputLines.push(line));
_reader.on("close", solve);

const readNumbers = () => _inputLines[_curLine++].split(' ').map(Number);

function solve() {
    const [vertices, ribs] = readNumbers();
    const adjacencyMatrix = Array.from({ length: vertices }, () => Array(vertices).fill(0));

    // Заполняем матрицу смежности на основе входных рёбер
    for (let i = 1; i <= ribs; i++) {
        const [u, v] = readNumbers();
        adjacencyMatrix[u - 1][v - 1] = 1; // Преобразуем индексацию к нулевой
    }

    // Выводим матрицу смежности
    adjacencyMatrix.forEach(row => {
        console.log(row.join(' '));
    });
}