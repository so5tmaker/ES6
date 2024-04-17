const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin
});

const inputLines = [];

reader.on('line', line => {
    inputLines.push(line);
});

reader.on('close', solve);

function readString() {
    return inputLines[0];
}

function getFilter(str) {
    const keypad = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    };
    const filter = [];

    for (let i = 0; i < str.length; i++) {
        filter.push(keypad[str[i]]);
    }

    return filter;
}

function getCombinations(filter, current, sequence, results) {
    if (current === filter.length) {
        results.push(sequence);
        return;
    }

    for (let i = 0; i < filter[current].length; i++) {
        getCombinations(filter, current + 1, sequence + filter[current][i], results);
    }
}

function solve() {
    const str = readString();
    const filter = getFilter(str);
    const results = [];
    getCombinations(filter, 0, '', results);
    console.log(results.join(' '));
}