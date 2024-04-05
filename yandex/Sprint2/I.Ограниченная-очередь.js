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

function readStringArray(quantity, size) {
    let commands = '';
    const printCommands = ['peek', 'size', 'pop'];
    const errorCodes = ['error', 'None'];

    const queue = new MyQueueSized(size);

    for (let k = 0; k < quantity; k++) {
        const [command, value] = _inputLines[_curLine++].split(' ');

        const result = queue[command](value);

        if (printCommands.includes(command) || errorCodes.includes(result)) commands += commands ? `\n${result}` : result;
    }

    return commands;
}

class MyQueueSized {
    constructor(n) {
        this.queue = new Array(n).fill(null);
        this.head = 0;
        this.tail = 0;
        this.max_n = n;
        this.queue_size = 0;
    }

    is_empty() {
        return this.size() === 0;
    }

    push(x) {
        if (this.size() + 1 > this.max_n) return 'error';

        this.queue[this.tail] = x;
        this.tail = (this.tail + 1) % this.max_n;
        this.queue_size += 1;
    }

    pop() {
        if (this.is_empty()) return 'None';

        let x = this.queue[this.head];
        this.queue[this.head] = null;
        this.head = (this.head + 1) % this.max_n;
        this.queue_size -= 1;
        return x;
    }

    peek() {
        if (this.is_empty()) return 'None';

        return this.queue[this.head];
    }

    size() {
        return this.queue_size;
    }
}

function solve() {
    const quantity = readNumber();
    const size = readNumber();
    const result = readStringArray(quantity, size);

    console.log(result);
}

