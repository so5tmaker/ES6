const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines
_reader.on("line", line => {
    _inputLines.push(line);
});

process.stdin.on("end", solve);

const readString = () => _inputLines[_curLine++];

const readNumber = () => Number(_inputLines[_curLine++]);


function getStringHash(s, a, m) {
    let hash = BigInt(0);
    const n = s.length;
    for (let i = 0; i < n; i++) {
        hash = (hash * BigInt(a) + BigInt(s.charCodeAt(i))) % BigInt(m);
    }

    console.log(hash.toString());
}

function solve() {
    const a = readNumber();
    const m = readNumber();
    const s = readString();

    getStringHash(s, a, m);
}

