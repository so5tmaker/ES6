// JavaScript

const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function solve() {
    const n = Number(_inputLines[0]);
    var arr = _inputLines[1].trim(" ").split(" ").map(num => Number(num));
    process.stdout.write(`${arr.join(' ')}`);
}