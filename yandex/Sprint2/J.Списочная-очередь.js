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

class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

function readStringArray(quantity, size) {
    let commands = '';
    const printCommands = ['size', 'get'];
    const errorCodes = ['error'];

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
        this.queue = null;
        this.head = null;
        this.tail = null;
        this.max_n = n;
        this.queue_size = 0;
    }

    is_empty() {
        return this.size() === 0;
    }

    put(x) {
        const newNode = new Node(x);
        this.tail = this.is_empty() ? new Node(x) : new Node(x, this.queue);
        this.queue = this.is_empty() ? new Node(x) : new Node(x, this.queue);
        this.queue_size += 1;
    }

    get() {
        if (this.is_empty()) return 'error';

        const x = this.head.value;

        this.queue = this.head.next;
        this.head = this.head.next;
        this.queue_size -= 1;

        return x;
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

