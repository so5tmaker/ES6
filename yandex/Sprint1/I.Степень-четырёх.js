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
