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
function readArrayString() {
    return _inputLines[_curLine++].split(' ');
}



function insertionSortByKey(array, length, key) {
    for (let i = 1; i < length; i++) {
        const itemToInsert = array[i];
        let j = i;
        // заменим сравнение itemToInsert < array[j-1] на сравнение ключей
        while (j > 0 && key(itemToInsert, array[j - 1])) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = itemToInsert;
    }

    console.log(array.join(''));
}

function solve() {
    const length = readNumber();
    const numbers = readArrayString();

    function key(a, b) { // — это лексиграфическая сортировка
        // Сравниваем числа, объединенные как строковые значения, в обратном порядке
        return (a + b) > (b + a);
    }

    insertionSortByKey(numbers, length, key);
}