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

const getMedian = (population, length) => (population[length / 2 - 1] + population[length / 2]) / 2;


function solve() {
    const n = readNumber();
    const m = readNumber();
    const northPopulation = readArrayNumber();
    const southPopulation = readArrayNumber();

    const length = n + m;
    const population = [...northPopulation, ...southPopulation].sort((a, b) => a - b);

    console.log(length % 2 === 0 ? getMedian(population, length) : population[(length - 1) / 2]);
}

