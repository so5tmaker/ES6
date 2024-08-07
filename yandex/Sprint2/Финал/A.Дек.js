
/*
https://contest.yandex.ru/contest/22781/run-report/111734002/

-- ПРИНЦИП РАБОТЫ --
Я реализовал дек (двусторонюю очередь) с помощью кольцевого буфера на массиве.
Это очередь ограниченной длины с n элементами.

Реализация дэка похожа на реализацию очереди, но только тут добавляется возможность
вставки элементов в начало и конец очереди. Для этого используются индексы головы 
для начального элемента и хвоста для последнего элемента. 
Это позволяет быстро вставлять и удалять элементы с обоих концов дека.



-- ДОКАЗАТЕЛЬСТВО КОРРЕКТНОСТИ --
Использование кольцевого буфера позволяет эффективно управлять элементами в деке 
без необходимости перемещения остальных элементов при каждой операции. 
При достижении конца массива, операции циклически переносятся на его начало. 
Такой подход обеспечивает постоянное время выполнения (O(1)) 
для всех базовых операций - push_back, push_front, pop_back и pop_front.

-- ВРЕМЕННАЯ СЛОЖНОСТЬ --
Добавление в дэк стоит O(1), потому что добавление во входной стек стоит O(1), 
так как это простое присваивание значения ячейке массива и изменение индекса головы или хвоста.

Извлечение из дэка стоит O(1), потому что извлечение во входной стек стоит O(1),
так как происходит лишь удаление элемента из ячейки массива и изменение индекса головы или хвоста соответственно.

-- ПРОСТРАНСТВЕННАЯ СЛОЖНОСТЬ --
Дэк содержит n элементов, поэтому пространственная сложность данной структуры данных составляет O(n).
Кольцевой буфер фиксированного размера определяет максимальное количество элементов, которое может содержать дек, 
и это количество заранее выделено в памяти.

Поэтому и моя очередь будет потреблять O(n) памяти.
*/

const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
const ERROR = 'error';
const PUSH_FRONT = 'push_front';
const PUSH_BACK = 'push_back';
const POP_FRONT = 'pop_front';
const POP_BACK = 'pop_back';
const commands = {
    [PUSH_FRONT]: 'pushFront',
    [PUSH_BACK]: 'pushBack',
    [POP_FRONT]: 'popFront',
    [POP_BACK]: 'popBack',
}
const printCommands = [POP_FRONT, POP_BACK];
const errorCodes = [ERROR];
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
    let result = '';

    const deque = new MyDeque(size);

    for (let k = 0; k < quantity; k++) {
        const [command, value] = _inputLines[_curLine++].split(' ');
        const currentCommand = commands[command];

        const response = deque[currentCommand](value);

        if (printCommands.includes(command) || errorCodes.includes(response)) result += result ? `\n${response}` : response;
    }

    return result;
}

class MyDeque {
    constructor(maxSize) {
        this.deque = new Array(maxSize);
        this.head = 0;
        this.tail = 0;
        this.maxSize = maxSize;
        this.size = 0;
    }

    isFull() {
        return this.size >= this.maxSize;
    }

    empty() {
        return this.size === 0;
    }

    pushFront(value) {
        if (this.isFull()) return ERROR;

        this.head = (this.head - 1 + this.maxSize) % this.maxSize;
        this.deque[this.head] = value;
        this.size++;
    }

    pushBack(value) {
        if (this.isFull()) return ERROR;

        this.deque[this.tail] = value;
        this.tail = (this.tail + 1) % this.maxSize;
        this.size++;
    }

    popFront() {
        if (this.empty()) return ERROR;

        const value = this.deque[this.head];
        this.head = (this.head + 1) % this.maxSize;
        this.size--;

        return value;
    }

    popBack() {
        if (this.empty()) return ERROR;

        this.tail = (this.tail - 1 + this.maxSize) % this.maxSize;
        const value = this.deque[this.tail];
        this.size--;

        return value;
    }
}

function solve() {
    const quantity = readNumber();
    const size = readNumber();
    const result = readStringArray(quantity, size);

    console.log(result);
}