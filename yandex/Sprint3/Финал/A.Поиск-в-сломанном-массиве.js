/*
https://contest.yandex.ru/contest/23815/run-report/112686274/

-- ПРИНЦИП РАБОТЫ --
Я реализовал поиск по сломанному массиву с помощью модифицированного бинарного поиска.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Использование бинарного поиска позволяет разбивать массив на два и затем эффективно находить искомый элемент, 
обеспечивая при этом постоянное время выполнения (O(log n)).

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Поиск с помощью бинарного поиска выполняется за время O(log n).

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Мы не используем дополнительную память, а только переменные, а значит пространственная сложность составляет O(1).
*/

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

function readNumberArray() { return _inputLines[_curLine++].split(' ').map(i => Number(i)); }

function brokenSearch(numbers, length, item) {
    let left = 0;
    let right = length - 1;

    while (left <= right) {
        const mid = Math.floor((right + left) / 2);

        if (item === numbers[mid]) return mid;

        // если левая половина отсортирована
        if (numbers[left] <= numbers[mid]) {
            // если элемент находится в отсортированной левой половине
            if (numbers[left] <= item && item < numbers[mid]) { right = mid - 1; }
            else { left = mid + 1; }
        } else // если правая половина отсортирована
        {
            // если элемент находится в отсортированной правой половине
            if (item <= numbers[right] && item > numbers[mid]) { left = mid + 1; }
            else { right = mid - 1; }
        }

    }

    return -1;
}

function solve() {
    const length = readNumber();
    const item = readNumber();
    const numbers = readNumberArray();

    brokenSearch(numbers, length, item);
}