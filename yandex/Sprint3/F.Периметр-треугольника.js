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
    return _inputLines[_curLine++].split(' ').map(i => Number(i));
}

function solve() {
    const n = readNumber();
    const sides = readArrayNumber().sort((a, b) => b - a); // убывание должно быть desc

    let perimeter = 0, sum = 0, i = 0;

    while (i < n - 1) {
        sum = sides[i + 1] + sides[i + 2];

        if (sum > sides[i]) {
            perimeter = sum + sides[i];
            break;
        };

        i++;
    }

    console.log(perimeter);
}