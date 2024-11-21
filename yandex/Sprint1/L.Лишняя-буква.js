/*
Васе очень нравятся задачи про строки, поэтому он придумал свою. Есть 2 строки s и t, состоящие только из строчных букв. 
Строка t получена перемешиванием букв строки s и добавлением 1 буквы в случайную позицию. Нужно найти добавленную букву.
*/

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
    const s = getNumber();
    const t = getNumber();

    // sort both string t
    s.sort();
    t.sort();
    // loop trough s compare both symbols s and t
    for (let i = 0; i < s.length; i++) {
        // return the symbol of t
        if (s[i] !== t[i]) {
            console.log(t[i]);
            return;
        }
    }
    // if did not find extra character return the last
    console.log(t[t.length - 1]);
}