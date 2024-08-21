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

function solve() {
    const interns = readNumber();

    const getCommits = (n) => {
        if (n < 2) return 1;

        return getCommits(n - 1) + getCommits(n - 2);

    }

    console.log(getCommits(interns));
}