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

function readNumberArray(n) {
    const nums = [];

    for (let k = 0; k < n; k++) {
        const line = _inputLines[_curLine++];

        nums.push(line ? line.split(' ').map(val => Number(val)) : []);
    }

    return nums;
}

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

function solve() {
    const n = readNumber();
    const m = readNumber();
    const nums = readNumberArray(n);
    const i = readNumber();
    const j = readNumber();
    const array = [];

    if (i > 0) array.push(nums[i - 1][j]);
    if (j > 0) array.push(nums[i][j - 1]);
    if (i < n - 1) array.push(nums[i + 1][j]);
    if (j < m - 1) array.push(nums[i][j + 1]);

    console.log(array.sort((a, b) => a - b).join(' '));
}