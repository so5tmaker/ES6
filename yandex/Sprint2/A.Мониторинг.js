const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on('line', line => {
    _inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

function readNumber() {
    return Number(_inputLines[_curLine++]);
}


function readStringArray(size) {
    const commands = [];

    for (let k = 0; k < size; k++) {
        commands.push(_inputLines[_curLine++].split(' '));
    }

    return commands;
}


function solve() {
    const n = readNumber();
    const m = readNumber();
    const matrix = readStringArray(n);

    for (let i = 0; i < m; i++) {
        let current = '';
        for (let j = 0; j < n; j++) {
            current += ' ' + matrix[j][i];
        }
        console.log(current.trimStart());
    }
}