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

function readStringArray() {
    return _inputLines[_curLine++].split(' ').map(i => Number(i));
}

function satisfiedChildrenCount(children, cookies) {
    children.sort((a, b) => a - b);
    cookies.sort((a, b) => a - b);

    let satisfied = 0;
    let cookieIndex = 0;

    for (let i = 0; i < children.length; i++) {
        while (cookieIndex < cookies.length && cookies[cookieIndex] < children[i]) {
            cookieIndex++;
        }

        if (cookieIndex < cookies.length) {
            satisfied++;
            cookieIndex++;
        } else {
            break;
        }
    }

    return satisfied;
}


function solve() {
    const childrenQuantity = readNumber();
    const children = readStringArray();
    const cookiesQuantity = readNumber();
    const cookies = readStringArray();

    console.log(satisfiedChildrenCount(children, cookies));
}