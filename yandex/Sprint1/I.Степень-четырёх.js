const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const Answers = {
    TRUE: 'True',
    FALSE: 'False',
};

const { TRUE, FALSE } = Answers;

const LINE = 'line';
const CLOSE = 'close';

const inputLines = [];
let curLine = 0;

// чтение строк из стандартного ввода
reader.on(LINE, line => inputLines.push(line));
reader.on(CLOSE, solve);

// функция для чтения строк из входных данных
const readNumber = () => Number(inputLines[curLine++]);

function solve() {
    let n = readNumber();

    if (n === 1) { console.log(TRUE); return; }

    if (n < 4) { console.log(FALSE); return; }

    while (n > 4) {
        n = n / 4;
    }

    console.log(n === 4 ? TRUE : FALSE);
}

function progSolve() {
    let n = readNumber();

    while (n % 4 === 0) {
        n /= 4;
    }

    console.log(n === 1 ? TRUE : FALSE);
}
/* bit shift
2 = 10
3 = 11
4 = 100
12 = 1100
num >> 2, 1100 (12) >> 2 = 11 (3) - a two-bit shift to the right is a division by 4
num >> 1, 100 (4) >> 1 = 10 (2) - a one-bit shift to the right is a division by 2
num & 1 - побитовое и с 1
num % 2 == 0 равнозначно (num & 1) == 0

*/
function shiftSolve() {
    let n = readNumber();

    while (((n & 1) === 0) && (((n >> 1) & 1) === 0)) {
        n >>= 2;
    }

    console.log(n === 1 ? TRUE : FALSE);
}

/*
log 4 x = целое число
log y x = log z x / log z y (log z сократится)
*/

function mathSolve() {
    let n = readNumber();

    let power = Math.log(n) / Math.log(4);

    console.log(Math.floor(power) === power ? TRUE : FALSE);
}