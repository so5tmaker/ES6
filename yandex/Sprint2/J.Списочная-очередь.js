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

function readStringArray(quantity) {
    let commands = '';
    const printCommands = ['size', 'get'];
    const errorCodes = ['error'];

    const queue = new MyQueueSized();

    for (let k = 0; k < quantity; k++) {
        const [command, value] = _inputLines[_curLine++].split(' ');

        const result = queue[command](value);

        if (printCommands.includes(command) || errorCodes.includes(result)) commands += commands ? `\n${result}` : result;
    }

    return commands;
}

class MyQueueSized {
    constructor() {
        this.head = null;
        this.tail = null;
        this.queueSize = 0;
    }

    isEmpty() {
        return this.queueSize === 0;
    }

    print(node) {
        let current = node;
        let result = '';
        while (current) {
            result += current.value ? current.value + '->' : '';
            current = current.next;
        }
        console.log(result + 'null')
    }

    put(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            // this.print(this.tail);
            this.tail = newNode;
            // this.print(this.tail);
        }

        this.queueSize++;
    }

    get() {
        if (this.isEmpty()) return 'error';

        const value = this.head.value;

        this.head = this.head.next;
        this.queueSize--;

        return value;
    }

    size() {
        return this.queueSize;
    }
}

function solve() {
    const quantity = readNumber();
    const result = readStringArray(quantity);

    console.log(result);
}

