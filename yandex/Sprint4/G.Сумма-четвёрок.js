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

function readNumberArray() {
    const line = _inputLines[_curLine++];
    return line ? line.split(' ').map(val => Number(val)) : [];
}

function sumOfFours(A, x, length) {
    let n = length;
    let sortedX = [...x];
    sortedX.sort((a, b) => a - b);
    let fours = new Set();

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n - 2; j++) {
            let left = j + 1;
            let right = n - 1;
            while (left < right) {
                let sum = sortedX[i] + sortedX[j] + sortedX[left] + sortedX[right];
                if (sum === A) {
                    let four = [sortedX[i], sortedX[j], sortedX[left], sortedX[right]];
                    fours.add(four.join(' '));
                    left++;
                    right--;
                } else if (sum < A) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    console.log(fours.size);
    fours.forEach(four => console.log(four));
}

function solve() {
    const n = readNumber();
    const s = readNumber();
    const nums = readNumberArray();

    sumOfFours(s, nums, n);
}