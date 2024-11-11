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
const readNumber = () => Number(inputLines[curLine++]);

const getNumber = () => Number(inputLines[curLine++].split(' ').join(''));

function solve() {
    const number = readNumber();
    const x = getNumber();
    const k = readNumber();


    console.log(`${x + k}`.split('').join(' '));
}