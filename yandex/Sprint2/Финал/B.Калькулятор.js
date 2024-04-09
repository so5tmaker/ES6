
/*
https://contest.yandex.ru/contest/22781/run-report/111664425/

-- ПРИНЦИП РАБОТЫ --
Я реализовал стек для обработки и вычисления арифметического выражения в постфиксной записи.

-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Использование стека позволяет эффективно управлять порядком операций в арифметическом выражении, 
обеспечивая при этом постоянное время выполнения основных операций (O(1)) – это push и pop.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Добавление элемента в стек (операция push) выполняется за время O(1), 
как и удаление из конца (операция pop), так как это простое присваивание значения ячейке массива.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Стек содержит n элементов, где n — количество операндов и операторов в выражении, 
следовательно, пространственная сложность составляет O(n).
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

// Функция парсит число из очередной строки массива _inputLines
// и сдвигает указатель на единицу вперёд.
function readArrayString() {
    return _inputLines[_curLine++].split(' ');
}


function solve() {
    const tokens = readArrayString();
    const stack = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(parseInt(token, 10));
            continue;
        }

        const right = stack.pop();
        const left = stack.pop();

        switch (token) {
            case '+':
                stack.push(left + right);
                break;
            case '-':
                stack.push(left - right);
                break;
            case '*':
                stack.push(left * right);
                break;
            default:
                stack.push(Math.floor(left / right));
        }

    }

    console.log(stack.pop());
}