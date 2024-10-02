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
function readArray() {
    return _inputLines[_curLine++].split(' ');
}

const getString = (str, color) => (str === '' ? '' : ' ') + color;
const getSpace = (str) => (str === '' ? '' : str + ' ');

function solve() {
    const n = readNumber();
    const colors = readArray();

    let string0 = '', string1 = '', string2 = '';

    for (let i = 0; i < n; i++) {
        const color = colors[i];

        if (color === '0') string0 += getString(string0, color);
        if (color === '1') string1 += getString(string1, color);
        if (color === '2') string2 += getString(string2, color);
    }

    console.log(`${getSpace(string0)}${getSpace(string1)}${getSpace(string2)}`);
}