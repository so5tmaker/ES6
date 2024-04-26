const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let _curLine = 0;

// Установим callback на считывание строки - так мы получим
// все строки из ввода в массиве _inputLines.
_reader.on("line", line => {
    _inputLines.push(line);
});

// Когда ввод закончится, будет вызвана функция solve.
process.stdin.on("end", solve);

const readNumber = () => Number(_inputLines[_curLine++]);

function readNumberArray() {
    return _inputLines[_curLine++].split(' ').map((i) => Number(i));
}

function longestDrawGameRound(rounds) {
    let sumHash = {}; // Объект для хранения сумм и их индексов
    let maxLen = 0; // Максимальная длина непрерывного отрезка с нулевой суммой
    let sum = 0; // Текущая сумма
    sumHash[0] = -1; // Начальная сумма 0 находится до начала массива

    for (let i = 0; i < rounds.length; i++) {
        sum += (rounds[i] === 0) ? 1 : -1; // Суммируем 1 за победу первого участника и -1 за победу второго

        if (sum === 0) {
            // Если сумма равна 0, значит текущий отрезок даёт ничью
            maxLen = i + 1; // Обновляем максимальную длину
        } else if (sumHash[sum] !== undefined) {
            // Если текущая сумма уже встречалась ранее, это означает наличие нулевой суммы между индексами
            maxLen = Math.max(maxLen, i - sumHash[sum]);
        } else {
            // Если текущая сумма встречается впервые, сохраняем ее индекс
            sumHash[sum] = i;
        }
    }

    console.log(maxLen);
}

function solve() {
    const length = readNumber();
    const rounds = readNumberArray(length);

    longestDrawGameRound(rounds);
}