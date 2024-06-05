const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const END = 'close';
const LINE = 'line';

const _inputLines = [];
let _curLine = 0;

_reader.on(LINE, line => _inputLines.push(line));

_reader.on(END, solve);

const readNumbers = () => _inputLines[_curLine++].split(' ').map(Number);

function solve() {
    const [days] = readNumbers();
    const prices = readNumbers();
    let profit = 0;

    for (let i = 1; i < days; i++)
        if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];

    console.log(profit);
}
