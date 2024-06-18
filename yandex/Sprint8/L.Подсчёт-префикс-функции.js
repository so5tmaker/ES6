
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const inputLines = [];
let curLine = 0;

// Чтение строк из стандартного ввода
reader.on('line', line => inputLines.push(line));
reader.on('close', solve);

// Функция для чтения строк из входных данных
const readString = () => inputLines[curLine++];

function prefixFunction(s) {
    // Функция возвращает массив длины |s|
    const n = s.length;
    const pi = new Array(n).fill(0);

    for (let i = 1; i < n; ++i) {
        let k = pi[i - 1];
        while (k > 0 && s[k] !== s[i]) {
            k = pi[k - 1];
        }
        if (s[k] === s[i]) {
            ++k;
        }
        pi[i] = k;
    }

    return pi;
}

function solve() {
    const s = readString();

    console.log(prefixFunction(s).join(' '));
}