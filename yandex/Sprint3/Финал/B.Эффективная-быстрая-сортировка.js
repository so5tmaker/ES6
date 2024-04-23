/*
https://contest.yandex.ru/contest/23815/run-report/112771159/

-- ПРИНЦИП РАБОТЫ --
Я реализовал сортировку по таблице результатов с помощью модифицированной "in-place" быстрой сортировки (англ. quick sort).

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Использование модифицированной "in-place" быстрой сортировки позволяет уменьшить потребление дополнительной памяти для промежуточных данных до O(n).

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Сортировка с помощью quick sort выполняется за время O(n log n) в среднем и O(n^2) в худшем случае.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Мы не используем дополнительную память в in-place quick sort, а только переменные, а значит пространственная сложность составляет O(1).
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

function readStringArray(size) {
    const info = [];

    for (let k = 0; k < size; k++) {
        info.push(_inputLines[_curLine++].split(' '));
    }

    return info;
}

function partition(info, left, right) {
    const pivotTasks = Number(info[right][1]);
    const pivotPenalty = Number(info[right][2]);
    const pivotUsername = info[right][0];

    let index = left - 1;

    for (let j = left; j < right; j++) {
        const currentTasks = Number(info[j][1]);
        const currentPenalty = Number(info[j][2]);
        const currentUsername = info[j][0];

        if (currentTasks > pivotTasks ||
            (currentTasks === pivotTasks && currentPenalty < pivotPenalty) ||
            (currentTasks === pivotTasks && currentPenalty === pivotPenalty && currentUsername < pivotUsername)) {
            index++;
            [info[index], info[j]] = [info[j], info[index]]; // меняем текущий элемент местами с элементом на позиции index
        }
    }

    [info[index + 1], info[right]] = [info[right], info[index + 1]]; // передвинем (swap) опорный элемент на его правильную позицию
    return index + 1;
}

function quickSort(info, left, right) {
    if (left < right) {
        const pivot = partition(info, left, right);
        quickSort(info, left, pivot - 1);
        quickSort(info, pivot + 1, right);
    }
}

function solve() {
    const length = readNumber();
    const info = readStringArray(length);

    quickSort(info, 0, length - 1);

    for (const row of info) {
        console.log(row[0]);
    }
}