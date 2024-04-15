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

// Функция парсит число из очередной строки массива _inputLines
// и сдвигает указатель на единицу вперёд.
function readArrayNumber() {
    return _inputLines[_curLine++].split(' ');
}

function findDay(daysNumber, savings, cost) {
    let left = 0;
    let right = daysNumber - 1;
    let day = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (Number(savings[mid]) >= cost) {
            day = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return day === -1 ? day : day + 1;
}

function solve() {
    const daysNumber = readNumber();
    const savings = readArrayNumber();
    const cost = readNumber();

    const firstDay = findDay(daysNumber, savings, cost);
    const secondDay = findDay(daysNumber, savings, cost * 2);

    console.log(`${firstDay} ${secondDay}`);
}