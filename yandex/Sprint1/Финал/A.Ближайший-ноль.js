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

function readNumberArray() {
    const line = _inputLines[_curLine++];
    return line ? line.split(' ').map(val => Number(val)) : [];
}

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

const minPosition = (current, empties) => {
    if (empties.length === 1) return Math.abs(empties[0] - current);

    let minPosition = 0;
    for (i = 0; i < empties.length - 1; i++) {
        minPosition = Math.min(Math.abs(empties[i] - current), Math.abs(empties[i + 1] - current))
    }

    return minPosition;
}

const getString = (i, str) => i === 0 ? `${str}` : ` ${str}`;

function solve() {
    const length = readNumber();
    const houses = readNumberArray();
    const empties = [];

    let answer = '';

    for (i = 0; i < length; i++)
        if (houses[i] === 0) empties.push(i);

    for (let i = 0; i < length; i++) {
        if (houses[i] === 0) { answer += getString(i, '0'); continue; }

        answer += getString(i, minPosition(i, empties));
    }

    console.log(answer);
}