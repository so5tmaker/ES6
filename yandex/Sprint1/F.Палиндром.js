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

// Функция парсит число из очередной строки массива _inputLines
// и сдвигает указатель на единицу вперёд.
function readNumber() {
    return Number(_inputLines[_curLine++]);
}

function readArray() {
    return _inputLines[_curLine++];
}

function solve() {
    const textLength = readNumber();
    const text = readArray();

    const [answer] = text.trim().split(' ').sort((a, b) => b.length - a.length);

    console.log(answer);
    console.log(answer.length);
}