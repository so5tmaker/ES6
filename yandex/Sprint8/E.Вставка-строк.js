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
const readNumber = () => Number(inputLines[curLine++]);

const readArray = (n) => {
    // Массив для хранения всех вставок в формате [индекс, строка]
    const inserts = [];
    for (let i = 0; i < n; i++) {
        const [t, k] = inputLines[curLine++].split(' ');
        inserts.push([Number(k), t]);
    }

    // Сортируем вставки по индексам
    inserts.sort((a, b) => a[0] - b[0]);

    return inserts;
}

function solve() {
    // Чтение строки s
    const s = readString();
    const n = readNumber();

    const inserts = readArray(n);

    // Результирующая строка
    let result = '';
    let currentIndex = 0;

    // Итерируемся по вставкам и добавляем части исходной строки и вставки
    for (const [index, str] of inserts) {
        // Добавляем часть строки s до текущей вставки
        result += s.slice(currentIndex, index);
        // Добавляем вставку
        result += str;
        // Обновляем текущий индекс
        currentIndex = index;
    }

    // Добавляем оставшуюся часть строки s
    result += s.slice(currentIndex);

    console.log(result);
}