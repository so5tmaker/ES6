const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on('line', line => {
    _inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on('end', solve);

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

// Функция парсит число из очередной строки массива _inputLines
// и сдвигает указатель на единицу вперёд.
function readArrayNumber() {
    return _inputLines[_curLine++].split(' ').map(i => Number(i));
}

/*
Формула n * (n-1) / 2  используется для вычисления количества пар объектов, которые можно составить из набора из  n  элементов.
Это классическая комбинаторная формула для выбора 2 элементов из  n  без учета порядка (комбинации без повторений).

Некоторые примеры, где используется эта формула:

    •	Количество рёбер в полном графе с  n  вершинами. Полный граф — это граф, в котором каждая пара вершин соединена ребром.
    •	Количество рукопожатий на встрече, если каждый участник пожимает руку каждому другому.
    •	Количество возможных пар в наборе из  n  объектов (например, пар студентов для проектов).

Формула исходит из того, что у каждого элемента есть  n - 1  возможностей для создания пары, а деление на 2 устраняет дублирование (A с B и B с A — это одна и та же пара).
*/

function solve() {
    const islands = readNumber();
    const squares = readArrayNumber();
    const k = readNumber();
    const diffs = [];

    // Вычисляем разницы для всех пар островов
    for (let i = 0; i < islands; i++) {
        for (let j = i + 1; j < islands; j++) {
            diffs.push(Math.abs(squares[i] - squares[j]));
        }
    }

    // Сортируем разницы и выводим k-ю по порядку, возрастание должно быть asc
    diffs.sort((a, b) => a - b);

    // Выводим k-ю минимальную разницу (k - 1, так как индексация начинается с 0)
    console.log(diffs[k - 1]);
}