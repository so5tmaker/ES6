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

function readNumberArray() {
    const line = _inputLines[_curLine++];
    return line ? line.split(' ').map(val => Number(val)) : [];
}

function isOdd(num) {
    return (num & 1) === 1;
}

function solve() {
    const nums = readNumberArray();

    const currentCondition = isOdd(nums[0]);

    let answer = 'WIN';

    for (let i = 1; i < nums.length; i++) {
        if (currentCondition !== isOdd(nums[i])) { answer = 'FAIL'; break };
    }

    console.log(answer);
}