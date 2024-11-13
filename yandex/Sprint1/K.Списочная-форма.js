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

const getNumber = () => inputLines[curLine++].split(' ').map(Number);

function solve() {
    const n = readNumber();
    const x = getNumber();
    let k = readNumber();

    let carry = k;
    let i = x.length - 1;

    while (carry > 0 || i >= 0) {
        if (i >= 0) {
            let sum = x[i] + (carry % 10);
            x[i] = sum % 10;
            carry = Math.floor(carry / 10) + Math.floor(sum / 10);
            i--;
        } else {
            x.unshift(carry % 10);
            carry = Math.floor(carry / 10);
        }
    }

    console.log(x.join(' '));
}