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


const getBracket = (n, opened, closed, sequence) => {
    if (opened === n && closed === n) {
        console.log(sequence);
        return;
    }
    if (opened < n) {
        getBracket(n, opened + 1, closed, sequence + "(");
    }
    if (opened > closed) {
        getBracket(n, opened, closed + 1, sequence + ")");
    }
}

function solve() {
    const n = readNumber();
    getBracket(n, 0, 0, '');
}