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

const lowerCase = (letter) => letter.toLowerCase();

function solve() {
    const text = readArray();
    const re = /[A-Za-z0-9]/g;

    let answer = '', initial = '';

    for (let i = 0; i < text.length; i++) {
        initial += lowerCase(text[i]).search(re) > -1 ? lowerCase(text[i]) : '';
    }

    for (let i = text.length - 1; i >= 0; i--) {
        answer += lowerCase(text[i]).search(re) > -1 ? lowerCase(text[i]) : '';
    }

    console.log(answer === initial ? 'True' : "False");
}