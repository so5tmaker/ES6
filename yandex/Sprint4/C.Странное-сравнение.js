const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on("line", line => {
    _inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on("end", solve);

const readString = () => _inputLines[_curLine++];


function strangeCompare(first, second) {
    if (first.length !== second.length) { console.log('NO'); return; }

    let stringHash = {}, strings = [];

    for (let i = 0; i < first.length; i++) {
        if (stringHash[first[i]] === undefined && strings.includes(second[i])) { console.log('NO'); return; }

        if (stringHash[first[i]] === undefined && stringHash[second[i]] === undefined) { stringHash[first[i]] = second[i]; strings.push(second[i]); }

        if (stringHash[first[i]] !== undefined && stringHash[first[i]] !== second[i]) { console.log('NO'); return; }
    }

    console.log('YES');
}

function solve() {
    const first = readString();
    const second = readString();

    strangeCompare(first, second);
}