const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const LINE = 'line';
const CLOSE = 'close';

const inputLines = [];
let curLine = 0;

// чтение строк из стандартного ввода
reader.on(LINE, line => inputLines.push(line));
reader.on(CLOSE, solve);

// функция для чтения строк из входных данных
const readString = () => inputLines[curLine++];

function solve() {
    // чтение строки для разворота
    let s = readString();
    let n = s.length;

    if (n === 1) { console.log(s); return };

    console.log(s.split(' ').reverse().join(' '));
}