
const readline = require("readline");

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const inputLines = [];
let curLine = 0;

// Чтение строк из стандартного ввода
reader.on('line', line => inputLines.push(line));
reader.on('close', solve);

// Функция для чтения строк из входных данных
const readString = () => inputLines[curLine++];

// Функция для получения строки, содержащей только буквы на четных позициях в алфавите
const getClearString = (s) => {
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if ((alphabet.indexOf(s[i]) + 1) % 2 === 0) {
            result += s[i];
        }
    }
    return result;
}

function solve() {
    // Чтение двух строк для сравнения
    const a = readString();
    const b = readString();

    const s = getClearString(a);
    const t = getClearString(b);

    if (s === t) {
        console.log(0);
        return;
    }

    console.log(s < t ? -1 : 1);
}