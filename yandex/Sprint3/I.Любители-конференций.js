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
    const ids = readArrayNumber().sort((a, b) => a - b); // возрастание, должно быть asc
    const k = readNumber();

    const universities = {};

    for (let i = 0; i < n; i++) {
        universities[ids[i]] = universities[ids[i]] ? universities[ids[i]] + 1 : 1;
    }

    const sorted = Object.entries(universities).sort((a, b) => b[1] - a[1]); // по убыванию (desc)

    // Фильтрация и вывод только первых k университетов
    console.log(
        sorted
            .slice(0, k)  // Возьмем первые k элементов
            .map(entry => entry[0])  // Получим ключи (университеты)
            .join(' ')  // Выведем их через пробел
    );
}