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


function readArray() {
    return _inputLines[_curLine++];
}

const lowerCase = (letter) => letter.toLowerCase();

function solve1() {
    const text = readArray();
    const re = /[A-Za-z0-9]/g;

    let answer = '', initial = '';

    for (let i = 0; i < text.length; i++) {
        initial += lowerCase(text[i]).search(re) > -1 ? lowerCase(text[i]) : '';
    }

    for (let i = text.length - 1; i >= 0; i--) {
        answer += lowerCase(text[i]).search(re) > -1 ? lowerCase(text[i]) : '';
    }

    console.log(answer === initial ? 'True' : 'False');
}

function solve() { // the solution from the video with two pointers
    const text = readArray();
    const re = /[A-Za-z0-9]/g;

    let answer = true, right = text.length - 1, left = 0;

    while (left < right) {
        while (text[left].search(re) === -1) {
            left++; continue;
        }
        while (text[right].search(re) === -1) {
            right--; continue;
        }

        if (lowerCase(text[right]) !== lowerCase(text[left])) {
            answer = false; break;
        }

        left++;
        right--;
    }

    console.log(answer ? 'True' : 'False');
}