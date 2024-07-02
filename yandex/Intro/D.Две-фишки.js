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

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (a[i] + a[j] === k) {
                console.log(`${a[i]} ${a[j]}`);
                return;
            };
        }
    }

    console.log('None');
}