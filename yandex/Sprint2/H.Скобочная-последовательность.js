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

function readString() {
    return _inputLines[_curLine++];
}

function solve() {
    const brackets = readString();
    const hash = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    const stack = [];

    for (let i = 0; i < brackets.length; i++) {
        const current = hash[brackets[i]];
        if (!current) { stack.push(brackets[i]); continue; }

        const pop = stack.pop();

        if (pop !== hash[brackets[i]]) { console.log('False'); return; }
    }

    return stack.length === 0 ? console.log('True') : console.log('False');
}