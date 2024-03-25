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
    const daysQuantity = readNumber();
    const days = readNumberArray();

    let randomness = daysQuantity === 1 ? 1 : 0;

    for (let i = 0; i < daysQuantity; i++) {
        let currentDay = days[i];
        let nextDay = days[i + 1];
        let previousDay = days[i - 1];

        if (previousDay === undefined && currentDay > nextDay) { randomness++; continue; }
        if (nextDay === undefined && currentDay > previousDay) { randomness++; continue; }
        if (currentDay > previousDay && currentDay > nextDay) randomness++;
    }

    console.log(randomness);
}