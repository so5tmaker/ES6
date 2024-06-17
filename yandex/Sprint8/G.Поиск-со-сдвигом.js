
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
const readNumber = () => Number(inputLines[curLine++]);
const readNumberArray = () => inputLines[curLine++].split(' ').map(val => Number(val));

// Найти первое вхождение подстроки pattern в строке text,
// находящееся на позиции не раньше start.
function findAllOccurrences(n, text, m, pattern) {
    let occurrences = [];

    for (let i = 0; i <= n - m; i++) {
        const offset = text[i] - pattern[0];
        // Проверяем, не совпадёт ли шаблон, сдвинутый на позицию i,
        // с соответствующим участком строки.
        let match = true;

        for (let j = 0; j < m; j++) {
            if (text[i + j] !== pattern[j] + offset) {
                // Одного несовпадения достаточно, чтобы не проверять
                // дальше текущее расположение шаблона.
                match = false;
                break;
            }
        }

        if (match) occurrences.push(i + 1);
    }

    return occurrences.join(' ');
}

function solve() {
    const n = readNumber();
    const text = readNumberArray();
    const m = readNumber();
    const pattern = readNumberArray();


    console.log(findAllOccurrences(n, text, m, pattern));
}