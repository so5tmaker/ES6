// https://contest.yandex.ru/contest/22450/run-report/110654240/

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

function solve() {
    const length = readNumber();
    const houses = readNumberArray();
    const distances = new Array(length).fill(Infinity);

    for (let i = 0, lastEmpty = -1; i < length; i++) {
        if (houses[i] === 0) lastEmpty = i;

        if (lastEmpty !== -1)
            distances[i] = Math.min(distances[i], i - lastEmpty);
    }

    for (let i = length - 1, lastEmpty = -1; i >= 0; i--) {
        if (houses[i] === 0) lastEmpty = i;

        if (lastEmpty !== -1)
            distances[i] = Math.min(distances[i], lastEmpty - i);
    }

    console.log(distances.join(' '));
}