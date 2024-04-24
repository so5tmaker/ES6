const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on("line", line => {
    _inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on("end", solve);

const readNumber = () => Number(_inputLines[_curLine++]);

function readStringArray(size) {
    const groups = {};

    for (let k = 0; k < size; k++) {
        const group = _inputLines[_curLine++];
        if (!groups[group]) groups[group] = group;
    }

    return groups;
}

function solve() {
    const length = readNumber();
    const groups = readStringArray(length);

    for (const key in groups) {
        console.log(groups[key]);
    }
}