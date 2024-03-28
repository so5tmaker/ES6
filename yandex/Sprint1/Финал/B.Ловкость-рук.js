// https://contest.yandex.ru/contest/22450/run-report/110729484/

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

function readStringArray(size) {
    const symbols = [];

    for (let k = 0; k < size; k++) {
        const chars = _inputLines[_curLine++];

        for (let l = 0; l < size; l++) {
            if (chars[l] === '.') continue;

            symbols.push(Number(chars[l]));
        }
    }

    return symbols;
}

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

function solve() {
    const size = 4;
    const quantity = readNumber();
    const symbols = readStringArray(size);

    let score = 0, length = 9, digitsMap = [];

    for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];

        if (digitsMap[symbol]) digitsMap[symbol]++;
        else digitsMap[symbol] = 1;
    }

    for (let i = 1; i <= length; i++) {
        if (digitsMap[i] && digitsMap[i] <= quantity * 2) score++;
    }

    console.log(score);
}