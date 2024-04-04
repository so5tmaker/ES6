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
    let commands = '';
    const printCommands = ['get_max', 'top'];
    const ERROR = 'error'

    const stack = new StackMax();

    for (let k = 0; k < size; k++) {
        const [command, value] = _inputLines[_curLine++].split(' ');

        const result = stack[command](value);

        if (printCommands.includes(command) || result === ERROR) commands += commands ? `\n${result}` : result;
    }

    return commands;
}

class StackMax {
    constructor() {
        this.items = [];
        this.maxItems = [];
    }

    push(item) {
        let max = this.maxItems.length === 0 ? item : this.maxItems[this.maxItems.length - 1];

        max = Math.max(max, item);

        this.items.push(item);
        this.maxItems.push(max);
    }

    pop() {
        if (!this.items.length) return 'error';

        this.items.pop();
        this.maxItems.pop();
    }

    get_max() {
        if (!this.maxItems.length) return 'None';

        return this.maxItems[this.maxItems.length - 1];
    }

    top() {
        if (!this.items.length) return 'error';

        return this.items[this.items.length - 1];
    }
}

function solve() {
    const quantity = readNumber();
    const result = readStringArray(quantity);

    console.log(result);
}

