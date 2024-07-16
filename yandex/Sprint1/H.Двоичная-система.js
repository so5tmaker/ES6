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

// Функция парсит число из очередной строки массива _inputLines
// и сдвигает указатель на единицу вперёд.
function readString() {
    return _inputLines[_curLine++];
}

function solve() {
    let first = readString();
    let second = readString();
    let prev = '0'; // Перенос
    let result = '';

    // Выровнять длину строк путем добавления нулей слева
    if (first.length !== second.length) {
        const diff = Math.abs(first.length - second.length);
        if (first.length > second.length) {
            second = Array(diff).fill('0').join('') + second;
        } else {
            first = Array(diff).fill('0').join('') + first;
        }
    }

    // Функция для получения суммы двух битов и возможного переноса
    const getResult = (a, b, carry) => {
        const sum = parseInt(a) + parseInt(b) + parseInt(carry);
        if (sum === 0) return ['0', '0'];
        if (sum === 1) return ['1', '0'];
        if (sum === 2) return ['0', '1'];
        if (sum === 3) return ['1', '1'];
    }

    // Проход по разрядам с конца к началу
    for (let i = first.length - 1; i >= 0; i--) {
        let [cur, newPrev] = getResult(first[i], second[i], prev);
        prev = newPrev;
        result = cur + result;
    }

    // Учитываем последний перенос, если он есть
    if (prev === '1') {
        result = '1' + result;
    }

    console.log(result);
}