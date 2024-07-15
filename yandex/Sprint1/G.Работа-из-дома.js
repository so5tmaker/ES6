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
function readNumber() {
    return Number(_inputLines[_curLine++]);
}


function solve() {
    let current = readNumber();
    let binary = '';

    if (!current) return console.log('0');

    while (current > 0) {
        // Находим максимальную степень двойки, которая меньше или равна current
        let power = 0;
        while (Math.pow(2, power + 1) <= current) {
            power++;
        }

        // Добавляем бит '1' для этой степени двойки
        binary += '1';

        // Вычитаем найденную степень двойки из current
        current -= Math.pow(2, power);

        // Добавляем недостающие нули между '1' битами
        for (let i = 0; i < power; i++) {
            if (current < Math.pow(2, power - 1 - i)) {
                binary += '0';
            } else {
                binary += '1';
                current -= Math.pow(2, power - 1 - i);
            }
        }
    }

    console.log(binary);
}
