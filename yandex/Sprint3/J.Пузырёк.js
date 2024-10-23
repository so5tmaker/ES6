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
    const length = readNumber();
    const numbers = readArrayNumber();
    const result = [];

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (numbers[j] > numbers[j + 1]) {
                // Swap the found minimum element with the first element
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
            }
        }

        const join = numbers.join(' ');

        if (!result.includes(join)) {
            result.push(join);
            console.log(join);
        };
    }
}