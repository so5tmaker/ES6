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
function readArrayNumber() {
    return _inputLines[_curLine++].split(' ').map(i => Number(i));
}


function solve() {
    const [n, k] = readArrayNumber();
    const prices = readArrayNumber().sort((a, b) => a - b);

    let sum = 0, i = 0;

    while (i < n) {
        sum += prices[i];

        if (sum > k) break;

        i++;
    }

    console.log(i);
}