/*
https://contest.yandex.ru/contest/22781/run-report/111734002/

-- ПРИНЦИП РАБОТЫ --


-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --


-- ВРЕМЕННАЯ СЛОЖНОСТЬ --


-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --


Поэтому и моя очередь будет потреблять O(n) памяти.
*/

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

function readNumberArray(size) {
    const commands = [];

    for (let k = 0; k < size; k++) {
        commands.push(_inputLines[_curLine++].split(' ').map(i => Number(i)));
    }

    return commands;
}

function brokenSearch(arr, k) {
    // Your code
    // “ヽ(´▽｀)ノ”
}

function solve() {
    const length = readNumber();
    const item = readNumber();
    const numbers = readNumberArray();

    const found = brokenSearch(numbers, item);

    if (found > -1) {
        console.log(found, numbers[found]);
    } else { console.error("WA"); }
}