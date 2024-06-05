const _readline = require("readline");

const _reader = _readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const END = 'close';
const LINE = 'line';

const _inputLines = [];
let _curLine = 0;

_reader.on(LINE, line => _inputLines.push(line));

_reader.on(END, solve);

const readNumber = () => Number(_inputLines[_curLine++]);

const readNumbers = () => _inputLines[_curLine++].split(' ').map(Number);

function getHeaps(n) {
    const heaps = [];
    for (let i = 0; i < n; i++) {
        const [price, weight] = readNumbers();
        heaps.push({ price, weight });
    }
    // Сортируем кучи по убыванию стоимости за килограмм
    heaps.sort((a, b) => b.price - a.price);

    return heaps;
}

function solve() {
    const capacity = readNumber();
    const quantity = readNumber();

    let totalPrice = 0;
    let remainingCapacity = capacity;

    const heaps = getHeaps(quantity);

    for (const heap of heaps) {
        if (remainingCapacity <= 0) break;

        // Берем максимально возможный вес текущей кучи
        const weightToTake = Math.min(heap.weight, remainingCapacity);

        totalPrice += weightToTake * heap.price;
        remainingCapacity -= weightToTake;
    }

    console.log(totalPrice);
}
