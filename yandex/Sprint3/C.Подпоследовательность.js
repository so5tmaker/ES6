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
    const s = readString();
    const t = readString();
    i = 0;
    j = 0;

    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
        }

        j++;
    }

    console.log(i === s.length ? 'True' : 'False');
}