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

function readStringArray(quantity) {
    const documents = [];

    for (let k = 0; k < quantity; k++) {
        documents.push(_inputLines[_curLine++]);
    }

    return documents;
}

function buildIndex(quantity) {
    const index = new Map();

    for (let i = 0; i < quantity; i++) {
        const words = _inputLines[_curLine++].split(' ');

        const wordCount = {};

        for (const word of words) {
            if (!wordCount[word]) {
                wordCount[word] = 0;
            }
            wordCount[word]++;
        }

        for (const word in wordCount) {
            if (!index.has(word)) {
                index.set(word, []);
            }
            index.get(word).push({ docId: i + 1, count: wordCount[word] });
        }
    }

    return index;
}

function getRelevance(documents, query) {
    const words = query.split(' ');
    const relevanceMap = new Map();

    for (const word of words) {
        if (!documents.has(word)) continue;

        const entries = documents.get(word);

        for (const entry of entries) {
            const { docId, count } = entry;
            if (!relevanceMap.has(docId)) {
                relevanceMap.set(docId, 0);
            }

            // Consider the count of the word in the document for relevance
            relevanceMap.set(docId, relevanceMap.get(docId) + count);
        }
    }

    return relevanceMap;
}

function search(index, queries) {
    const results = [];

    for (const query of queries) {
        const relevanceMap = getRelevance(index, query);
        const sortedRelevance = Array.from(relevanceMap.entries()).sort((a, b) => {
            if (a[1] !== b[1]) {
                return b[1] - a[1];
            } else {
                return a[0] - b[0];
            }
        });

        const topResults = sortedRelevance.slice(0, 5).map(entry => entry[0]);
        results.push(topResults);
    }

    return results;
}

function solve() {
    const quantity = readNumber();
    const index = buildIndex(quantity);
    const size = readNumber();
    const queries = readStringArray(size);

    const searchResults = search(index, queries);
    for (const result of searchResults) {
        console.log(result.join(' '));
    }
}