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

function readStringArray(size) {
    const commands = [];

    for (let k = 0; k < size; k++) {
        commands.push(_inputLines[_curLine++]);
    }

    return commands;
}

function readStringArrayTest() {
    const line = `get_max
pop
pop
pop
push 10
get_max
push -9`;

    return line.split('\n');
}

class StackMax {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.items.length) return 'error';

        return this.items.pop();
    }

    get_max() {
        if (!this.items.length) return 'None';

        let max = this.items[0];

        for (let i = 1; i < this.items.length; i++) {
            max = Math.max(max, this.items[i]);
        }

        return max;
    }
}

function solve() {
    const quantity = readNumber();
    // const commands = readStringArray(quantity);
    const commands = readStringArrayTest();
    const GET_MAX = 'get_max';
    const ERROR = 'error'

    const stack = new StackMax();

    for (let i = 0; i < commands.length; i++) {
        const [command, value] = commands[i].split(' ');

        const result = stack[command](value);

        if (command === GET_MAX || result === ERROR) console.log(result);
    }
}