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

function readNumberArray() {
    const line = _inputLines[_curLine++];
    return line ? line.split(' ').map(val => Number(val)) : [];
}

function solve() {
    const n = readNumber();
    const a = readNumberArray();
    const k = readNumber();

    let answer = '';
    let sum = a.slice(0, k).reduce((sum, val) => sum + val, 0);
    answer += `${sum / k} `;
    for (let i = 0; i < n - k; i++) {
        sum -= a[i];
        sum += a[i + k];
        answer += `${sum / k} `;
    }

    console.log(answer);
}