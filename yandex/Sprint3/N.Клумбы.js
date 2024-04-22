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

function readNumber() {
    return Number(_inputLines[_curLine++]);
}

function readStringArray(size) {
    const commands = [];

    for (let k = 0; k < size; k++) {
        commands.push(_inputLines[_curLine++].split(' ').map(i => Number(i)));
    }

    return commands;
}


function solve() {
    const length = readNumber();
    const numbers = readStringArray(length);

    // const segments = insertionSortByKey(numbers);
    const segments = numbers.sort((a, b) => a[0] - b[0]);

    let mergedSegments = [segments[0]];

    // Проходим по отсортированным отрезкам и объединяем их
    for (let i = 1; i < segments.length; i++) {
        let currentSegment = segments[i];
        let lastMergedSegment = mergedSegments[mergedSegments.length - 1];

        // Проверяем, перекрывается ли текущий отрезок с последним объединенным отрезком
        if (currentSegment[0] <= lastMergedSegment[1]) {
            // Объединяем отрезки, берем максимальную правую границу
            lastMergedSegment[1] = Math.max(lastMergedSegment[1], currentSegment[1]);
        } else {
            // Если отрезки не перекрываются, добавляем текущий отрезок как новый объединенный
            mergedSegments.push(currentSegment);
        }
    }

    for (let i = 0; i < mergedSegments.length; i++) {
        console.log(mergedSegments[i].join(' '));
    }

}